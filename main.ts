makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
    if (makerbit.irButton() == 128) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (makerbit.irButton() == 192) {
        basic.showString("Good Job")
        music.playMelody("G B A G C5 B A B ", 120)
    }
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    if (makerbit.irButton() == 120) {
        while (counter >= 40) {
            basic.pause(200)
            serial.writeLine("" + (counter))
            counter += -1
        }
    } else if (makerbit.irButton() == 96) {
        for (let index = 0; index < 4; index++) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(500)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(500)
        }
    } else if (makerbit.irButton() == 128) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 35)
    } else if (makerbit.irButton() == 64) {
    	
    } else {
    	
    }
})
/**
 * Write a program to make the maqueen to various tasks based on remote button press/release 
 * 
 * Note: Before you begin, check the value for any 4 buttons and note them down - use the serial write line block to print the "IR Button" value. 
 * 
 * 1. When 1st button is pressed: display numbers on the serial console from 75 to 40 with 200ms delay in between numbers (Hint: it is a down counter)
 * 
 * 2. When 2nd button is pressed: blink the left and right red LEDs alternatively for 4 times with 500ms pause - (Red LEDs connected to port P8 and P12 - not Neopixel)
 * 
 * 3. When 3rd button is pressed: make maqueen spin right till the button is released (Hint: use the "On IR button <any> <pressed/released>" block)
 * 
 * 4. When 4th button is RELEASED: make a beeping sound once and display "Good Job" on the microbit LEDs (the 25 leds on microbit) - Hint: this action should happen when button released
 * 
 * 120 up
 * 
 * 96 down
 * 
 * 128 left
 * 
 * 192 right
 * 
 * 64 center
 */
let counter = 0
serial.writeLine("Start")
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
counter = 75
basic.forever(function () {
	
})
