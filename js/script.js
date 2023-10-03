const loseInfo = document.querySelector('.lose-info')
const gameButton = document.querySelector('.game-button')
const gameState = document.querySelector('.game-state')
const letterButtons = document.querySelectorAll('.keyboard__button')
const gallowsBottom = document.querySelector('.hangman__gallows--bottom')
const gallowsMiddle = document.querySelector('.hangman__gallows--middle')
const gallowsTop = document.querySelector('.hangman__gallows--top')
const gallowsRope = document.querySelector('.hangman__gallows--rope')
const head = document.querySelector('.hangman__head')
const body = document.querySelector('.hangman__body')
const leftArm = document.querySelector('.hangman__arm--left')
const rightArm = document.querySelector('.hangman__arm--right')
const leftLeg = document.querySelector('.hangman__leg--left')
const rightLeg = document.querySelector('.hangman__leg--right')
const category = document.querySelector('.word-to-guess__category')
const wordToGuess = document.querySelector('.word-to-guess__word')
// ['Poland', 'United Kingdom', 'Estonia'],
// ['bird', 'cat', 'dog', 'fish']
const words = {
    countries: ['Poland', 'United Kingdom', 'Estonia'],
    animals: ['bird', 'cat', 'dog', 'fish']
}
const getRandomWord = () => {
    const randomCategory = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
    const randomWord = words[randomCategory][Math.floor(Math.random() * words[randomCategory].length)]
    return randomWord
}
const activeGame = () => {
    gameState.classList.remove('in-active')
    gameButton.classList.add('in-active')
    getRandomWord()
}
gameButton.addEventListener('click', activeGame)
console.log(getRandomWord());