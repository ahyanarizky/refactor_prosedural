const Dice = require('./models/dice')
$(document).ready(function() {
    $('#roller button.add').on('click', function() {
        Dice.add()
    })
    $('#roller button.roll').on('click', function() {
        Dice.roll()
    })
})
