$(function(){
	var timer;
	var num = 0;
	
	//文字动画效果
	$('.screen1-box-01').children('.screen1-box-inner').removeClass('no');//文字动画效果
	$('.screen2-box-01').children('.screen2-box-inner').removeClass('no');//文字动画效果
	
	//点击右侧导航事件
	$('.side li').click(function(event){
		num = $(this).index();
		$('section').stop().animate({'top': -100*num + '%'},500);
//		$('.screen1-box-01').eq(num).children('.screen1-box-inner').removeClass('no').parent().siblings().children('.screen1-box-inner').addClass('no');
		$(this).addClass('active').siblings(this).removeClass('active');
	})
	
	//滚动事件
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer = setTimeout(function(){
			num = num-d;
			if(num<0){
				num = 0 ;
			}
			if(num>3){
				num = 3;
			}
			$('section').stop().animate({'top': -100*num + '%'},500);
			$('.screen1-box-01').eq(num).children('.screen1-box-inner').removeClass('no').parent().siblings().children('.screen1-box-inner').addClass('no');
			$('.screen1-box-02').eq(num).children('.screen2-box-inner').removeClass('no').parent().siblings().children('.screen2-box-inner').addClass('no');
			$('.side li').eq(num).addClass('active').siblings('.side li').removeClass('active');
		})
	})
	
	//点击下方按钮事件
	$('.drop-down').click(function(event){
		num = $(this).index();
		$('section').stop().animate({'top': -100*num + '%'},500);
	})
})
