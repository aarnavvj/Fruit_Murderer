basic.forever(function () {
    // This code helps food make their feelings clear about being eaten.
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
