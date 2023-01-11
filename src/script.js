
let choices = {
  needNum: '',
  needLetter: '',
  needUpper: '',
  needSpecial: '',
  digitQuantity: undefined
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  numsEvent()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

function numsEvent() {
  let num = prompt("Do you need numerical digits?", "y / n");
  if (num != null && (num == "y" || num == "n")) {
    choices.needNum = num;
    letterEvent();
  } else {
    alert("invalid input, enter y / n");
    numsEvent();
  }
}

function letterEvent() {
  let letter = prompt("Do you need letter digits?", " y / n");
  if (letter != null && (letter == "y")) {
    choices.needLetter = letter;
    upperEvent();
  } else if (letter != null && (letter == "n")) {
    choices.needUpper = 'no'
    specialCharEvent()
  } else  {
    alert("invalid input, enter y / n");
    letterEvent();
  }
}

function upperEvent() {
  let upper = prompt("Do you need upper case letters?", " y / n");
  if (upper != null && (upper == "y" || upper == "n")) {
    choices.needUpper = upper;
    specialCharEvent();
  } else {
    alert("invalid input, enter y / n");
    upperEvent();
  }
}

function specialCharEvent() {
  let special = prompt("Do you need special characters?", " y / n");
  if (special != null && (special == "y" || special == "n")) {
    choices.needSpecial = special;
    digitLengthEvent();
  } else {
    alert("invalid input, enter y / n");
    specialCharEvent();
  }
}

function digitLengthEvent() {
  let digit = prompt("How long do would you like your password to be?", "8-128");
  if (digit != null && digit >= 8 && digit <= 128) {
    choices.digitQuantity = digit;
    generatePassword();
  } else {
    alert("Invalid input, please choose a number between 8 - 128");
    digitLengthEvent();
  }
}


  function generatePassword() {
    let password = '';
    let nums = '0123456789';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let upper = letters.toUpperCase();
    let symbols = '!#$%&*+,-./:;<=>?@\^_{|}~'

    

  
    if (choices.needNum === 'y') {
      for (let i = 0; i < choices.digitQuantity; i++) {
        password += nums[Math.floor(Math.random() * 10)];
      }
    } 
    if (choices.needLetter === 'y') {
      for (let i = 0; i < choices.digitQuantity; i++) {
       password += letters[Math.floor(Math.random() * letters.length)]
      }
    }
    if (choices.needUpper === 'y') {
      for( let i = 0 ; i < choices.digitQuantity; i++) {
        password += upper[Math.floor(Math.random() * letters.length)]
      }
    }
    if (choices.needSpecial === 'y') {
      for(let i = 0; i < choices.digitQuantity; i++ ) {
        password += symbols[Math.floor(Math.random() * symbols.length)]
    }
  } 

    return password;
  }
  



// ~	Tilde.
// `	Acute, backquote, backtick, grave, grave accent, left quote, open quote, or a push.
// !	Exclamation mark, exclamation point, or bang.
// @	Ampersat, arobase, asperand, at, or at symbol.
// #	Octothorpe, number, pound, sharp, or hash.
// $	Dollar sign or generic currency.
// %	Percent.
// ^	Caret or circumflex.
// &	Ampersand, epershand, or and symbol.
// *	Asterisk, mathematical multiplication symbol, and sometimes called a star.
// (	Open or left parenthesis.
// )	Close or right parenthesis.
// -	
// _	
// +	
// =	
// {	
// }	
// [	
// ]
// |
// \	
// /	
// :	
// ;	
// "	
// '	
// <
// >
// ,	
// .	
// ?

 