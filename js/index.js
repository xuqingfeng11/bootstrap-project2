$(function(){
	$(".hd ul li:nth-child(5)").css({'margin-bottom': '0'});
	$(".comm_T ul li:nth-child(3)").css({'margin-right': '0',"float":"right"});
	$(".brand ul li:nth-child(4n)").css({'margin-right': '0',"float":"right"});
	$(".but input:nth-child(3n)").css({'border-right': 'none'});
	$(".but input:nth-child(10)").css({'border-bottom': 'none'});
	$(".but input:nth-child(11)").css({'border-bottom': 'none'});
	$(".but input:nth-child(12)").css({'border-bottom': 'none'});
	$(".foo_L>ul>li:nth-child(1)").css({'background': '#272727'});
	
	$(".seckillWrap ul li:nth-child(3)").css({'margin-right': '0',"float":"right"});
	$(".project ul li:nth-child(3)").css({'margin-right': '0',"float":"right"});
	$(".project ul li:nth-child(6)").css({'margin-right': '0',"float":"right"});
	
	
	$(".slideTxtBox_pro .bd ul li:nth-child(3)").css({'margin-right': '0',"float":"right"});
	
	$(".brand ul li:nth-child(4n)").css({'margin-right': '0',"float":"right","border-right":'none'});
	
	
	
	jQuery(".slideTxtBox_xj").slide();
	
	jQuery(".slideTxtBox_cat").slide();
	
	jQuery(".slideTxtBox_pro").slide();
});

$(function(){
	$(".design .bd ul li").hover(function(){
        $(this).children('.layer').animate({"bottom":"0"},500);
    },function(){
        $(this).children('.layer').animate({"bottom":"-166px"},500);
    });
});

$(function(){
	$(".bd_L").hover(function(){
        $('.layer').fadeIn(300);
    },function(){
        $('.layer').fadeOut(300);
    });
});
$(function(){
	$(".bdrb_Img").hover(function(){
        $(this).children('.layer1').fadeIn(300);
    },function(){
        $(this).children('.layer1').fadeOut(300);
    });
});
$(function(){
	$(".bdr_T").hover(function(){
        $('.layer2').fadeIn(300);
    },function(){
        $('.layer2').fadeOut(300);
    });
});


$(function(){
	$(".OFF_box").click(function(){
		$(".OFF_box").stop().animate({"left":"-100%"},500);
		$(".float_layerWrap").stop().animate({"left":"0"},500);
		return false;
	});
	$(".float_layerWrap .close").click(function(){
		$(".OFF_box").stop().animate({"left":"0"},500);
		$(".float_layerWrap").stop().animate({"left":"-100%"},200);
		return false;
	});
	
	$(".float_layerWrap").hide();
	$(window).scroll(function(){
		if ($(window).scrollTop()>300){
			$(".float_layerWrap").slideDown(500);
//			$(".OFF_box").stop().animate({"left":"-100%"},500);
		}else{
			$(".float_layerWrap").slideUp(500);
//			$(".OFF_box").stop().animate({"left":"0"},500);
		}
	});
});


$(function(){
	$(".js h3 b").click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});
});



//搜索框
function test1()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="请输入建筑面积")
	{
		document.getElementById('test').value="";
	}

}
function test2()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="")
	{
		document.getElementById('test').value="请输入建筑面积";
	}
}

function test3()
{
	var tempStr=document.getElementById('test1').value;
	if(tempStr=="您的电话")
	{
		document.getElementById('test1').value="";
	}

}
function test4()
{
	var tempStr=document.getElementById('test1').value;
	if(tempStr=="")
	{
		document.getElementById('test1').value="您的电话";
	}
}

function test5()
{
	var tempStr=document.getElementById('test2').value;
	if(tempStr=="您的称呼")
	{
		document.getElementById('test2').value="";
	}

}
function test6()
{
	var tempStr=document.getElementById('test2').value;
	if(tempStr=="")
	{
		document.getElementById('test2').value="您的称呼";
	}
}

function test7()
{
	var tempStr=document.getElementById('test3').value;
	if(tempStr=="建筑面积")
	{
		document.getElementById('test3').value="";
	}

}
function test8()
{
	var tempStr=document.getElementById('tes3').value;
	if(tempStr=="")
	{
		document.getElementById('test3').value="建筑面积";
	}
}
