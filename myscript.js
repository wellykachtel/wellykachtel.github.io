$(document).ready(function(){

	$("#textOnPic2").hide();
	var fadeFlag = 1;
	var animateFlag = 1;
	
	$(window).scroll(function(){
		var topOfTextBox2 = $('#textOnPic2').offset().top;
		var topOfTextBox1 = $('#textOnPic1').offset().top;
		var bottomOfWindow = $(window).scrollTop() + $(window).height();
		
		if((topOfTextBox2 >= 500) && fadeFlag == 1){
			$('#textOnPic2').fadeIn("slow");
			
			fadeFlag = 0;
		}
		else if((bottomOfWindow - topOfTextBox2) < 10 ){
			$('#textOnPic2').hide();
		
			fadeFlag = 1;
		}
	
		var win = $(window).scrollTop();
		

		if( (win > 116) && (animateFlag == 1)){
			animateFlag = 0;
			$('#websiteTitle').addClass("scrolledTitle");
			//$('#websiteTitle').removeClass("websiteTitle");
		}

		else if(win < 116){
			
			animateFlag = 1;
			$('#websiteTitle').removeClass("scrolledTitle");
			//$('#websiteTitle').addClass("websiteTitle");
		}
		
	});

	$('#pic2ID').click(funciton{
		var txt = "<a href='http://www.wellykachtel.com/index.html' id = 'topID'> Go To Top</a>";
		$("#myTitle").after(txt);
	});
	$('#pic2ID').remove();

});