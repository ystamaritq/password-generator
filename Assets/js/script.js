/* 
  Issue # 3:  
- Create a button event to generate a password.
- Add action prompt templates 
*/

/*
-THEN I select which criteria to include in the password
-When prompted for the length of the password
-THEN I choose a length of at least 8 characters and no more than 128 characters
-WHEN prompted for character types to include in the password
-THEN I choose lowercase, uppercase, numeric, and/or special characters */

// creating the types for the password
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var specialcharacter = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function getPassLength() {
	// var to save the length of the password
	var userPassLength = prompt(
		" Enter the password's length (Number betweem 8 and no more than 128 characters)"
	);
	return userPassLength;
}

function generatePassword() {
	var test = document.getElementById("password-id");
	test.value = getPassLength();

	//
	// //prompt window to include in the password : lowerCase
	// var lowerCasePass = prompt("Do you want to include lowercase letters?");
	// //prompt window to include in the password  : upperCase
	// var upperCasePass = prompt("Do you want to include uppercase letters?");
	// //prompt window to include in the password: numeric
	// var numericPass = prompt("prompt window to include in the password ");
}
