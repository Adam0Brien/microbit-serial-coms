input.onButtonPressed(Button.A, function () {
    serial.writeLine("do11<enter>")
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("do10<enter>")
})
basic.showIcon(IconNames.Yes)
