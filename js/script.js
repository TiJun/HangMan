const loseInfo = document.querySelector('.lose-info')
const gameButton = document.querySelector('.game-button')
const gameState = document.querySelector('.game-state')
const letterButtons = document.querySelectorAll('.keyboard__button')
const gallow = document.querySelectorAll('#bad-answers-state')
const category = document.querySelector('.word-to-guess__category')
const wordToGuessElement = document.querySelector('.word-to-guess__word')
const underlines = document.querySelector('.underlines')
const wordToGuessArr = []
const words = {
	countries: ['Poland', 'Spain', 'Estonia', 'Algeria'],
	animals: ['bird', 'cat', 'dog', 'fish'],
}
let wordToGuess
let randomCategory
const getRandomWord = () => {
	randomCategory = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
	wordToGuess = words[randomCategory][Math.floor(Math.random() * words[randomCategory].length)].toUpperCase()
	category.textContent = `Category : ${randomCategory.toUpperCase()}`
	console.log(wordToGuess)
	hideLetter()
	return wordToGuess
}
const hideLetter = () => {
	for (let i = 0; i < wordToGuess.length; i++) {
		wordToGuessArr.push('-')
	}
	wordToGuessElement.textContent = wordToGuessArr.join('')
}
let badAnswer = -1
const checkLetter = e => {
	const clickedLetter = e.target.textContent
	if (wordToGuess.includes(clickedLetter)) {
		wordToGuessArr.splice(wordToGuess.indexOf(clickedLetter), 1, clickedLetter)
		wordToGuessElement.textContent = wordToGuessArr.join('')
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
