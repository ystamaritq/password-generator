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

// function get password criteria
function getPassCriteria() {
	// creating the types for the password
	var lowercase = "abcdefghijklmnopqrstuvwxyz";
	var uppercase = lowercase.toUpperCase();
	var numeric = "0123456789";
	var specialcharacter = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

	//creating count variables
	var countLowerCase = 0;
	var countUpperCase = 0;
	var countNumeric = 0;
	var countCharacter = 0;

	//to validate if the user select at least one criteria
	var resultCounts = 0;

	//var array to store the results and create the array from the given criteria
	var passArraySelections = [];

	//confirm window to include in the password : lowerCase
	var lowerCasePass = confirm("Do you want to include lowercase letters?");
	if (lowerCasePass) {
		passArraySelections.push(lowercase);
		countLowerCase++;
	}

	//confirm window to include in the password  : upperCase
	var upperCasePass = confirm("Do you want to include uppercase letters?");
	if (upperCasePass) {
		passArraySelections.push(uppercase);
		countUpperCase++;
	}
	// confirm window to include in the password: numeric
	var numericPass = confirm("Do you want to include numbers?");
	if (numericPass) {
		passArraySelections.push(numeric);
		countNumeric++;
	}
	//confirm window to include in the password: characters
	var charactersPass = confirm("Do you want to include characters?");
	if (charactersPass) {
		passArraySelections.push(specialcharacter);
		countCharacter++;
	}

	resultCounts =
		countLowerCase + countUpperCase + countNumeric + countCharacter;

	if (resultCounts > 0) {
		return passArraySelections;
	} else {
		alert("Select at least one criteria for your password");
	}
}

// main function generatePassword()
function generatePassword() {
	var showNumber = document.getElementById("password-id").value;

	if (getPassLength() > 0) {
		getPassCriteria();

		// //confirm window to include in the password : lowerCase
		// var lowerCasePass = confirm("Do you want to include lowercase letters?");
		// //confirm window to include in the password  : upperCase
		// var upperCasePass = confirm("Do you want to include uppercase letters?");
		// // confirm window to include in the password: numeric
		// var numericPass = confirm("Do you want to include numbers?");
		// //confirm window to include in the password: characters
		// var charactersPass = confirm("Do you want to include characters?");
	} else {
		return -1;
	}
}
