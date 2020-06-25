function rollDice(){
var randomNumber1 = Math.random();
randomNumber1= Math.floor(randomNumber1*5)+1;
var di1=("images/dice"+randomNumber1+".png");
var d1 = document.querySelector(".img1");
d1.setAttribute("src",di1);

var randomNumber2 = Math.random();
randomNumber2= Math.floor(randomNumber2*5)+1;
var di2=("images/dice"+randomNumber2+".png");
var d2 = document.querySelector(".img2");
d2.setAttribute("src",di2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
    
}
}