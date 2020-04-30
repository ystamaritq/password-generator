// creating the types for the password
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var specialcharacter = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// function to validate password length
function getPassLength() {
	var userPassLength = prompt(
		" Enter the password's length (Number betweem 8 and no more than 128 characters)"
	);

	userPassLength = parseInt(userPassLength);

	//validate password not be '', between 8 & 128 , and to be an integer
	if (
		userPassLength !== "" &&
		userPassLength >= 8 &&
		userPassLength <= 128 &&
		Number.isInteger(userPassLength) === true
	) {
		alert("your password will have " + userPassLength + " length");
		return userPassLength;
	} else {
		alert("plase enter a valid password length");
		return -1;
	}
}

function generatePassword() {
	var textvalue = document.getElementById("password-id");
	textvalue.value = getPassLength();

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
	}
}
