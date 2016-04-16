/**
 * Created by Klavdij on 11. 04. 2016.
 */
$(document).ready(function () {
    $('#post').keyup(function () {
        var max = 250;
        var len = $(this).val().length;
        if (len >= max) {
            $('#charNum').text('Dosegli ste mejo.');
        } else {
            var char = max - len;
            $('#charNum').text(char + ' preostalih znakov');
        }
    });
});