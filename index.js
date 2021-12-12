
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", "images/" + randomDiceImage1);
document.querySelector(".img2").setAttribute("src", "images/" + randomDiceImage2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 won!";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 won!";
}else{
  document.querySelector("h1").innerHTML = "It's a Draw.";
}
