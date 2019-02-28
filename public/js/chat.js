//To manipulate HTML
//Need to include this

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
	listenForMessage();
    listenForSuggestions();
    listenForRefresh();
    //listenForMemes();
});
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
}

/*
listenForMemes() {
    listenMeme1...

}
*/
function listenForSuggestions() {
    listenForSuggestion1();
    listenForSuggestion2();
    listenForSuggestion3();
    listenForSuggestion4();
    listenForSuggestion5();
    listenForSuggestion6();
}

function newSuggestions() {
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
    $("#card4").show();
    $("#card5").show();
    $("#card6").show();
}

function originalSuggestions() {
    $("#card1").show();
    $("#card2").show();
    $("#card3").show();
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();
}

function listenForRefresh() {
    $("#refresh").on("click", function(){
        if ($("#card1").is(':visible')) {
            $("#card1").hide();
            $("#card2").hide();
            $("#card3").hide();
            $("#card4").show();
            $("#card5").show();
            $("#card6").show();
        }
        else {
            $("#card1").show();
            $("#card2").show();
            $("#card3").show();
            $("#card4").hide();
            $("#card5").hide();
            $("#card6").hide();
        }
    });
}

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
        $("#messageChain").append("<h3><a href='https://es.pn/2E0dG8e' target='_blank'>Zion Williamson Sprains Knee</a></h3><p>Just now</p><hr>");
        newSuggestions();
    });
}

function listenForSuggestion2() {
    $('#suggest2').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2GC4uux' target='_blank'>Boeheim Hit 'n' Run</a></h3><p>Just now</p><hr>");
        newSuggestions();
    });
}

function listenForSuggestion3() {
    $('#suggest3').on("click", function() {
        $("#messageChain").append("<h3><a href='https://yhoo.it/2NjQbew' target='_blank'>March Madness Preview</a></h3><p>Just now</p><hr>");
        newSuggestions();
    });
}

function listenForSuggestion4() {
    $('#suggest4').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2ECuG5T' target='_blank'>Happy 20th, Luka!</a></h3><p>Just now</p><hr>");
        originalSuggestions();
    });
}

function listenForSuggestion5() {
    $('#suggest5').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2T3eUd6' target='_blank'>No Room for AD on Playoff Path</a></h3><p>Just now</p><hr>");
        originalSuggestions();
    });
}

function listenForSuggestion6() {
    $('#suggest6').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2BWCHkF' target='_blank'>Bagley Exits with Knee Sprain</a></h3><p>Just now</p><hr>");
        originalSuggestions();
    });
}


