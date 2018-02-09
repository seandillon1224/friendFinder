//require dependencies

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//create an express instance
var app = express();

//specify port
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function(){
    console.log("listening on" + port);
});


