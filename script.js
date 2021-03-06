/**
 * Created by Klavdij on 7. 04. 2016.
 */
function resizeFont(index) {

    var stringLength = index;
    var string = "";

    if (stringLength < 30 ) {
        //$("#test"+index).css("font-size", "18pt");
        string = "17pt";

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

    else if (stringLength < 250 ) {
        //$("#test"+index).css("font-size", "10pt");
        string = "8pt";
    }

    for (var i= 12;i <= 32;i += 10){

        var length = $("#test"+i).text().length;

        if (length < 30 ) {
            $("#test"+i).css("font-size", "18pt");
        }
        else if (length < 50 ) {
            $("#test"+i).css("font-size", "16pt");
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
                        $cookie_name = 'tcVotingSystem'+data[i].id;
                        console.log(data[i].besedilo.length);

                        var fontSize = resizeFont(data[i].besedilo.length);
                        console.log(fontSize);
                        var $a = data[i].id;
                    $(".content").append("<div class='post'>" +
                        "<div class='text'>"+
                            "<p id='test" + data[i].id+"'>" +data[i].besedilo+"</p>"+
                        "</div>"+
                        "<div class='rating'>"+
                            "<div class='glasovanje'>"+
                            "<a class='button' id='minus" + data[i].id+"' name='minus' onclick='voting("+data[i].id+",-1)'>" +
                            "<i class='material-icons'>remove</i>"+
                            "</a>" +
                            "<div class='spaceBtn'></div>"+
                            "<a class='button' id='plus" + data[i].id+"' onclick='voting("+data[i].id+",1)'>"+
                            "<i class='material-icons'>add</i>"+
                            "</a>"+
                            "</div>"+
                            "<div class='score' id='score"+data[i].id+"'>"+
                            "<p>"+data[i].rating+"</p>"+
                            "</div>"+
                            "</div>"+
                            "<div class='avtor'>"+
                            "<p>" + data[i].avtor + ", " + data[i].datum +"</p>"+
                        "</div>"+
                        "</div>"+
                        "<div class='space'></div>");
                        $("#test"+data[i].id).css("font-size",fontSize);

                        var cookie=getCookie("tcVotingSystem"+data[i].id);
                        if (cookie!=""  && cookie != null) {
                                console.log(readCookie("tcVotingSystem"+data[i].id));
                            if (  readCookie("tcVotingSystem"+data[i].id)=="plus"){
                                $("#plus"+data[i].id).css("background-color", "#494949");
                            }
                            else{
                                $("#minus"+data[i].id).css("background-color", "#494949");
                            }
                        }
                    }

                });
            }
        });
});

$.support.selectstart = "onselectstart" in document.createElement("div");
$.fn.disableSelection = function() {
    return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
        ".ui-disableSelection", function( event ) {
        event.preventDefault();
    });
};


            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for(var i=0; i<ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1);
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            }
            function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                var expires = "expires="+d.toUTCString();
                document.cookie = cname + "=" + cvalue + "; " + expires;
            }

            function readCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for(var i=0;i < ca.length;i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                }
                return null;
            }

            function voting(id,value){

            var cookie=getCookie("tcVotingSystem"+id);
            if (cookie==""  || cookie == null) {
                if(value==1){
                    setCookie("tcVotingSystem"+id,"plus",1);          
                }
                if(value==-1){
                    setCookie("tcVotingSystem"+id,"minus",1);          
                }               
                var formData = {id:id, value:value};
                $.ajax(
                {
                    url : "vote.php",
                    type: "POST",
                    data : formData,
                }).done(function(data, textStatus, jqXHR) 
                {
                    var el = $("#score"+id);
                    var num = parseInt(el.text());
                    if(value==1){
                        el.text(num+1);
                        $("#plus"+id).css("background-color", "#494949");

                    }
                    else{
                        el.text(num-1);
                        $("#minus"+id).css("background-color", "#494949");

                    }
                }).fail(function(jqXHR, textStatus, errorThrown) 
                {
                });
            }
            }

