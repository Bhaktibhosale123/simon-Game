var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function(){
  if(!started){
    $("h1").text("level "+level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

 function nextSequence(){
   userClickedPattern = [];
    level++;
   $("h1").text("level "+level);
  var n = Math.random();
  n = Math.floor(n*4);
  var randomChosenColour = buttonColours[n];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name){
  var audio = new Audio("sounds/" +name+ ".mp3");
  audio.play();
}


function animatePress(currentColour){
  $("#"+ currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+ currentColour).removeClass("pressed");
  },100);
}

function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
  if (userClickedPattern.length === gamePattern.length){
    setTimeout(function(){
      nextSequence();
    },1000);
  }

}else {
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
  $("body").removeClass("game-over");
},200);
$("h1").text("Game Over, Press Any Key to Restart");
  startOver();
}
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}








/*$(".btn"+n).fadeOut();
setTimeout(function(){
$(".btn"+n).fadeIn();
},20);
$(".btn"+n).click(function(){
  $(".btn"+n).addClass("pressed");
  setTimeout(function(){
  $(".btn"+n).removeClass("pressed");
},50);
})*/

/*$(document).keypress(function(){
  for (i=1; i<=10; i++){
  $("h1").text("Level "+i);
  level();
}
})*/
