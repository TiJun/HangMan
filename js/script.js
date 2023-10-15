const resultInfo = document.querySelector('.result-info')
const gameButton = document.querySelector('.start-game-button')
const playAgainButton = document.querySelector('.play-again')
const gameState = document.querySelector('.game-state')
const letterButtons = document.querySelectorAll('.keyboard__button')
const gallow = document.querySelectorAll('#bad-answers-state')
const category = document.querySelector('.word-to-guess__category')
const wordToGuess = document.querySelector('.word-to-guess__word')
const underlines = document.querySelector('.underlines')
const heading = document.querySelector('.heading')
let tries = []
let randomWord
let randomCategory
let badAnswer
const words = {
	country: ['Poland', 'Spain', 'Estonia', 'Germany', 'United Kingdom'],
	animal: ['bird', 'cat', 'dog', 'fish'],
	actor: ['Brad Pitt', 'Robert De Niro', 'Bruce Willis', 'Jason Statham'],
	game: ['the witcher', 'cyberpunk', 'grand theft auto', 'sleeping dogs', 'god of war'],
}
const getRandomWord = () => {
	badAnswer = -1
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
		playAgainButton.classList.remove('in-active')
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
		playAgainButton.classList.remove('in-active')
	}
}
const checkLetter = e => {
	const clickedLetter = e.target.textContent
	if (randomWord.includes(clickedLetter)) {
		[...randomWord].forEach((letter, index) => {
			if (letter === clickedLetter) {
				tries.splice(index, 1, clickedLetter)
			}
		})
		wordToGuess.textContent = tries.join('')
	} else {
		badAnswer++
		gallow[badAnswer].classList.remove('in-active')
		badAnswer++
		gallow[badAnswer].classList.remove('in-active')
	}
}
const activeGame = () => {
	gameState.classList.remove('in-active')
	gameButton.classList.add('in-active')
	getRandomWord()
}
const restartGame = () => {
	wordToGuess.textContent = ''
	tries = []
	letterButtons.forEach(button => {
		button.classList.remove('disabled-button')
		button.removeAttribute('disabled')
	})
	gallow.forEach(el => {
		el.classList.add('in-active')
	})
	playAgainButton.classList.add('in-active')
	getRandomWord()
}
gameButton.addEventListener('click', () => {
	activeGame()
	heading.classList.add('in-active')
	gameState.style.height = '100vh'
})
letterButtons.forEach(button => {
	button.addEventListener('click', e => {
		checkLetter(e)
		button.classList.add('disabled-button')
		button.setAttribute('disabled', 'true')
		checkWin()
		checkLose()
	})
})
playAgainButton.addEventListener('click', restartGame)
