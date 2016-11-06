const controller = require('../controller/controller')

class Dice {
    static add() {
        console.log('addDice');
        controller.addDice
    }
    static roll() {
        console.log('rollDice');
        controller.rollDice
    }
}

module.exports = Dice
