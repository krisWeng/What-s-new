$(function(){
	//01.布局
	//	ul absolute	top0 left0
	//02.setInterval	改变 ul 定位的 left
	//03.定时器
	var iNow = 0;
	var timer;
	inter();
	
	for(var i=0; i< $('.Button-circle').length; i++){
 		bind(i)
 	}
   	function bind(index){
	 	$('.Button-circle').click( function(){
	 		clearInterval(timer);
	 		iNow = $('.Button-circle').index(this);
	 		console.log('点击'+iNow)
			changePic();
			inter();
	 	})
	}
	
	function changePic(){
		for(var j=0; j<$('.imgList-viewport-li').length; j++){
 			$('.imgList-viewport-li').eq(j).css('opacity','0');
 			if(j==iNow){
 				$('.imgList-viewport-li').eq(iNow).css('opacity','1');
 				console.log(iNow)
 				$('.Button-circle').eq(iNow).addClass('active').siblings().removeClass('active');
 			}
 		}
	}
	
	function inter(){}
	
	//向前
   	$('.imgList-Buttom-left').click( function(){
   		clearInterval(timer);
   		iNow--;
   		if(iNow < 0){
   			iNow = $('.Button-circle').length-1;
   		}
   		console.log('前'+iNow);
   		changePic();
   		inter();
   	})
   	
   	//向后
   	$('.imgList-Buttom-right').click( function(){
   		clearInterval(timer);
   		iNow++;
   		if(iNow > $('.Button-circle').length-1){
   			iNow = 0;
   		}
   		console.log('后'+iNow);
   		changePic();
   		inter();
   	})
})