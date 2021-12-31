radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showArrow(ArrowNames.North)
        radio.sendString("F")
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.South)
        radio.sendString("B")
    } else if (receivedNumber == 4) {
        basic.showArrow(ArrowNames.West)
        radio.sendString("V")
    } else if (receivedNumber == 6) {
        basic.showArrow(ArrowNames.East)
        radio.sendString("H")
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -25) {
        radio.sendNumber(0)
    } else if (input.rotation(Rotation.Pitch) > 25) {
        radio.sendNumber(2)
    } else if (input.rotation(Rotation.Roll) < -25) {
        radio.sendNumber(4)
    } else if (input.rotation(Rotation.Roll) > 25) {
        radio.sendNumber(0)
    }
})
