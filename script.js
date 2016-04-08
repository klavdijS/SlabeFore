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
/*
function vote(id,value) { // function vote with 2 arguments: article ID and value (+1 or -1) depending if you clicked on the arrow up or down
    var dataFields = {'id': id, 'value': value}; // We pass the 2 arguments
    $.ajax({ // Ajax
        type: "POST",
        url: "tuto-voting-system.php",
        data: dataFields,
        timeout: 3000,
  
        success: function(dataBack){
            //$('#score' + id).html(dataBack); // div "number" with the new number
            //$('#arrow_up' + id).html('<div class="arrow_up_voted"></div>'); // We replace the clickable "arrow up" by the not clickable one
            //$('#arrow_down' + id).html('<div class="arrow_down_voted"></div>'); // We replace the clickable "arrow down" by the not clickable one
            //$('#message' + id).html('<div id="alertFadeOut' + id + '" style="color: green">Thank you for voting</div>'); // Diplay message with a fadeout
            //$('#alertFadeOut' + id).fadeOut(1000, function () {
            //    $('#alertFadeOut' + id).text('');
            //});
            },
        error: function() {
            $('#score' + id).text('Problem!');
        }
        
    });
}

*/
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
                        var $a = data[i].id;
                    $(".content").append("<div class='post'>" +
                        "<div class='text'>"+
                            "<p id='test" + data[i].id+"'>" +data[i].besedilo+"</p>"+
                        "</div>"+
                        "<div class='rating'>"+
                            "<div class='btn'>"+
                            "<a class='button' id='minus" + data[i].id+"' name='minus' onclick='voting("+data[i].id+",-1)'>" +
                            "<i class='material-icons'>remove</i>"+
                            "</a>" +
                            "<div class='spaceBtn'></div>"+
                            //onclick="vote(<?php echo $article['id']; ?>, '+1'); return false;"
                            "<a class='button' id='plus" + data[i].id+"' onclick='voting("+data[i].id+",1)'>"+
                            "<i class='material-icons'>add</i>"+
                            "</a>"+
                            "</div>"+
                            "<div class='score' id='score"+data[i].id+"'>"+
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

        //upvote-downvote

});

            function voting(id,value){

            var formData = {id:id, value:value};
            $.ajax(
            {
                url : "vote.php",
                type: "POST",
                data : formData,
            }).done(function(data, textStatus, jqXHR) 
            {
                //data: Data from Server

            }).fail(function(jqXHR, textStatus, errorThrown) 
            {
            });
            var el = $("#score"+id);
            var num = parseInt(el.text());
            if(value==1){
                el.text(num+1);
            }
            else{
                el.text(num-1);
            }
            }



