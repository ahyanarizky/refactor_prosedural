const createDice = require('../controller/controller_add')
const rollDice = require('../controller/controller_roll')

class Dice {
    static add() {
        createDice()
    }
    static roll() {
        rollDice()
    }
}

module.exports = Dice
