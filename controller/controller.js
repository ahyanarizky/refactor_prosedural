module.exports = {
    addDice: function() {
        $('.dice').append('<div class="dadu">0</div>')
    },
    rollDice: function() {
        $('.dadu').each(function(k, dadu) {
            var value = Math.floor((Math.random() * 6) + 1)
            $(dadu).text(value)
        })
    }
}
