let choices = {
  needNum: undefined,
  needLetter: undefined,
  needUpper: undefined,
  needSpecial: undefined,
  digitQuantity: undefined,
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  createEvent();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function createEvent() {
  let num = prompt("Do you need numerical digits?", "y / n");
  if (num != null && (num == "y" || num == "n")) {
    choices.needNum = num;
    createSecondEvent();
  } else {
    alert("invalid input, enter y / n");
    createEvent();
  }
}

function createSecondEvent() {
  let letter = prompt("Do you need letter digits?", " y / n");
  if (letter != null && (letter == "y" || letter == "n")) {
    choices.needLetter = letter;
    createThirdEvent();
  } else {
    alert("invalid input, enter y / n");
    createSecondEvent();
  }
}

function createThirdEvent() {
  let upper = prompt("Do you need upper case letters?", " y / n");
  if (upper != null && (upper == "y" || upper == "n")) {
    choices.needUpper = upper;
    createFourthEvent();
  } else {
    alert("invalid input, enter y / n");
    createThirdEvent();
  }
}

function createFourthEvent() {
  let special = prompt("Do you need special characters?", " y / n");
  if (special != null && (special == "y" || special == "n")) {
    choices.needSpecial = special;
    createFinalEvent();
  } else {
    alert("invalid input, enter y / n");
    createFourthEvent();
  }
}

function createFinalEvent() {
  let digit = prompt("How long do would you like your password to be?", "8-20");
  if (digit != null && digit >= 8 && digit <= 20) {
    choices.digitQuantity = digit;
    handleData();
  } else {
    alert("Invalid input, please choose a number between 8 - 20");
    createFinalEvent();
  }
}

function handleData() {
  choices.digitQuantity = Math.pow(10, choices.digitQuantity);
  generatePassword();
}

function generatePassword() {
  const letters = ["abcdefghijklmnopqrstuvwxyz"];
  const randomInt = Math.floor(Math.random() * choices.digitQuantity);
  if (
    choices.needNum == "y" &&
    choices.needLetter == "n" &&
    choices.needUpper == "n" &&
    choices.needSpecial == "n"
  ) {
    return randomInt;
  }

}
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
