const answerDisplay = document.querySelector("#ans");
const questionDisplay = document.querySelector("#questionDisplay");
const questionInput = document.querySelector("#questionInput");
const submitButton = document.querySelector("#submitButton");
const animationToggle = document.querySelector("#animationToggle");
const ball = document.querySelector("#ball");
const armDiv = document.querySelector("#arm");

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

const arms = [
  "url('./img/Arm.png') no-repeat",
  "url('./img/Arm2.png') no-repeat",
  "url('./img/Arm3.png') no-repeat",
  "url('./img/Arm4.png') no-repeat",
  "url('./img/Arm5.png') no-repeat"
];

animationToggle.addEventListener("click", () => {
  if (animationToggle.innerText == 'Enable Animations'){
    animationToggle.innerText = 'Disable Animations'
  } else {
    animationToggle.innerText = 'Enable Animations'
  }
});

submitButton.addEventListener("click", () => {
  let finalAnswer = Math.floor(Math.random() * possibleAnswers.length);
  let randArm = Math.floor(Math.random() * arms.length);

  armDiv.style.background = arms[randArm];
  armDiv.style.backgroundSize = "contain";
  answerDisplay.style.opacity = "0";
  answerDisplay.style.background = possibleAnswers[finalAnswer];
  answerDisplay.style.backgroundSize = "contain";
  questionDisplay.innerText = questionInput.value;
  questionInput.value = "";

  if (questionDisplay.innerText == ''){
    questionDisplay.innerText = 'Ask the Magic 8-Ball a Question!';
  }

  //Re-centers the upside-down triangles
  answerDisplay.style.marginTop = "31%";
  if (finalAnswer > 9) {
    answerDisplay.style.marginTop = "36%";
  }

  animationsEnabled();
});

function animationsEnabled() {
  if (animationToggle.innerText == 'Enable Animations'){
    answerDisplay.style.opacity = "1";
  }
  if (animationToggle.innerText == 'Disable Animations'){
  
    answerDisplay.classList.remove("answerFadeIn");
    ball.classList.remove("shake");
    arm.classList.remove("armIn");
    arm.classList.remove("armOut");
    questionDisplay.style.opacity = '0';
    questionDisplay.classList.remove("answerFadeIn");

    setTimeout(armIn, 10);
    setTimeout(shake, 1010);
    setTimeout(armOut, 2500);
    setTimeout(fadeIn, 2500);
    

    //Temporarily disables the ask button to restrict repeated inputs
    submitButton.disabled = true;
    setTimeout(btnDisable, 4500);
  }
}

function btnDisable() {
  submitButton.disabled = false;
}

function fadeIn() {
  answerDisplay.classList.add("answerFadeIn");
}

function shake() {
  arm.classList.remove("armIn");
  ball.classList.add("shake");
  arm.classList.add("armShake");
}

function armIn() {
  arm.classList.add("armIn");
  questionDisplay.classList.add("answerFadeIn");
}

function armOut() {
  arm.classList.remove("armShake");
  arm.classList.add("armOut");
}

