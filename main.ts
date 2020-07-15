function derecha (texto: string) {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 202)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
maqueen.IR_callbackUser(function (ir) {
    basic.showNumber(ir)
    if (ir == 64) {
        alante("")
    }
    if (ir == 68) {
        parar("")
    }
    if (ir == 65) {
        atras("")
    }
    if (ir == 7) {
        izquierda("")
    }
    if (ir == 6) {
        derecha("")
    }
    if (ir == 114) {
        rgb.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
function alante (texto: string) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
function parar (texto: string) {
    maqueen.motorStop(maqueen.Motors.All)
    rgb.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
function atras (texto: string) {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
function izquierda (texto: string) {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 206)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
let rgb: neopixel.Strip = null
rgb = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.lightLevel() <= 55) {
        rgb.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        rgb.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(1000)
        rgb.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(1000)
        rgb.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(1000)
        rgb.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(1000)
        rgb.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(1000)
        rgb.showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.pause(1000)
        rgb.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(1000)
    } else {
        rgb.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})