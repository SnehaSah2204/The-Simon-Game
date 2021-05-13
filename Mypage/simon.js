var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var count=1;
var level=0;
// starting the game 
 document.addEventListener("keypress",function(){
  if(count===1){
  $("h1").text("Level "+  level);
  nextSequence();
  count++;
}});
document.addEventListener("click",function(){
  if(count===1){
  $("h1").text("Level "+  level);
  nextSequence();
  count++;
}});


// to see what the use is pressing 
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  });

// to decide the next sequence 
function nextSequence()
{
  userClickedPattern=[];
level=level+1;
$("h1").text("Level "+  level);
var randomNumber=(Math.floor(Math.random()*4));
var randomChosenColour=buttonColors[randomNumber];
gamePattern.push(randomChosenColour);
  idOfRandomColor="#"+randomChosenColour;
 $(idOfRandomColor).fadeOut(120).fadeIn(120);
playSound(randomChosenColour);

}

// to add sounds when the computer shows or user clicks a button 
function playSound(name){
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}

// to add animation on user's click 
function animatePress(currentColor)
{
$("#"+currentColor).addClass("pressed");
setTimeout(function(){
  $("#"+currentColor).removeClass('pressed');
}, 100);
}

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // alert("success");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart ");
  startOver();
  } 
}

function startOver(){
level=0;
gamePattern=[];
count=1;
}







//  playsound(randomChosenColour);
// function playsound(color){
//     switch(color)
// {
//     case "red":
//        var audioplay=new Audio("/sounds/red.mp3");
//        audioplay.play();
//        break;
//      case "green":
//        var audioplay=new Audio("/sounds/green.mp3");
//        audioplay.play();
//        break;
//      case "blue":
//        var audioplay=new Audio("/sounds/blue.mp3");
//        audioplay.play();
//        break;
//      case "yellow":
//        var audioplay=new Audio("/sounds/yellow.mp3");
//        audioplay.play();
//        break;
//    default:console.log("cant play"); 
// }
// }


