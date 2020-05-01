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
		return -1;
	}
}

//function to randomPassCriteria from the selected user criteria
function randomPassCriteria() {
	//getting length from getPassLength() function user length
	var length = getPassLength();
	//var with the charSets of criteria selected by the user
	var charSets = getPassCriteria();
	//var newPassword
	var newPassword = "";

	//control flow with a breakpoint at user selected length
	for (var i = 0; i <= length; i++) {
		//creating charSet to get the indexes inside the charSets Array selected by the user
		var charSetIndex = i % charSets.length;
		//getting the set inside the array
		var charSet = charSets[charSetIndex];
		// creating random index
		var randomIndex = Math.floor(Math.random() * charSets.length);
		//creating new password
		newPassword += charSet.charAt(randomIndex);
	}
	return newPassword;
}

// main function generatePassword()
// function generatePassword() {
// 	//show the password in the textarea
// 	var showNumber = document.getElementById("password-id");
// 	if (getPassLength() > 0) {
// 		return (showNumber.value = randomPassCriteria());
// 	} else {
// 		return -1;
// 	}
// }

function generatePassword() {
	//show the password in the textarea
	var showNumber = document.getElementById("password-id");
	return (showNumber.value = randomPassCriteria());
}
