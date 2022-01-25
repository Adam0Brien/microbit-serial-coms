radio.onReceivedNumber(function (receivedNumber) {
    serial.writeLine("Hello World!")
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("Local Hello World!")
})
basic.showIcon(IconNames.Square)
