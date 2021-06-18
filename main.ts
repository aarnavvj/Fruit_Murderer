basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . . . . .
            . # # # .
            # . . . #
            `)
        soundExpression.sad.playUntilDone()
    } else {
        basic.clearScreen()
    }
})
