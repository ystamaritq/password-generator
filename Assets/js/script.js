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

// function Length
function getPassLength() {
	var userPassLength = prompt(
		" Enter the password's length (Number betweem 8 and no more than 128 characters)"
	);

	userPassLengthInt = parseInt(userPassLength);

	if (
		userPassLengthInt !== "" &&
		userPassLengthInt >= 8 &&
		userPassLengthInt <= 128 &&
		Number.isInteger(userPassLengthInt) === true
	) {
		alert("your password will have " + userPassLengthInt + " length");
		return userPassLengthInt;
	} else {
		return -1;
	}
}

function generatePassword() {
	var textvalue = document.getElementById("password-id");
	textvalue.value = getPassLength();
	/*
	if (textvalue > 0) {
		//confirm window to include in the password : lowerCase
		var lowerCasePass = confirm("Do you want to include lowercase letters?");

		//confirm window to include in the password  : upperCase
		var upperCasePass = confirm("Do you want to include uppercase letters?");

		// confirm window to include in the password: numeric
		var numericPass = confirm("Do you want to include numbers?");

		//confirm window to include in the password: characters
		var charactersPass = confirm("Do you want to include characters?");
	} else {
		alert("test");
	} */
}
