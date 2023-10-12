const loseInfo = document.querySelector('.lose-info')
const gameButton = document.querySelector('.game-button')
const gameState = document.querySelector('.game-state')
const letterButtons = document.querySelectorAll('.keyboard__button')
const gallow = document.querySelectorAll('#bad-answers-state')
const category = document.querySelector('.word-to-guess__category')
const wordToGuess = document.querySelector('.word-to-guess__word')
const underlines = document.querySelector('.underlines')
const tries = []
const words = {
	countries: ['Poland', 'Spain', 'Estonia', 'Algieria', 'United Kingdom'],
	animals: ['bird', 'cat', 'dog', 'fish'],
}
String.prototype.replaceAt = function (index, replacement) {
	return this.substring(0, index) + replacement + this.substring(index + replacement.length)
}
let randomWord
let randomCategory
const getRandomWord = () => {
	randomCategory = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
	randomWord = words[randomCategory][Math.floor(Math.random() * words[randomCategory].length)].toUpperCase().split('')
	category.textContent = `Category : ${randomCategory.toUpperCase()}`
	console.log(randomWord)
	hideLetter()
	return randomWord
}
const hideLetter = () => {
	for (let i = 0; i < randomWord.length; i++) {
		tries.push('-')
	}
	wordToGuess.textContent = tries.join('')
}
const checkWin = () => {
	if (wordToGuess.textContent === randomWord) {
		console.log('You win')
	}
}
let badAnswer = -1
const checkLetter = e => {
	const clickedLetter = e.target.textContent
	if (randomWord.includes(clickedLetter)) {
		;[...randomWord].forEach((letter, index) => {
			if (letter === clickedLetter) {
				tries.splice(index, 1, clickedLetter)
			}
		})
		wordToGuess.textContent = tries.join('')
	} else {
		badAnswer++
		gallow[badAnswer].classList.remove('in-active')
	}
}
const activeGame = () => {
	gameState.classList.remove('in-active')
	gameButton.classList.add('in-active')
	getRandomWord()
}
gameButton.addEventListener('click', activeGame)
letterButtons.forEach(button => {
	button.addEventListener('click', e => {
		checkLetter(e)
		button.classList.add('disabled-button')
		button.setAttribute('disabled', 'true')
	})
})
