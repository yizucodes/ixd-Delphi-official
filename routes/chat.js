var data = require("../contacts.json");

exports.view = function(request, response) { 
	// Your code goes here
	console.log(data)
	response.render('chat', {'name': ''});

};
