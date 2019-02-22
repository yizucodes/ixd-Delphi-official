//To manipulate HTML
//Need to include this

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	listenForMessage();
    listenForSuggestion1();
    listenForSuggestion2();
    listenForSuggestion3();
});
/*
 * Function that is called when the document is ready.
 */
function listenForMessage() {
    $("#userSub").on("click", function(){
        var umsg = ($("#usermsg").val());
        //Put if statement here for blank entry
        $("#messageChain").append("<h3 style='color:green'>Me: </h3><h3>"+umsg+"</h3><p>Just now</p><hr>");
        $("#usermsg").val("");
    });
}

function listenForSuggestion1() {
    $('#suggest1').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2E0dG8e'>Zion Williamson Sprains Knee</a></h3><p>Just now</p><hr>");
        $("#card1").hide()
    });
}

function listenForSuggestion2() {
    $('#suggest2').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2GC4uux'>Boeheim Hit 'n' Run</a></h3><p>Just now</p><hr>");
        $("#card2").hide();
    });
}

function listenForSuggestion3() {
    $('#suggest3').on("click", function() {
        $("#messageChain").append("<h3><a href='https://yhoo.it/2NjQbew'>March Madness Preview</a></h3><p>Just now</p><hr>");
        $("#card3").hide();
    });
}


