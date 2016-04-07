/**
 * Created by Klavdij on 7. 04. 2016.
 */
function resizeFont(index) {

    var stringLength = index;
    var string = "";

    if (stringLength < 30 ) {
        //$("#test"+index).css("font-size", "18pt");
        string = "18pt";

    }
    else if (stringLength < 50 ) {
        //$("#test"+index).css("font-size", "15pt");
        string = "15pt";
    }
    else if (stringLength < 80 ) {
        //$("#test"+index).css("font-size", "13pt");
        string = "13pt";
    }
    else if (stringLength < 120 ) {
        //$("#test"+index).css("font-size", "10pt");
        string = "10pt";
    }
    else if (stringLength < 160 ) {
        //$("#test"+index).css("font-size", "10pt");
        string = "10pt";
    }

    for (var i= 12;i <= 32;i += 10){

        var length = $("#test"+i).text().length;

        if (length < 30 ) {
            $("#test"+i).css("font-size", "18pt");
        }
        else if (length < 50 ) {
            $("#test"+i).css("font-size", "15pt");
        }
        else if (length < 80 ) {
            $("#test"+i).css("font-size", "13pt");
        }
        else if (length < 120 ) {
            $("#test"+i).css("font-size", "10pt");
        }
        else if (length < 160 ) {
            $("#test"+i).css("font-size", "10pt");
        }
    }

    return string;
}


$(document).ready(function() {

        var numItems = $(".post").length;
        resizeFont(numItems);
        var win = $(window);

        // Each time the user scrolls
        win.scroll(function() {
            // End of the document reached?

            if ($(document).height() - win.height() == win.scrollTop()) {

                $.getJSON("getdata.php",function (data) {

                    for (var i = 0; i < data.length; i++){
                        console.log(data[i].besedilo.length);
                        var fontSize = resizeFont(data[i].besedilo.length);
                        console.log(fontSize);

                    $(".content").append("<div class='post'>" +
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
                        $("#test"+data[i].id).css("font-size",fontSize);
                    }

                });
            }
        });

});
