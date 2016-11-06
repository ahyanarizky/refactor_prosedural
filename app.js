(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function addDice() {
    $('.dice').append('<div class="dadu">0</div>')
}

function rollDice() {
    $('.dadu').each(function(k, dadu) {
        var value = Math.floor((Math.random() * 6) + 1)
        $(dadu).text(value)
    })
}

module.exports = {
    addDice: addDice,
    rollDice: rollDice
}

},{}],2:[function(require,module,exports){
const Dice = require('./models/dice')
$(document).ready(function() {
    $('#roller button.add').on('click', function() {
        Dice.add()
    })
    $('#roller button.roll').on('click', function() {
        Dice.roll()
    })
})

},{"./models/dice":3}],3:[function(require,module,exports){
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

},{"../controller/controller":1}]},{},[2]);
