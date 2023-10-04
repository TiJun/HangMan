const loseInfo = document.querySelector('.lose-info')
const gameButton = document.querySelector('.game-button')
const gameState = document.querySelector('.game-state')
const letterButtons = document.querySelectorAll('.keyboard__button')
// const gallowsBottom = document.querySelector('.hangman__gallows--bottom')
// const gallowsMiddle = document.querySelector('.hangman__gallows--middle')
// const gallowsTop = document.querySelector('.hangman__gallows--top')
// const gallowsRope = document.querySelector('.hangman__gallows--rope')
// const head = document.querySelector('.hangman__head')
// const body = document.querySelector('.hangman__body')
// const leftArm = document.querySelector('.hangman__arm--left')
// const rightArm = document.querySelector('.hangman__arm--right')
// const leftLeg = document.querySelector('.hangman__leg--left')
// const rightLeg = document.querySelector('.hangman__leg--right')
const gallow = document.querySelectorAll('#bad-answers-state')
const category = document.querySelector('.word-to-guess__category')
const wordToGuessElement = document.querySelector('.word-to-guess__word')
const words = {
	countries: ['Poland', 'Spain', 'Estonia'],
	animals: ['bird', 'cat', 'dog', 'fish'],
}
let wordToGuess
let randomCategory
const getRandomWord = () => {
	randomCategory = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
	wordToGuess = words[randomCategory][Math.floor(Math.random() * words[randomCategory].length)].split()[0].toUpperCase()
	category.append(randomCategory.toUpperCase())
	console.log(wordToGuess)
	return wordToGuess
}
// const hideWordToGuess = () => {
// 	const hiddenLetter = []
// 	let underline = '_'
// 	for (let letters of wordToGuess) {
// 		// hiddenLetter.push(underline)
// 		wordToGuessElement.append(hiddenLetter)
// 	}
// }
let badAnswer = -1
const checkCompatibility = e => {
	const clickedLetter = e.target.textContent
	if (wordToGuess.includes(clickedLetter)) {
		wordToGuessElement.append(clickedLetter)
	} else {
		badAnswer++
		gallow[badAnswer].classList.remove('in-active')
		console.log(badAnswer)
	}
}
const activeGame = () => {
	gameState.classList.remove('in-active')
	gameButton.classList.add('in-active')
	getRandomWord()
	// hideWordToGuess()
}
gameButton.addEventListener('click', activeGame)
letterButtons.forEach(button => {
	button.addEventListener('click', e => {
		checkCompatibility(e)
		button.classList.add('disabled-button')
		button.setAttribute('disabled', 'true')
	})
})
