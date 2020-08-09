function abrir () {
    servos.P1.setAngle(76)
    servos.P2.setAngle(0)
}
function cerrar () {
    servos.P1.setAngle(35)
    servos.P2.setAngle(38)
}
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
        rgbEstaEncendido = 1
        rgb.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (ir == 113) {
        rgbEstaEncendido = 1
        rgb.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (ir == 99) {
        rgbEstaEncendido = 1
        rgb.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (ir == 97) {
        rgbEstaEncendido = 1
        rgb.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (ir == 40) {
        rgbEstaEncendido = 0
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
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
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
let rgbEstaEncendido = 0
let rgb: neopixel.Strip = null
rgb = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (rgbEstaEncendido == 0) {
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
    }
})
