/**
 * Created by Klavdij on 11. 04. 2016.
 */
$(document).ready(function () {
    var invalid = /^[0-9a-zA-Z]+$/;
    $('#post').keyup(function () {
        var max = 250;
        var len = $(this).val().length;
        var content = $(this).val();
        if (len >= max) {
            $('#charNum').text('Dosegli ste mejo.');
        } else {
            var char = max - len;
            $('#charNum').text(char + ' preostalih znakov');
        }
        if (content.match(invalid)) {
            $('#objavi').prop("disabled",false);
        } else {
            $('#charNum').text('Neprimerni znaki. Za objavo lahko uporabljate zgolj črke in številke.');
            $('#objavi').prop("disabled",true);
        }

    });
});