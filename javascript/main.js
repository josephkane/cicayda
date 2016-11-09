/****************
LEAP YEARS
****************/

const leapYearButton = document.getElementById("leapYearButton")
const showMeLeapYearsButton = document.getElementById("showMeLeapYears")
const leapYearDiv = document.getElementById("leapYear")
const nextTwentyLeapYears = document.getElementById("nextTwentyLeapYears")
leapYearButton.addEventListener("click", () => {leapYearDiv.style.display = "block"})
showMeLeapYearsButton.addEventListener("click", () => {calculateLeapYears()})

function calculateLeapYears () {
	let leapYearInput = parseInt(document.getElementById("leapYearInput").value);
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
	while (leapYearArray.length <= 19);

	for (let i = 0; i < leapYearArray.length; i++) {
		nextTwentyLeapYears.innerHTML += `<div>${leapYearArray[i]}</div>`
	};
}


/****************
SQUARE PHRASE
****************/

const sqPhraseDiv = document.getElementById("sqPhrase");
const sqPhraseButton = document.getElementById("sqPhraseButton");
const printSqPhraseButton = document.getElementById("printSqPhraseButton");
sqPhraseButton.addEventListener("click", () => {sqPhraseDiv.style.display = "block"});
printSqPhraseButton.addEventListener("click", () => {printSqPhrase()});

function printSqPhrase () {
	let phrase = document.getElementById("sqPhraseInput").value;
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
}

/****************
PIG LATIN
****************/
const pigLatinDiv = document.getElementById("pigLatin");
const pigLatinContainer = document.getElementById("pigLatinContainer");
const pigLatinButton = document.getElementById("pigLatinButton");
const translateButton = document.getElementById("translateButton");
pigLatinButton.addEventListener("click", () => {pigLatinDiv.style.display = "block"});
translateButton.addEventListener("click", () => {translate()});

function translate () {
	let language = document.querySelector('input[name="language"]:checked').value;
	let phrase = document.getElementById("pigLatinInput").value;

	if (phrase != "") {
		pigLatinContainer.innerHTML = "";
		let phraseArray = phrase.split(" ")

		if (language == "english" && checkForPigLatin(phraseArray)) {
			translateToEnglish(phraseArray)
		} else if (language == "pigLatin") {
			translateToPigLatin(phraseArray)
		} else {
			alert("Phrase is not pig latin, please correct and try again.")
		}
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
	for (word in phraseArray) {
		if (phraseArray[word].slice(-2) != "ay") {
			status = false
		}
	}
	return status
}

function capitalizeFirstLetter (translatedArray) {
	let stringedPhrase = translatedArray.join(" ");
	return stringedPhrase.charAt(0).toUpperCase() + stringedPhrase.slice(1)
}