/*
$( "#glasujBtn" )
  .vmouseup(function() {
        $( "#glasujPost" ).css("background-color", "blue");

  })
    .vmousedown(function(){
        $( "#glasujPost" ).css("background-color", "red");

    });
*/
    var pointerEventToXY = function(e){
      var out = {x:0, y:0};
      if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        out.x = touch.pageX;
        out.y = touch.pageY;
      } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        out.x = e.pageX;
        out.y = e.pageY;
      }
      return out;
    };

var current_button;
var rejt=0;
$('#glasujBtn').bind( "mousedown touchstart", function(e){
    $('#glasujBtn1').fadeOut(300, function(){
            $('#glasujBtn2').fadeIn();});
    //$('#glasujBtn1').hide();
    //$('#glasujBtn2').show();  
    $(document).disableSelection();
            current_button = this.id;
            $("#glasT").css("color","white"); 
});
//var rt = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
$(document).on('mouseup touchend', function(e){
    if(current_button!=null){
            $('#glasujBtn2').fadeOut(300, function(){
            $('#glasujBtn1').fadeIn();});
            $("#1fora").animate({fontSize: "25pt"}, 500);
            $("#1fora").animate({fontSize: "20pt"}, 500);
        //$('#glasujBtn2').hide();
        //$('#glasujBtn1').show(); 
        //$("#"+current_button+"1").css("background-color", "red");
          console.log(pointerEventToXY(e).x); 
          console.log($("#"+current_button+"1").offset().left);
          console.log(($("#"+current_button+"1").offset().left + $("#"+current_button+"1").outerWidth()));
        if(rejt<0.25){
          $("#1fora").text("9/11");

        }  
        else if(rejt<0.5){
          $("#1fora").text("3/7");
 
        }
        else if(rejt<0.75){
          $("#1fora").text("4/7");
   
        } 
        else if(rejt<1.1){
          $("#1fora").text("5/7");  
        }               
          current_button=null;
          $("#glasujBtn").css("background-color", "#494949");
          $("#glasujBtn").prop("disabled",true);
    }
});
var mousePos;
var colorR;
var colorG;
var colorB;
$(document).on('mousemove touchmove', function(e){
    if(current_button!=null){   
        if((pointerEventToXY(e).x-$("#"+current_button+"2").offset().left)<0){
            mousePos=0;
        }
        else if((pointerEventToXY(e).x-$("#"+current_button+"2").offset().left)>( $("#"+current_button+"2").outerWidth())){
            mousePos=$("#"+current_button+"2").offset().left + $("#"+current_button+"2").outerWidth();
        }  
        else{
            mousePos=pointerEventToXY(e).x;
        }    
        //console.log($("#"+current_button+"2").offset().left); 
        rejt = ((mousePos-$("#"+current_button+"2").offset().left)/( $("#"+current_button+"2").outerWidth()));
        if (rejt<0) rejt=0;
        rejt = Math.round(rejt * 100) / 100;
        if(rejt<0.25){
          $("#glasT").text("9/11");   
          $("#glasT").css("font-size","40pt");     

        }  
        else if(rejt<0.5){
          $("#glasT").text("Slaba za popizdit!!!");   
           $("#glasT").css("font-size","27pt");   

        }
        else if(rejt<0.75){
          $("#glasT").text("Slaba!"); 
          $("#glasT").css("font-size","25pt");     
        } 
        else if(rejt<1.1){
          $("#glasT").text("Dobra!:)"); 
          $("#glasT").css("font-size","20pt");     
        } 
        //76, 155, 153  
 
        console.log(rejt);
        colorR = Math.round(rejt*76);
        colorG = Math.round(rejt*155);
        colorB = Math.round(rejt*153);
        $('#glasujBtn2').css("background-color", "rgb("+colorR+","+colorG+","+colorB+")");              
    }
});

/*
var lastMove = null;

$(document).on('touchmove', function() {
  lastMove = e.originalEvent.touches[0].pageX;
});
*/
