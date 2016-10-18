$(document).ready(function(){

	$(".textBox").nextAll().hide();
	var fadeFlag = 1;
	var animateFlag = 1;
	var fadeIndex = 200;
 

	$(window).scroll(function(){

		$('.textBox').each(function(i){

			var topOfBox = $(this).offset().top;
			var bottomOfWindow = $(window).scrollTop() + $(window).height();
			//console.log(i + " top of Box= " + topOfBox);
			console.log(i + " bottom of window: " + bottomOfWindow);

			if(bottomOfWindow >= (fadeIndex + (i*1000))){
				$(this).fadeIn("slow");
				console.log(i + " is now on");
		
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
			//$('#websiteTitle').removeClass("websiteTitle");
			document.getElementById("pic2ID").innerHTML = " ";
			document.getElementById("pic3ID").innerHTML = " ";
			document.getElementById("topID").innerHTML = "Go to Top";
		}

		else if(win < 116){
			
			animateFlag = 1;
			$('#websiteTitle').removeClass("scrolledTitle");
			//$('#websiteTitle').addClass("websiteTitle");
			document.getElementById("pic2ID").innerHTML = "Go to Text Box 2";
			document.getElementById("pic3ID").innerHTML = "Go to Text Box 3";
			document.getElementById("topID").innerHTML = " ";
		}
		
	});

	
	

});