var friendsData = require("../data/friends");
var path = require('path');
var totalDifference = 0;

//routing

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    });


    app.post("/api/friends", function (req, res) {
        console.log(req.body);

        var newFriend = {
            name: req.body.name,
            image: req.body.photo,
            scores: []
        };
        var scoresArray = [];
        for (var i = 0; i < req.body.scores.length; i++){
            scoresArray.push(parseInt(req.body.scores[i]))
        }

        newFriend.scores = scoresArray;

        var scoreComparisonArray = [];

        for (var i = 0; i <friendsData.length; i++){
            var currentComparison = 0;
            for (var j = 0; j <newFriend.scores.length; j++){
                currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
            }
            scoreComparisonArray.push(currentComparison);
        }

        var newFriendPosition = 0

        for (var i = 1; i<scoreComparisonArray.length; i++) {
            if(scoreComparisonArray[i] <= scoreComparisonArray[newFriendPosition]){
                newFriendPosition = i;
            }
        }

        var bestFriendMatch = friendsData[newFriendPosition];


        
        // console.log(newFriend);
        res.json(bestFriendMatch);

        friendsData.push(newFriend);
        // console.log(req.body);
    });

};