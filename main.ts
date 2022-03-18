input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
    basic.pause(5000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
    basic.pause(5000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(500)
})
DFRobotMaqueenPlus.I2CInit()
