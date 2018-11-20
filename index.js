var express = require("express");
var bodyParser = require("body-parser");
//var routes = require("./routes/routes.js");
var app = express();
const PORT = process.env.PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

var server = app.listen(PORT, function () {
    console.log("app running on port.", server.address().port);
});