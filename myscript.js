$(document).ready(function(){

	$('#textOnPic1, #textOnPic2').hide();
	$('#textOnPic1, #textOnPic2').scroll(function(){
		$('#textOnPic1').fadeIn();
		$('#textOnPic2').fadeIn();
	});

});