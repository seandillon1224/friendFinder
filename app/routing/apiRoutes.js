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

        var bestMatch = {
            name: "",
            image: "",
            matchDifference: 1000
        };
        var usrData = req.body;
        var usrName = usrData.name;
        var usrImage = usrData.image;
        var usrScores = usrData.scores;

        var totalDifference = 0;

        // for (var i = 0; i < friendsData.scores - 1; i++) {
        //     console.log(friendsData[i].name);
            


        //     for (var j = 0; j < 10; j++) {
        //         totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friendsData[i].scores[j]));
        //         console.log(totalDifference);
        //         console.log('cat');
                // if (totalDifference <= bestMatch.matchDifference) {
                //     bestMatch.name = friendsData[i].name;
                //     bestMatch.photo = friendsData[i].photo;
                //     bestMatch.matchDifference = totalDifference;
                // }
        //     }
        // }



        friendsData.push(req.body);
        // console.log(bestMatch);
        res.json(bestMatch);
        // console.log(req.body);

        // friendsData.forEach(function(value, index){
        //         for (var i = 0; i < value.scores.length; i++){
        //            var addedScores;
        //            addedScores += value.scores[i];
        //            console.log(addedScores);
        //         };



        // });


    });

};