$(function(){
	$('.name').blur(function(){
		if($(this).val().length == ''){
			$(".point-name").html("This is a required field.");
			$(".point-text").css('display','block');
		}else{
//			var reg = /^[0-9a-zA-Z]{4,10}$/ || /^\w+@\w+(.\w+)+$/ || /^1\d{10}/;
			var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
        	if(!reg.test($(this).val())) {
            	$(".point-name").html("姓名不正确");
			}else{
				$(".point-name").html(" ");
        	}
		}
	})
	$('.email').blur(function(){
		if( $(this).val().length == '' ){
			$(".point-email").html("This is a required field.");
			$(".point-text").css('display','block');
		}else{
//			var  pattern = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$/;
			var  pattern = /^([\w\.\-]+)@([\w\.\-]+)\.([\w]{2,4})$/;
			if(!pattern.test($(this).val())) {
            	$(".point-email").html("Please enter a valid email address!");
			}else{
				$(".point-email").html(" ");
        	}
		}
	})
	$('.message').blur(function(){
		if( $(this).val().length == '' ){
			$(".point-message").html("This is a required field.");
			$(".point-text").css('display','block');
		}else{
			var  mess = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
			if(!mess.test($(this).val())) {
            	$(".point-message").html("This is a required field.");
			}else{
				$(".point-message").html(" ");
       		}	
		}
	})
})