(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function() {
    $('.dice').append('<div class="dadu">0</div>')
}

},{}],2:[function(require,module,exports){
module.exports = function() {
    $('.dadu').each(function(k, dadu) {
        var value = Math.floor((Math.random() * 6) + 1)
        $(dadu).text(value)
    })
}

},{}],3:[function(require,module,exports){
const Dice = require('./models/dice')
$(document).ready(function() {
    $('#roller button.add').on('click', function() {
        Dice.add()
    })
    $('#roller button.roll').on('click', function() {
        Dice.roll()
    })
})

},{"./models/dice":4}],4:[function(require,module,exports){
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

},{"../controller/controller_add":1,"../controller/controller_roll":2}]},{},[3]);
