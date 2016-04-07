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

        var win = $(window);

        // Each time the user scrolls
        win.scroll(function() {
            // End of the document reached?

            if ($(document).height() - win.height() == win.scrollTop()) {

                console.log("Konec");
                $.getJSON("getdata.php",function (data) {

                    for (var i = 0; i < data.length; i++){
                    $(".content").append("<div class='post"+ data[i].id+"'>" +
                        "<div class='text'>"+
                            "<p id='test" + data[i].id+"'>" +data[i].besedilo+"</p>"+
                        "</div>"+
                        "<div class='rating'>"+
                            "<div class='btn'>"+
                            "<a class='button'>"+
                            "<i class='material-icons'>remove</i>"+
                            "</a>" +
                            "<div class='spaceBtn'></div>"+
                            "<a class='button'>"+
                            "<i class='material-icons'>add</i>"+
                            "</a>"+
                            "</div>"+
                            "<div class='score'>"+
                            "<p>"+data[i].rating+"</p>"+
                            "</div>"+
                            "</div>"+
                            "<div class='avtor'>"+
                            "<p> -" + data[i].avtor + ", " + data[i].datum +"</p>"+
                        "</div>"+
                        "</div>"+
                        "<div class='space'></div>");
                    }
                });
            }
        });

});
