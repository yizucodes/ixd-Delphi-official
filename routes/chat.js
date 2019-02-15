var data = require("../data.json");

exports.view = function(request, response) { 
	// Your code goes here
	console.log(data)
	response.render('chat', data); //changed from {"name" : ""}

};
