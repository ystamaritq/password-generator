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

	var userPassLengthUpdate = 0;
	userPassLengthUpdate = parseInt(userPassLength);

	//validate password not be '', between 8 & 128 , and to be an integer
	if (
		userPassLengthUpdate !== "" &&
		userPassLengthUpdate >= 8 &&
		userPassLengthUpdate <= 128 &&
		Number.isInteger(userPassLengthUpdate) === true &&
		userPassLengthUpdate % 1 === 0
	) {
		alert("your password will have " + userPassLengthUpdate + " length");
		return userPassLengthUpdate;
	} else {
		alert("plase enter a valid password length");
		return -1;
	}
}

function generatePassword() {
	var showNumber = document.getElementById("password-id").value;
	var resultLength = getPassLength();

	if (resultLength > 0) {
		//confirm window to include in the password : lowerCase
		var lowerCasePass = confirm("Do you want to include lowercase letters?");
		//confirm window to include in the password  : upperCase
		var upperCasePass = confirm("Do you want to include uppercase letters?");
		// confirm window to include in the password: numeric
		var numericPass = confirm("Do you want to include numbers?");
		//confirm window to include in the password: characters
		var charactersPass = confirm("Do you want to include characters?");
	} else {
		return -1;
	}
}
