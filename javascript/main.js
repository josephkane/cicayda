// Array.from converts nodeLists and HTMLCollections (which are array-like objects) to arrays
const selectorButtons = Array.from(document.getElementsByClassName("selectorButton"))
const problemDivs = Array.from(document.getElementsByClassName("problemDiv"))
// for (let i = 0; i < selectorButtons.length; i++) {
// 	selectorButtons[i].addEventListener("click", (e) => {showSelectedDiv(e.target)})
// }
selectorButtons.forEach((button) => button.addEventListener("click", (e) => {showSelectedDiv(e.target)}))


function showSelectedDiv (target) {
	// for (let i = 0; i < problemDivs.length; i++) {
	// 	problemDivs[i].style.display = "none"
	// }
	// document.querySelector(`div[id="${target.value}"]`).style.display = "block";
	problemDivs.forEach((div) => div.style.display = "none")
	document.getElementById(`${target.value}`).style.display = "block"
}

/****************
LEAP YEARS
****************/
const leapYearButton = document.getElementById("leapYearButton");
const showMeLeapYearsButton = document.getElementById("showMeLeapYears");
const nextTwentyLeapYears = document.getElementById("nextTwentyLeapYears");
showMeLeapYearsButton.addEventListener("click", calculateLeapYears);

function calculateLeapYears () {
	let leapYearInput = (document.getElementById("leapYearInput").value);
	if (parseInt(leapYearInput)) {
		leapYearInput = parseInt(leapYearInput);
		let leapYearArray = [];
		nextTwentyLeapYears.innerHTML = "";

		do {
			if (leapYearInput % 400 == 0 || (leapYearInput % 4 == 0 && !(leapYearInput % 100 == 0))) {
				leapYearArray.push(leapYearInput);
				leapYearInput += 1;
			} else {
				leapYearInput += 1
			}
		}
		// while (leapYearArray.length <= 19);
		while (leapYearArray.length < 20);

		// for (let i = 0; i < leapYearArray.length; i++) {
		// 	nextTwentyLeapYears.innerHTML += `<div>${leapYearArray[i]}</div>`
		// };
		leapYearArray.forEach((year) => nextTwentyLeapYears.innerHTML += `<div>${year}</div>`)
	} else {
		alert("Invalid input")
	}
}


/****************
SQUARE PHRASE
****************/
const sqPhraseButton = document.getElementById("sqPhraseButton");
const printSqPhraseButton = document.getElementById("printSqPhraseButton");
printSqPhraseButton.addEventListener("click", printSqPhrase);

function printSqPhrase () {
	let phrase = document.getElementById("sqPhraseInput").value;
	if (phrase != "") {
		let phraseArray = phrase.split(" ");
		let width = phraseArray.reduce((x, y) => {return x.length > y.length ? x : y}).length;

		console.log(("*").repeat(width + 4));
		for (let i = 0; i < phraseArray.length; i++) {
			if (phraseArray[i].length < width) {
				let spaces = width - phraseArray[i].length
				console.log("* " + phraseArray[i] + (" ").repeat(spaces) + " *");
			} else {
				console.log(`* ${phraseArray[i]} *`);
			}
		}
		console.log(("*").repeat(width + 4));
	} else {
		alert("Invalid input")
	}
}

/****************
PIG LATIN
****************/
const pigLatinContainer = document.getElementById("pigLatinContainer");
const pigLatinButton = document.getElementById("pigLatinButton");
const translateButton = document.getElementById("translateButton");
translateButton.addEventListener("click", translate);

function translate () {
	let language = document.querySelector('input[name="language"]:checked').value;
	let phrase = document.getElementById("pigLatinInput").value;

	if (phrase != "") {
		pigLatinContainer.innerHTML = "";
		let phraseArray = phrase.split(" ")

		// if (language == "english" && checkForPigLatin(phraseArray)) {
		// 	translateToEnglish(phraseArray)
		// } else if (language == "pigLatin") {
		// 	translateToPigLatin(phraseArray)
		// } else {
		// 	alert("Phrase is not pig latin, please correct and try again.")
		// }
		if (language == "pigLatin") {
			translateToPigLatin(phraseArray)
		} else if (language == "english" && checkForPigLatin(phraseArray)) {
			translateToEnglish(phraseArray)
		} else {
			alert("Phrase is not pig latin, please correct and try again.")
		}
	} else {
		alert("Invalid input")
	}
}

function translateToPigLatin (phraseArray) {
	let pigLatinArray = [];

	for (let i = 0; i < phraseArray.length; i++) {
		let firstLetter = phraseArray[i][0]
		let rest = phraseArray[i].slice(1)
		pigLatinArray.push((rest + firstLetter + "ay").toLowerCase())
	};

	pigLatinContainer.innerHTML = capitalizeFirstLetter(pigLatinArray);
}

function translateToEnglish (phraseArray) {
	let englishArray = [];

	for (let i = 0; i < phraseArray.length; i++) {
		let noAy = phraseArray[i].slice(0, -2);
		let translatedWord = noAy.slice(-1) + noAy.slice(0, -1)
		englishArray.push(translatedWord.toLowerCase())
	}

	pigLatinContainer.innerHTML = capitalizeFirstLetter(englishArray);
}

function checkForPigLatin (phraseArray) {
	let status = true;
	// for (word in phraseArray) {
	// 	if (phraseArray[word].slice(-2) != "ay") {
	// 		status = false
	// 	}
	// }
	for (let i = 0; i < phraseArray.length; i++) {
		if (phraseArray[i].slice(-2) != "ay") {
			status = false
		}
	}
	return status
}

function capitalizeFirstLetter (translatedArray) {
	let stringedPhrase = translatedArray.join(" ");
	return stringedPhrase.charAt(0).toUpperCase() + stringedPhrase.slice(1)
}
