function checkGuess (guess: boolean) {
    nextNumber = Math.randomRange(1, 9)
    if (guess == nextNumber >= currentNumber) {
        score += 1
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    turn += 1
    currentNumber = nextNumber
    basic.pause(500)
}
function howLong () {
    rounds = 3
    basic.showString("?")
    while (!(input.logoIsPressed())) {
        if (input.buttonIsPressed(Button.A)) {
            rounds += -2
            basic.showNumber(rounds)
        } else if (input.buttonIsPressed(Button.B)) {
            rounds += 2
            basic.showNumber(rounds)
        }
    }
    if (rounds < 0) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Chessboard)
        howLong()
    } else {
        turn = 1
        score = 0
        playGame()
    }
}
function playGame () {
    currentNumber = Math.randomRange(1, 9)
    while (turn <= rounds) {
        basic.showNumber(currentNumber)
        if (input.buttonIsPressed(Button.A)) {
            checkGuess(false)
        } else if (input.buttonIsPressed(Button.B)) {
            checkGuess(true)
        }
    }
    basic.clearScreen()
    if (score > rounds / 2) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
        basic.showString("Winner")
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.InBackground)
        basic.showString("Loser")
    }
    basic.pause(500)
    howLong()
}
let rounds = 0
let turn = 0
let score = 0
let currentNumber = 0
let nextNumber = 0
basic.clearScreen()
howLong()
