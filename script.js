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
// Create Prompt for user to choose 8-128 characters for their password
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