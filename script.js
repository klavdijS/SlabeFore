/**
 * Created by Klavdij on 7. 04. 2016.
 */
$(document).ready(function() {

    $("#plus").click(function(){

        /*$.ajax({
            type:'POST',
            url:'getdata.php',
            dataType:'json',
            contentType:"application/json; charset=utf-8",
            success : function(data) {
                console.log(data);
            },
            error: console.log(JSON.parse(xhr.responseText));

        });*/

        $.getJSON("getdata.php",function (data) {
            console.log(data);
        });
    });


});
