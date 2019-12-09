// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}
//Vars for characters used to make up generated password
var numbers="0123456789";
var lowerLetters="abcdefghijklmnopqrstuvwxyz";
var upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar="!@#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var newPassword=[];
// Create Prompt for user to choose 8-128 characters for their password
var passwordLength=prompt("How many characters would you like in your password? Please choose a number from 8-128");

if (passwordLength >= 8 && passwordLength <= 128) {
  alert("Thank you");
}
else {
  alert("Tsk Tsk! Try again!")
}
console.log(passwordLength);
// Create Prompt for user to choose if they would like special characters
// Create Prompt for user to choose if they would like lowercase letters
// Create Prompt for user to choose if they would like uppercase letters
// Validate at least one of prompts is true

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER