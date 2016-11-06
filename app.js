$(document).ready(function() {
    $('#roller button.add').on('click', function() {
        Dice.add()
    })
    $('#roller button.roll').on('click', function() {
        Dice.roll()
    })
})

class Dice {
    static add() {
        $('.dice').append('<div class="dadu">0</div>')
    }
    static roll() {
        $('.dadu').each(function(k, dadu) {
            var value = Math.floor((Math.random() * 6) + 1)
            $(dadu).text(value)
        })
    }
}
