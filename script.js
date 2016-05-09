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
            $("#tekst"+i).css("font-size", "18pt");
        }
        else if (length < 50 ) {
            $("#tekst"+i).css("font-size", "16pt");
        }
        else if (length < 80 ) {
            $("#tekst"+i).css("font-size", "13pt");
        }
        else if (length < 120 ) {
            $("#tekst"+i).css("font-size", "10pt");
        }
        else if (length < 160 ) {
            $("#tekst"+i).css("font-size", "10pt");
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
                        var $a = data[i].id;/*
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
*/
                    $(".content").append("<div class='postT'>" +      
                            "<div class='post' id = 'glasujBtn" + data[i].id+"F'>"+
                                "<div class='text'>"+
                                    "<p id='tekst" + data[i].id+"'>" +data[i].besedilo+"</p>"+
                                "</div>"+
                                "<div class='rating'>"+
                                    "<div class='glasovanje'>"+
                                        "<div class= 'glasuj'  id = 'glasujBtn" + data[i].id+"' onmouseover='voting1("+data[i].id+")'>"+
                                            "<i class='material-icons' style= 'font-size:30px' id='test2'>pan_tool</i>"+
                                     "</div>"+                                
                                    "</div>"+
                                    "<div class='score' id= 'score" + data[i].id+"'>"+
                                        "<p style = 'font-family: Arvo, serif; font-weight: bold; font-size: 17pt; font-style: normal;color:#4C9B99;'>"+data[i].rating+"<i style = 'font-style: normal; color:#333333;'>/7</i></p>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='avtor' id= 'avtor" + data[i].id+"'>"+
                                    "<p >" + data[i].avtor + ", " + data[i].datum +"</p>"+
                                "</div>"+      
                            "</div>"+
                            "<div class='postOceni' id = 'glasujOceM" + data[i].id+"' style='display:none;' >"+             
                                "<div class='text1' >"+
                                    "<p id='glasT" + data[i].id+"'>Lorem ipsum11 dolor sit amet, </p>"+
                                "</div>"+  
                            "</div>"+ 
                                "<i class= 'glasujOcena' id = 'cover" + data[i].id+"'  style= 'top: 49px;right: 49px;width:53px;height:53px;background-color:rgb(76,155,153);display:none;' ></i>"+
                                "<i class= 'glasujOcena' id = '5od7" + data[i].id+"'  style= 'background-color:rgb(76,155,153);display:none;' >5/7</i>"+
                                "<i class= 'glasujOcena' id = '4od7" + data[i].id+"'  style= 'background-color:rgb(67,121,119);display:none;' >4/7</i>"+
                                "<i class= 'glasujOcena' id = '3od7" + data[i].id+"'  style= 'background-color:rgb(59,86,85);display:none;' >3/7</i>"+
                                "<i class= 'glasujOcena' id = '2od7" + data[i].id+"'  style= 'background-color:rgb(51,51,51);display:none;' >2/7</i> "+   
                            "</div>"+            
                        "</div> "+
                        "<div class='space'></div>"); 

                        $("#tekst"+data[i].id).css("font-size",fontSize);

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
//////
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
//////
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

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

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
function voting1(id){
if(isMobile){

$('#glasujBtn'+id).bind( "mousedown touchstart", function(e){

    //$('#glasujBtn1F').fadeOut(300, function(){
     //       $('#glasujOceM1').fadeIn();});

    //$('#glasujBtn1F').hide();
    $('#glasujOceM'+id).show();  
    $('#glasujBtn'+id+'F').css("-webkit-filter","blur(5px)"); 
    $('#glasujBtn'+id+'F').css("-webkit-transition","-webkit-filter 1.10s");
    $("#glasT"+id).text("Dobra!:)"); 
    $("#glasT"+id).css("font-size","20pt");  

    colorR = Math.round(0.85*76);
    colorG = Math.round(0.85*155);
    colorB = Math.round(0.85*153);
    $('#glasujBtn'+id+'F').css("background-color", "rgb("+colorR+","+colorG+","+colorB+")");

    $(document).disableSelection();
    current_button = this.id;
});
//var rt = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
$(document).on('mouseup touchend', function(e){
    if(current_button!=null){
            enableScroll();
            $('#glasujOceM'+id).fadeOut(300, function(){
            $('#glasujBtn'+id+'F').fadeIn();});

            $("#glasujBtn"+id).animate({fontSize: "25pt"}, 500);
            $("#glasujBtn"+id).animate({fontSize: "17pt"}, 500);
            $('#glasujBtn'+id+'F').css("-webkit-filter","none");
            $('#glasujBtn'+id+'F').css("-webkit-transition","-webkit-filter 0.50s");


        //$('#glasujOceM1').hide();
        //$('#glasujBtn1F').show(); 
        //$("#"+current_button+"1").css("background-color", "red");
          console.log(pointerEventToXY(e).x); 
          console.log($("#"+current_button+"F").offset().left);
          console.log(($("#"+current_button+"F").offset().left + $("#"+current_button+"F").outerWidth()));
        if(rejt<0.25){
          $("#glasujBtn"+id).text("2/7");

        }  
        else if(rejt<0.5){
          $("#glasujBtn"+id).text("3/7");
 
        }
        else if(rejt<0.75){
          $("#glasujBtn"+id).text("4/7");
   
        } 
        else if(rejt<1.1){
          $("#glasujBtn"+id).text("5/7");  
        }               
          current_button=null;
          $("#glasujBtn"+id).css("background-color", "#494949");
          $("#glasujBtn"+id).css("color", "white");
          $("#glasujBtn"+id).prop("disabled",true);
          $('#glasujBtn'+id+'F').css("background-color", "white");              
          $('#glasujBtn'+id+'F').prop('disabled', true);
          $('#glasujBtn'+id).disabled = true;
          document.getElementById("glasujBtn"+id).disabled = true;
    }
});
var mousePos;
var colorR;
var colorG;
var colorB;
$(document).on('mousemove touchmove', function(e){
    if(current_button!=null){   
        disableScroll();
        if((pointerEventToXY(e).x-$("#"+current_button+"F").offset().left)<0){
            mousePos=0;
        }
        else if((pointerEventToXY(e).x-$("#"+current_button+"F").offset().left)>( $("#"+current_button+"F").outerWidth())){
            mousePos=$("#"+current_button+"F").offset().left + $("#"+current_button+"F").outerWidth();
        }  
        else{
            mousePos=pointerEventToXY(e).x;
        }    
        //console.log($("#"+current_button+"2").offset().left); 
        rejt = ((mousePos-$("#"+current_button+"F").offset().left)/( $("#"+current_button+"F").outerWidth()));
        if (rejt<0) rejt=0;
        rejt = Math.round(rejt * 100) / 100;
        if(rejt<0.25){
          $("#glasT"+id).text("Izjemno slaba!!");   
          $("#glasT"+id).css("font-size","21pt");     

        }  
        else if(rejt<0.5){
          $("#glasT"+id).text("Precej slaba;)");   
           $("#glasT"+id).css("font-size","22pt");   

        }
        else if(rejt<0.75){
          $("#glasT"+id).text("Slaba!"); 
          $("#glasT"+id).css("font-size","21pt");     
        } 
        else if(rejt<1.1){
          $("#glasT"+id).text("Dobra!:)"); 
          $("#glasT"+id).css("font-size","20pt");     
        } 
        //76, 155, 153  

        console.log(rejt);
        colorR = Math.round(51+rejt*25);
        colorG = Math.round(51+rejt*104);
        colorB = Math.round(51+rejt*102);
        $('#glasujBtn'+id+'F').css("background-color", "rgb("+colorR+","+colorG+","+colorB+")");              
    }
});
}
if(!isMobile){

        $("#glasujBtn"+id+"F").css("-webkit-filter","blur(2px)"); 
        $('#glasujBtn'+id+'F').css("-webkit-transition","-webkit-filter 1.10s");
        //$('#glasujOceM1').show();  
        $("#5od7"+id).fadeIn(200);
        $("#5od7"+id).animate({right: "+=240px"}, 200);
        $("#4od7"+id).fadeIn(300);
        $("#4od7"+id).animate({right: "+=180px"}, 300);
        $("#3od7"+id).fadeIn(400);
        $("#3od7"+id).animate({right: "+=120px"}, 400);
        $("#2od7"+id).fadeIn(500);
        $("#2od7"+id).animate({right: "+=60px"}, 500);
        $("#cover"+id).fadeIn(100);
        $('#cover'+id).css("-webkit-filter","blur(2px)"); 

        //'li:not(.not_me)'$('#wrapper').not("#box_5").hide();
        //$('#glasujBtn1F:not(#1fora)').css("-webkit-filter","blur(5px)"); 
        //$('#glasujBtn:not(#glasujOcena)').css("-webkit-filter","blur(5px)"); 
        //$('#glasujBtn1F').css("-webkit-transition","-webkit-filter 1.10s");
       
        //$("#glasujBtn1F").css("-webkit-filter","blur(5px)"); 
         /*
        $("#2od7").css("z-index","15"); 
        $("#2od7").css("-webkit-filter","none"); 
        $("i").css("-webkit-filter","none"); 
        $("#glasujOcena").css("-webkit-filter","none"); 






        */
        //$("#tekst1").css("-webkit-filter","blur(5px)");


    $('#5od7'+id).click(function() {
        animate(id);
        $("#glasujBtn"+id).text("5/7");
    });
    $('#4od7'+id).click(function() {
        animate(id);
        $("#glasujBtn"+id).text("4/7");
    });
    $('#3od7'+id).click(function() {
        animate(id);
        $("#glasujBtn"+id).text("3/7");
    });
    $('#2od7'+id).click(function() {
        animate(id);
        $("#glasujBtn"+id).text("2/7");
    });            
}
}
function animate(id){
        $("#5od7"+id).fadeOut(200);
        $("#5od7"+id).animate({right: "-=240px"}, 200);
        $("#4od7"+id).fadeOut(300);
        $("#4od7"+id).animate({right: "-=180px"}, 300);
        $("#3od7"+id).fadeOut(400);
        $("#3od7"+id).animate({right: "-=120px"}, 400);
        $("#2od7"+id).fadeOut(500);
        $("#2od7"+id).animate({right: "-=60px"}, 500);
        $("#cover"+id).fadeOut(100);
        $('#glasujBtn1'+id).css("background-color", "#262626");
        $('#glasujBtn1'+id).css("color", "white");
        $("#glasujBtn1"+id).animate({fontSize: "25pt"}, 500);
        $("#glasujBtn"+id).animate({fontSize: "17pt"}, 500);
        $('#glasujBtn'+id+'F').css("-webkit-filter","none");
        $('#glasujBtn'+id+'F').css("-webkit-transition","-webkit-filter 0.50s");
}

/*
var lastMove = null;

$(document).on('touchmove', function() {
  lastMove = e.originalEvent.touches[0].pageX;
});
*/
