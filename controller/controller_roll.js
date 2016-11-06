module.exports = function() {
    $('.dadu').each(function(k, dadu) {
        var value = Math.floor((Math.random() * 6) + 1)
        $(dadu).text(value)
    })
}
