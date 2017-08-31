$(document).ready(function(){	
	//gotop
	$(".gotop").hide();
	$(window).scroll(function(){
		if ($(window).scrollTop()>100){
			$(".gotop").fadeIn(500);
		}else{
			$(".gotop").fadeOut(500);
		}
	});
	//当点击跳转链接后，回到页面顶部位置
	$(".gotop").click(function(){
		$('body,html').animate({scrollTop:0},800);
		return false;
	});
	//计算器
	$("#safe").hover(function(){
        $(".jsWrap").fadeIn();
    },function(){
        $(".jsWrap").fadeOut();
    });
    //弹出微信
	$("#qucode").hover(function(){
        $(".webchat").fadeIn();
    },function(){
        $(".webchat").fadeOut();
    });
});