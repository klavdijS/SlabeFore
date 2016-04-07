$(document).ready(function() {
	//var width = $(window).width()/100; 
	//$(".button").css("padding", "1px "+width+"px");
	//$(".button").css("font-size", 22+width+"px");

	for (var i= 1;i<=3;i++){
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

});
