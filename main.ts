/**
 */
input.onSound(DetectedSound.Loud, function () {
    sound = 2
})
input.onSound(DetectedSound.Quiet, function () {
    sound = 1
})
let sound = 0
sound = 0
basic.forever(function () {
    if (sound == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (sound == 2) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.clearScreen()
    }
})
