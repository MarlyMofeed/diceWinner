var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var image1="images/dice" + randomNumber1 + ".png"; //dice1

document.querySelectorAll("img")[0].setAttribute("src",image1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image2="images/dice" + randomNumber2 + ".png"; //dice2

document.querySelectorAll("img")[1].setAttribute("src",image2);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player 1 Wins! 🎉";
}
else if (randomNumber2>randomNumber1){

    document.querySelector("h1").textContent="Player 2 Wins! 🎉";
}
else
{
    document.querySelector("h1").textContent="Draw!";
}
//remember: when changing the attribute the first one is between strings the second one without strings
//Don't forget that when using querySelector you write between the brackets the name which is (img) not class name.
//Remember when have more that one img use querySelectorAll() and use [] to define which one because it returns an array.
