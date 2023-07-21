var randomNumber1 = Math.floor(1 + Math.random() * 6);
if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}


var randomNumber2 = Math.floor(1 + Math.random() * 6);

if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");

}



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆PLAYER 1 WON";
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "DRAW🤝";

}
else {
    document.querySelector("h1").textContent = "PLAYER 2 WON🏆";
}