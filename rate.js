$(document).ready(function() {
	$("#minus").click(function(){
          var el = $("#1fora");
		  var num = parseInt(el.text());
		  el.text(num-1);
    });
	$("#plus").click(function(){
        console.log("dela");
          var el = $("#1fora");
		  var num = parseInt(el.text());
		  el.text(num+1);
    });   
}); 	    