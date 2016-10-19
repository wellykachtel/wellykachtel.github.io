$(document).ready(function(){

	$(".textBox").nextAll().hide();
	var fadeFlag = 1;
	var animateFlag = 1;
	var fadeIndex = 200;
 

	$(window).scroll(function(){

		$('.textBox').each(function(i){

			var topOfBox = $(this).offset().top;
			var bottomOfWindow = $(window).scrollTop() + $(window).height();

			if(bottomOfWindow >= (fadeIndex + (i*1000))){
				$(this).fadeIn("slow");
		
			}
			else if((bottomOfWindow - topOfBox) < 10 ){
				$(this).hide();
			}

		});
		//var topOfTextBox2 = $('#textOnPic2').offset().top;
		//var topOfTextBox1 = $('#textOnPic1').offset().top;
		//var bottomOfWindow = $(window).scrollTop() + $(window).height();
		
		
	
		var win = $(window).scrollTop();
		

		if( (win > 116) && (animateFlag == 1)){
			animateFlag = 0;
			$('#websiteTitle').addClass("scrolledTitle");
			$("#links").removeClass("dropdown");
			document.getElementById("pic2ID").innerHTML = "";
			document.getElementById("pic3ID").innerHTML = "";
			document.getElementById("topID").innerHTML = "Go to Top";
			document.getElementById("dropdownMenu").innerHTML = "";
		}

		else if(win < 116){
			
			animateFlag = 1;
			$('#websiteTitle').removeClass("scrolledTitle");
			$("#links").addClass("dropdown");
			document.getElementById("pic2ID").innerHTML = "Text Box 2";
			document.getElementById("pic3ID").innerHTML = "Text Box 3";
			document.getElementById("topID").innerHTML = "";
			document.getElementById("dropdownMenu").innerHTML = "Go To";
		}
		
	});
	
	
	
	

});