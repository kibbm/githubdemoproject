let 중복방지 = 0
let 시작 = 0
input.onButtonPressed(Button.A, function () {
    if (중복방지 == 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.clearScreen()
        시작 = 0
        중복방지 = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (시작 == 0) {
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.clearScreen()
    }
    basic.pause(randint(0, 2) * 1000)
    led.plot(randint(0, 4), randint(0, 4))
    시작 = 1
    중복방지 = 0
})
input.onButtonPressed(Button.B, function () {
    if (중복방지 == 0) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        시작 = 0
        중복방지 = 1
    }
})
basic.forever(function () {
	
})
