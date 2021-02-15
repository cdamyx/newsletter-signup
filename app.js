const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function(req, res){
	
	// res.sendFile(__dirname + "/index.html");
	res.send("<h1>It works</h1>");
})


app.listen(3000, function(){
	console.log("Server is running on port 3000.");
})