const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
	
	res.sendFile(__dirname + "/signup.html");
	// res.send("<h1>It works</h1>");
})

app.post("/", function(req, res){

	var firstName = req.body.fName;
	var lastName = req.body.lName;
	var emailAddress = req.body.email;

	console.log(firstName, lastName, emailAddress);

})


app.listen(3000, function(){
	console.log("Server is running on port 3000.");
})

//mailchimp API
//eab5533cebb20410eb2ac55333ba11e3-us1