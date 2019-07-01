$(window).scroll(function(event){
	if(parseInt($(window).scrollTop()/100)){
		$('.nav-fixed').css({'background':'#fff','padding':'10px 0'});
		$('.bgBlack').css('z-index','3');
		$('.TopNav-content-Right span').css('background-color','#222');
		$('.TopNav-content-Left li a').css('color','#222');
	}else{
		$('.nav-fixed').css('background','none');
		$('.bgBlack').css('z-index','1');
	}
})