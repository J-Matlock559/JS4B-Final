const answerDisplay = document.querySelector("#ans");
const questionDisplay = document.querySelector("#questionDisplay");
const questionInput = document.querySelector("#questionInput");
const submitButton = document.querySelector("#submitButton");
const ball = document.querySelector("#ball");

const possibleAnswers = [
  "url('./img/A1.png') no-repeat",
  "url('./img/A2.png') no-repeat",
  "url('./img/A3.png') no-repeat",
  "url('./img/A4.png') no-repeat",
  "url('./img/A5.png') no-repeat",
  "url('./img/A6.png') no-repeat",
  "url('./img/A7.png') no-repeat",
  "url('./img/A8.png') no-repeat",
  "url('./img/A9.png') no-repeat",
  "url('./img/A10.png') no-repeat",
  "url('./img/A11.png') no-repeat",
  "url('./img/A12.png') no-repeat",
  "url('./img/A13.png') no-repeat",
  "url('./img/A14.png') no-repeat",
  "url('./img/A15.png') no-repeat",
  "url('./img/A16.png') no-repeat",
  "url('./img/A17.png') no-repeat",
  "url('./img/A18.png') no-repeat",
  "url('./img/A19.png') no-repeat",
  "url('./img/A20.png') no-repeat",
];


submitButton.addEventListener("click", () => {
  let finalAnswer = Math.floor(Math.random() * possibleAnswers.length);

  answerDisplay.style.opacity = "0";
  answerDisplay.style.background = possibleAnswers[finalAnswer];
  answerDisplay.style.backgroundSize = "contain";
  questionDisplay.innerText = questionInput.value;
  questionInput.value = "";

  //Re-centers the upside-down triangles
  answerDisplay.style.marginTop = "190px";
  if (finalAnswer > 9) {
    answerDisplay.style.marginTop = "210px";
  }
  
  //Triggers shake animation and delay for fade in animation
  answerDisplay.classList.remove("answerFadeIn");
  ball.classList.remove("shake");
  setTimeout(shake, 1);

  //Re-adds CSS class to trigger fade-in animation
  setTimeout(shakeDelay, 1500);

  //Temporarily disables the ask button to restrict repeated inputs
  submitButton.disabled = true;
  setTimeout(btnDisable, 4500);
});


function btnDisable() {
  submitButton.disabled = false;
}

function fadeFunc() {
  answerDisplay.classList.add("answerFadeIn");
}

function shakeDelay() {
  setTimeout(fadeFunc, 1);
}

function shake() {
  ball.classList.add("shake");
}















/*const div = document.getElementById("answerDisplay");

div.style.backgroundImage = 'url(https://www.thetoyinsider.com/wp-content/uploads/2015/04/Magic8ball.jpg)';

div.style.height = '515px';
div.style.width = '400px';
div.style.backgroundSize = 'cover';*/
