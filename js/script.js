const resultInfo = document.querySelector('.result-info')
const gameButton = document.querySelector('.game-button')
const gameState = document.querySelector('.game-state')
const letterButtons = document.querySelectorAll('.keyboard__button')
const gallow = document.querySelectorAll('#bad-answers-state')
const category = document.querySelector('.word-to-guess__category')
const wordToGuess = document.querySelector('.word-to-guess__word')
const underlines = document.querySelector('.underlines')
let tries = []
let randomWord
let randomCategory
let badAnswer = -1
const words = {
	country: ['Poland', 'Spain', 'Estonia', 'Germany', 'United Kingdom'],
	animal: ['bird', 'cat', 'dog', 'fish'],
	actor: ['Brad Pitt', 'Robert De Niro', 'Bruce Willis', 'Jason Statham'],
	game: ['the witcher', 'cyberpunk', 'grand theft auto', 'sleeping dogs', 'god of war'],
}
const getRandomWord = () => {
	randomCategory = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
	randomWord = words[randomCategory][Math.floor(Math.random() * words[randomCategory].length)].toUpperCase()
	category.textContent = `Category : ${randomCategory.toUpperCase()}`
	hideLetter()
}
const hideLetter = () => {
	for (let i = 0; i < randomWord.length; i++) {
		if (randomWord[i] === ' ') {
			tries.push(' ')
		} else {
			tries.push('-')
		}
	}
	wordToGuess.textContent = tries.join('')
}
const checkWin = () => {
	if (wordToGuess.textContent == randomWord) {
		category.textContent = 'Congratulation You win!'
	}
}
const checkLose = () => {
	if (badAnswer === 9) {
		category.textContent = 'You lose, the password is :'
		wordToGuess.textContent = randomWord
		letterButtons.forEach(button => {
			button.setAttribute('disabled', true)
			button.classList.add('disabled-button')
		})
	}
}
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
		checkWin()
		checkLose()
	})
})
