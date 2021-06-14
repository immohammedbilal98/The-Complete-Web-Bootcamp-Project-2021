function playGame() {
  //Player 1

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);

  //Player 2

  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png-images/dice6.png

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h3").innerHTML = "🎊 Player 1 is Winner 🎉";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h3").innerHTML = "🎊 Player 2 is Winner 🎉";
  } else {
    document.querySelector("h3").innerHTML = "👉 Draw 👈";
    document.querySelector("h3").innerHTML = "👉 Draw 👈";
  }
}
