$(function(){
	var oNav = document.getElementById('TopNav');
	var backTop = document.getElementById('backTop-a-id');			
	document.onscroll = function(){
		var Btop = document.body.scrollTop || document.documentElement.scrollTop;
		// 如果滚动距离大于导航条据顶部的距离
		if( Btop > 140 ) {
		    // 为导航条设置fix
		    $('.nav-fixed').style.display = "block";
		    $('.nav-fixed').style.position = "fixed";
		}else {
			$('.nav-fixed').style.position = "static";
			$('.nav-fixed').style.display = "none";
		} 
	}	
})
