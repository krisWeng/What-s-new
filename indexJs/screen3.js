$(function(){
	//01.布局
	//	ul absolute	top0 left0
	//02.setInterval	改变 ul 定位的 left
	//03.定时器
	var iNow = 0;
	var timer;
	inter();
	
	function changePic(){
		var nowLeft = -iNow*600;
		console.log( nowLeft );
		$('#section03').css('left',nowLeft);
//		$('#son').css('left',nowLeft);
	}
	
	function inter(){}
	//向前
 	$('#LeftBtn').click( function(){
 		clearInterval(timer);
 		iNow--;
 		if(iNow < 0){
 			iNow = 3;
 			$('#section03').css('transition','');
 		}
 		console.log('前'+iNow);
 		changePic();
 		inter();
 	})
 	
 	//向后
 	$('#RightBtn').click( function(){
 		clearInterval(timer);
 		iNow++;
 		if(iNow > 3){
 			iNow = 0;
 			$('#section03').css('transition','');
 		}
 		console.log('后'+iNow);
 		changePic();
 		inter();
 	})
})