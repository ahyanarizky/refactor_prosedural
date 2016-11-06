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
