var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var Allbuttons = document.querySelectorAll("#red, #green, #blue, #yellow");
var started = true;
var levelNumber = 0;
document.addEventListener("keypress",function() { 
  if (started == true )
  { 
    nextSequence();
    started = false;
  }
  });


function CheckMatch(indexOfPressedButton) 
{
 if(gamePattern[indexOfPressedButton]  === userClickPattern[indexOfPressedButton])
 {
  if(userClickPattern.length === gamePattern.length)
  { 
    setTimeout(function() {
      nextSequence()}, 800);
  
   
  }
 }
 else {
   sound("wrong");
   document.getElementById("bgm").classList.add("game-over");
   setTimeout(function() {
    document.getElementById("bgm").classList.remove("game-over");
  }, 200);
  document.getElementById("level-title").innerHTML= "You lost, press any key to restart";
  started = true;
  levelNumber = 0;
  gamePattern=[];


 }
}
function sound(name) {
  switch (name) 
  {
    case "green":
      var greenSound = new Audio('sounds/green.mp3');
      greenSound.play();
      break;
    case "red":
      var redSound = new Audio('sounds/red.mp3');
      redSound.play();
      break;
    case "blue":
      var blueSound = new Audio('sounds/blue.mp3');
      blueSound.play();
      break;
    case "yellow":
      var yellowSound = new Audio('sounds/yellow.mp3');
      yellowSound.play();
      break;
    case "wrong" :
      new Audio("sounds/wrong.mp3").play();
      break;
  }
}

function animate(name) {
  name.classList.add("flash")
  setTimeout(function() {
    name.classList.remove("flash");
  }, 200);
}


function handleClick() {
  var ClickedButtonId = this.id;
  var clicbutton = this;
  userClickPattern.push(ClickedButtonId);
  sound(ClickedButtonId);
  animate(clicbutton);
  CheckMatch(userClickPattern.length-1);


}

function nextSequence() { 
  userClickPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animate(document.getElementById(randomChosenColour));
  sound(randomChosenColour);
  levelNumber++;
  document.getElementById("level-title").innerHTML = ("level "+ levelNumber);
}

Allbuttons.forEach(function(button) {
  button.addEventListener("click", handleClick);
});




