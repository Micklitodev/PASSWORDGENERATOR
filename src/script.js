let choices = {
  needNum: undefined, 
  needLetter: undefined, 
  needUpper: undefined,
  needSpecial: undefined,
  digitQuantity: undefined
}

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
  if (num != null) {
     choices.needNum = num;
     createSecondEvent()
  } else {
    alert('invalid input, enter y / n');
    createEvent();
  }
};

function createSecondEvent() {
  let letter = prompt('Do you need letter digits?', " y / n");
  if (letter != null) {
    choices.needLetter = letter
    createFinalEvent()
  } else {
    alert('invalid input, enter y / n')
    createSecondEvent()
  }
}

function createFinalEvent() {
  let digit = prompt('How many digits do you need?', '8-128');
  if (digit != null && digit >= 8 && digit <= 128) {
    choices.digitQuantity = digit;
    generatePassword()
  } else {
    alert('Invalid input, please choose a number between 8 - 128');
    createFinalEvent()
  }
}


function generatePassword() {
  if(choices.needNum == 'y' && choices.needLetter == 'n') {
    const randomInt = Math.floor(Math.random() * 1000);
    return randomInt}
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);