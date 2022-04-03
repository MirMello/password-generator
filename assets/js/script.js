// Assignment code here
const lowercase = "abcdefghijklmnop"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numeric = "0123456789"
const symbol = "!@#$%&*()=+-_[]{}|:<>?,.'"

// Getting Password Preferences
var passwordLength = function() {
  var promptLength = window.prompt('How long do you want your password? Enter a number between 8 and 128');

  // Conditional Recursive Function Call
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    return passwordLength();
  }
}
passwordLength ()


var passwordLowercase = 
  window.confirm('Do you want to include lowercase characters?.');


var passwordUppercase = 
  window.confirm('Do you want to include uppercase characters?.');

var passwordNumberic =
  window.confirm('Do you want to include numbers?');

var passwordSymbol =
  window.confirm('Do you want to include special characters?');

var passwordInfo = {
  length: passwordLength (),
  lowercase: passwordLowercase,
  uppercase: passwordUppercase,
  numeric: passwordNumberic,
  symbol: passwordSymbol,
}
console.log(passwordInfo);

// var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

if (passwordLowercase || passwordUppercase || passwordNumberic || passwordSymbol) {
  //generate password with all selected

} else if (!passwordLowercase || !passwordUppercase || passwordNumberic || passwordSymbol) {
  alert("You need to select at least one option!");
  return false;

}
//   // var password = generatePassword() =
//   // var passwordText = document.querySelector("#password");

//   // passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);