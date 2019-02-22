//To manipulate HTML
//Need to include this

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#userSub").on("click", function(){
    var umsg = ($("#usermsg").val());
    $("#newText").append("<p>"+umsg+"</p>");
    $("#usermsg").val("");
}

function addMessage() {
    var x = document.getElementById("textMessage");
    var message = "";
    var i;
    for (i = 0; i < x.length; i++) {
        message += x.elements[i].value;
    }
    var ago = "Just now";
    document.getElementById("newMessageText").text = message;
    document.getElementById("newMessageAgo").text = ago;
}

function addChat() {
    //
}
/*
function projectClick(e) {
    e.preventDefault();
    $(this).css("background-color", "#7fff00");
    
    //New Stuff Lab 3
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
        $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
        $(description).fadeToggle();
    }
}
*/
