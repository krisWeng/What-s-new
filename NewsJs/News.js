$(function(){
	//1
	$('.box-one-a').mouseenter(function(){
		$('.box-one').addClass('box-one-bg')
		$('.overlay-box-one').addClass('overlay-Box')
		$('.overlay-box-two').removeClass('overlay-Box')
		$('.title-one').children('h1').addClass('title-color')
	})
	$('.box-one-a').mouseleave(function(){
		$('.box-one').removeClass('box-one-bg')
		$('.overlay-box-one').removeClass('overlay-Box')
		$('.title-one').children('h1').removeClass('title-color')
	})
	
	//2
	$('.box-two-a').mouseenter(function(){
		$('.box-two').addClass('box-two-bg')
		$('.overlay-box-two').addClass('overlay-Box')
		$('.title-two').children('h1').addClass('title-color')
	})
	$('.box-two-a').mouseleave(function(){
		$('.box-two').removeClass('box-two-bg')
		$('.overlay-box-two').removeClass('overlay-Box')
		$('.title-two').children('h1').removeClass('title-color')
	})
	
	//3
	$('.box-three-a').mouseenter(function(){
		$('.box-three').addClass('box-three-bg')
		$('.overlay-box-three').addClass('overlay-Box')
		$('.title-three').children('h1').addClass('title-color')
	})
	$('.box-three-a').mouseleave(function(){
		$('.box-three').removeClass('box-three-bg')
		$('.overlay-box-three').removeClass('overlay-Box')
		$('.title-three').children('h1').removeClass('title-color')
	})
	
	//4
	$('.box-four-a').mouseenter(function(){
		$('.box-four').addClass('box-four-bg')
		$('.overlay-box-four').addClass('overlay-Box')
		$('.title-four').children('h1').addClass('title-color')
	})
	$('.box-four-a').mouseleave(function(){
		$('.box-four').removeClass('box-four-bg')
		$('.overlay-box-four').removeClass('overlay-Box')
		$('.title-four').children('h1').removeClass('title-color')
	})
	
	//5
	$('.box-five-a').mouseenter(function(){
		$('.box-five').addClass('box-five-bg')
		$('.overlay-box-five').addClass('overlay-Box')
		$('.title-five').children('h1').addClass('title-color')
	})
	$('.box-five-a').mouseleave(function(){
		$('.box-five').removeClass('box-five-bg')
		$('.overlay-box-five').removeClass('overlay-Box')
		$('.title-five').children('h1').removeClass('title-color')
	})
})

