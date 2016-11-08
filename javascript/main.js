
const leapYearButton = document.getElementById("leapYearButton")
const showMeLeapYearsButton = document.getElementById("showMeLeapYears")
const sqPhraseButton = document.getElementById("sqPhraseButton")
const pigLatinButton = document.getElementById("pigLatinButton")

const leapYearDiv = document.getElementById("leapYear")
const sqPhraseDiv = document.getElementById("sqPhrase")
const pigLatinDiv = document.getElementById("pigLatin")

leapYearButton.addEventListener("click", () => {leapYearDiv.style.display = "block"})
showMeLeapYearsButton.addEventListener("click", () => {calculateLeapYears()})
sqPhraseButton.addEventListener("click", () => {sqPhraseDiv.style.display = "block"})
pigLatinButton.addEventListener("click", () => {pigLatinDiv.style.display = "block"})

function calculateLeapYears () {
	let leapYearInput = parseInt(document.getElementById("leapYearInput").value)
	let leapYearArray = []

	do {
		if (leapYearInput % 400 == 0 || (leapYearInput % 4 == 0 && !(leapYearInput % 100 == 0))) {
			leapYearArray.push(leapYearInput);
			leapYearInput += 1;
		} else {
			leapYearInput += 1
		}
	}
	while (leapYearArray.length <= 19);

	console.log("leap years: ", leapYearArray);
}
