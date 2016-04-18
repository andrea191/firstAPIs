var express = require("express");
var app = express();


app.get('/',function (req,res){
	//callback function
	res.send("Hello!");
})

app.get("/today", function (req, res){
	var today = new Date();
	res.send(today);
})

app.listen("8888", function (){
	console.log('Server running')
})