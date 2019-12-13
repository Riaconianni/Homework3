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
var numberArr=numbers.split("");
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var lowerCaseArr=lowerCase.split("");
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArr=upperCase.split("");
var special="!@#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var specialArr=special.split("");

var newPassword = [];
var characterBankArr = [];

// Create Prompt for user to choose 8-128 characters for their password
function generatePassword() {
var passwordLength=prompt("How many characters would you like in your password? Please choose a number from 8-128");

passWordLength = parseInt(passwordLength);
if (passwordLength >= 8 && passwordLength <= 128) {
  alert("Thank you");
}
console.log(passwordLength);

//Create confirm for user to choose if they would like numbers
var userNum=confirm("Would you like numbers in your password?");

if (userNum === true) {
  alert("Your password will contain numbers.");
  characterBankArr.push(numberArr);
}
else {
  alert("Your password will not contain numbers.");
}
console.log(userNum);
// Create Prompt for user to choose if they would like special characters

var userSpecialChar=confirm("Would you like special characters?");

if (userSpecialChar === true) {
  alert("Your password will contain special characters.");
  characterBankArr.push(specialArr);
}
else {
  alert("Your password will not contain special characters.");
}
console.log(userSpecialChar);

// Create confirm for user to choose if they would like lowercase letters

var userLowerCase=confirm("Would you like lowercase letters in your password?");

if (userLowerCase === true) {
  alert("Your password will contain lowercase letters.");
  characterBankArr.push(lowerCaseArr);
}
else {
  alert("Your password will not contain lowercase letters.");
}
console.log(userLowerCase);

// Create confirm for user to choose if they would like uppercase letters

var userUpperCase=confirm("Would you like uppercase letters in your password?");

if (userUpperCase === true) {
  alert("Your password will contain uppercase letters.");
  characterBankArr.push(upperCaseArr);
}
else {
  alert("Your password will not contain uppercase letters.");
};
console.log(userUpperCase);

// use a loop to iterate the amount of times for the character length
for (var i = 0; i < passwordLength; i++) {
  // pick what type of character at random
  var characterTypeArr = characterBankArr[Math.floor(Math.random() * characterBankArr.length)];
  // pick character from characterTypeArr
  var charPicked = characterTypeArr[Math.floor(Math.random() * characterTypeArr.length)];
  newPassword.push(charPicked);
}

return newPassword.join('');
};

function copyToClipboard() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
