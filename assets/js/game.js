// JavaScript Document
$(document).ready(function() {
  var targetNumber;
  var crystalValues = [];
  var crystalButtons = ['assets/images/crystals-blue.png', 'assets/images/crystals-diamond.png', 'assets/images/crystals-purple.png', 'assets/images/crystals-yellow.png'];
  var counter = 0;
  var wins = 0;
  var losses = 0;
  
  getNumber();
  getValues();
  buildButtons(); 
  startGame();
  $("#userScore").text(counter);
  $("#userWins").text(wins);
  $("#userLosses").text(losses);
	
	
  function getNumber (){
	//generate a random number between 19-120	  
	targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;   
   	$("#randomNumber").text(targetNumber);
  }
  
  function getValues (){
	//build crystalValues array
	for (var i = 0; i < 4; i++) {
		//generate a random number between 1-12	
		var randomValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		//add to array
		crystalValues.push(randomValue);
		console.log(crystalValues);
	}
  }
  
  function buildButtons(){
	  for (var i = 0; i < crystalValues.length; i++) {
		   var imageCrystal = $("<img>");
		   imageCrystal.addClass("crystal-image img-fluid");
		   imageCrystal.attr("src", crystalButtons[i]);
		   imageCrystal.attr("data-crystalvalue", crystalValues[i]);
		   $("#crystals").append(imageCrystal);
	  }  
  }
  
function resetGame(){ 
	$("#crystals").empty();
	//$("#winorlose").empty();
	crystalValues = [];
	counter = 0;
	$("#userScore").text(counter);
	getNumber();
	getValues();
	buildButtons();
	startGame();	
}

  
function startGame(){
  
  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    //alert("New score: " + counter);
	// dispay score for user
	$("#userScore").text(counter);

    if (counter === targetNumber) {
		wins++;
		$("#userWins").text(wins);
		$("#winorlose").text("You win!");
		resetGame();
     // alert("You win!");
    }

    else if (counter >= targetNumber) {
     // alert("You lose!!");
	 losses++;
	 $("#userLosses").text(losses);
	 $("#winorlose").text("You lose!");
	 resetGame();
    }

  });
  
}

});