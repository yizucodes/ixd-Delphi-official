//To manipulate HTML
//Need to include this

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
	listenForMessage();
    listenForSuggestions();
    listenForRefresh();
    listenForMemes();
});
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#card4").hide();
    $("#card5").hide();
    $("#card6").hide();

// //Hide 3 memes
//     $("#meme4").hide();
//     $("#meme5").hide();
//     $("#meme6").hide();
}


function articleTrack() {
    ga("send", "event", "convoStarter", "article");
}
function memeTrack() {
    ga("send", "event", "convoStarter", "meme");
}

function listenForSuggestions() {
    listenForSuggestion1();
    listenForSuggestion2();
    listenForSuggestion3();
    listenForSuggestion4();
    listenForSuggestion5();
    listenForSuggestion6();
}

//Listener for memes
function listenForMemes() {
  listenForMeme1();
  listenForMeme2();
  listenForMeme3();
  listenForMeme4();
  listenForMeme5();
  listenForMeme6();
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
        articleTrack();
    });
}

function listenForSuggestion2() {
    $('#suggest2').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2GC4uux' target='_blank'>Boeheim Hit 'n' Run</a></h3><p>Just now</p><hr>");
        newSuggestions();
        articleTrack();
    });
}

function listenForSuggestion3() {
    $('#suggest3').on("click", function() {
        $("#messageChain").append("<h3><a href='https://yhoo.it/2NjQbew' target='_blank'>March Madness Preview</a></h3><p>Just now</p><hr>");
        newSuggestions();
        articleTrack();
    });
}

function listenForSuggestion4() {
    $('#suggest4').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2ECuG5T' target='_blank'>Happy 20th, Luka!</a></h3><p>Just now</p><hr>");
        originalSuggestions();
        articleTrack();
    });
}

function listenForSuggestion5() {
    $('#suggest5').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2T3eUd6' target='_blank'>No Room for AD on Playoff Path</a></h3><p>Just now</p><hr>");
        originalSuggestions();
        articleTrack();
    });
}

function listenForSuggestion6() {
    $('#suggest6').on("click", function() {
        $("#messageChain").append("<h3><a href='https://es.pn/2BWCHkF' target='_blank'>Bagley Exits with Knee Sprain</a></h3><p>Just now</p><hr>");
        originalSuggestions();
        articleTrack();
    });
}

//Append meme1 to chat history
function listenForMeme1() {
    $('#meme1').on("click", function() {

      // $('#test').html('<img src="/static/on.png" height="64px" width="64px">');
        $("#messageChain").append('<img src="https://i.imgflip.com/1uve1v.jpg" height:"300px" width="300px"></h3><p>Just now</p><hr>');
        originalSuggestions();
        memeTrack();
    });
}

function listenForMeme2() {
    $('#meme2').on("click", function() {

      // $('#test').html('<img src="/static/on.png" height="64px" width="64px">');
        $("#messageChain").append('<img src="https://i.pinimg.com/236x/23/87/b8/2387b81ae6ecb2a9213609d8d6a63566--basketball-memes-kentucky.jpg" height:"300px" width="300px"></h3><p>Just now</p><hr>');
        originalSuggestions();
        memeTrack();
    });
}

function listenForMeme3() {
    $('#meme3').on("click", function() {

      // $('#test').html('<img src="/static/on.png" height="64px" width="64px">');
        $("#messageChain").append('<img src="http://www.quickmeme.com/img/7d/7d57bae605b36c8a246205c9fa15889e347b55b7d92a39e2db943c758a43e91d.jpg" height:"300px" width="300px"></h3><p>Just now</p><hr>');
        originalSuggestions();
        memeTrack();
    });
}

function listenForMeme4() {
    $('#meme4').on("click", function() {

      // $('#test').html('<img src="/static/on.png" height="64px" width="64px">');
        $("#messageChain").append('<img src="https://i.pinimg.com/originals/2b/f2/50/2bf250fd05ebffdc435949556849fd84.jpg" height:"300px" width="300px"></h3><p>Just now</p><hr>');
        originalSuggestions();
        memeTrack();
    });
}

function listenForMeme5() {
    $('#meme5').on("click", function() {

      // $('#test').html('<img src="/static/on.png" height="64px" width="64px">');
        $("#messageChain").append('<img src="https://www.memesmonkey.com/images/memesmonkey/34/34d7569201e4022e27fde8201ca795ad.jpeg" height:"300px" width="300px"></h3><p>Just now</p><hr>');
        originalSuggestions();
        memeTrack();
    });
}

function listenForMeme6() {
    $('#meme6').on("click", function() {

      // $('#test').html('<img src="/static/on.png" height="64px" width="64px">');
        $("#messageChain").append('<img src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/17505330_1687244087971478_5405604458972516134_o.jpg?_nc_cat=105&_nc_ht=scontent-lax3-1.xx&oh=60b8c015eaabf85333cc9de1eeb56cc7&oe=5CE951A2" height:"300px" width="300px"></h3><p>Just now</p><hr>');
        originalSuggestions();
        memeTrack();
    });
}
