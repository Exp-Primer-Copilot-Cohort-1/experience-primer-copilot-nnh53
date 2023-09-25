//create web server
//create web server
var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

//var jsonParser = bodyParser.json()

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: "application/json" }));

var comments = require("./comments.json");
var id = 0;

//read comments.json
//var comments = require('./comments.json');
//var id = 0;

//create a new comment
app.post("/api/comments", function (req, res) {
    //create a new comment
    var newComment = {
        id: id,
    };
});
