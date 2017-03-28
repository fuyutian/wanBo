;$(function($){
	
	var $two_menu = $('.content_left .two_menu').find('li');	
	var $time = $('#time');
	
	
//	/*********head头部时间************/
	setInterval(function(){						
		var oDate = new Date();
		var year = oDate.getFullYear();
		var month = oDate.getMonth()+1;
		var today = oDate.getDate();
		var hour = oDate.getHours();
        var min = oDate.getMinutes();
        var secon = oDate.getSeconds();
        
        if(hour <10){
        	hour = '0'+hour;
        }
        if(min <10){
        	min = '0'+min;
        }
        if(secon <10){
        	secon = '0'+ secon;
        }
      $time.html('北京时间'+ "  "+year+' - '+month+' - '+today+ "&nbsp;&nbsp;&nbsp;&nbsp;"+ hour+" : "+min+" : "+secon);  
			
		},1000) 
	
	
	
	
//	公共底部鼠标滑过动画
	$('.foot .quality ul li').mouseover(function(){
		$(this).children('.quality_p2').animate({bottom:'0px'},100);
	}).mouseleave(function(){
		$(this).children('.quality_p2').animate({bottom:'-83px'},100);
	});
//	账户安全及代理管理二级菜单显示隐藏
	$('.content_left .left1 li').eq(2).children('a').mouseover(function(){
		$('.left1 .two_menu').show();
	}).mouseleave(function(){
		$('.left1 .two_menu').hide();
	});
	$('.left1 .two_menu').mouseover(function(){
		$(this).show();
	}).mouseleave(function(){
		$(this).hide();
	});
	
	$('.content_left .left1 li').eq(5).children('a').mouseover(function(){
		$('.left1 .manage_two').show();
	}).mouseleave(function(){
		$('.left1 .manage_two').hide();
	});
	$('.left1 .manage_two').mouseover(function(){
		$(this).show();
	}).mouseleave(function(){
		$(this).hide();
	});
	//登录时的正则表达验证
	//设置一些常量
	var $user = $('#user');
	var $pass=$('#pass');
	var $log=$('#log');
	$log.click(function(){
		var user=$user.val();
		var pass=$pass.val();
		var pattern1=/^[a-zA-z][a-zA-Z0-9_]{2,9}$/;
		var pattern2=/^[a-zA-Z\d_]{6,}$/;
		if (user === '') {
			alert('请输入用户名');
		} else{
			if (pass === '') {
				alert('请输入密码');
			}else{
				if (!(pattern1.test(user))) {
					alert('用户名输入错误');
				}else{
					if (!(pattern2.test(pass))) {
						alert('密码输入错误');
					}else{
						alert('登录成功');
						window.location.href='../html/membersHome.html';
					}
				}
			}
		}
	});
	
	/****************回到顶部******************/
    var $backTop = $('.backTop');
    var $foot = $('.foot');
       
    $backTop.hide();
    
    $(window).on('scroll',function(){
    	var $scrollTop = $(window).scrollTop();
    if($scrollTop > 400){
    	$backTop.fadeIn();
    }else{
    	$backTop.fadeOut();
    }    	
    })
 
  $backTop.on('click',function(){
    	$($('html,body')).animate({
    		'scrollTop':0
    	})
    })
	//登录弹出框

	var $outside_box = $('#outside_box');
	var $head_login = $('#head_login');
	var $head_sign = $('#head_sign');
	var $delete = $('#delete');
	var $login_account = $('#outside_box .login_account');
	var $login_phone = $('#outside_box .login_phone');
	var $classify_span = $('#outside_box .login_classify').find('span');
	var $coverLayer = $('.coverLayer');
	
	//点击登录按钮弹出  outside_box
	$head_login.on('click',function(){
		$outside_box.fadeIn();
		
		//遮盖层弹出
	    $coverLayer.show();
		//遮盖层弹出
	    $coverLayer.show();
	     $('body').css({ 
             "overflow-x":"hidden",
             "overflow-y":"hidden"       
         });

	})
	
	//点击关闭  outside_box
	
	$delete.on('click',function(){
		$outside_box.fadeOut();
		
		 $coverLayer.hide();
		   $('body').css({ 
             "overflow-x":"auto",
             "overflow-y":"auto"        
        }); 

	})
	
	$classify_span.eq(0).addClass('action');
	
	//点击显示隐藏 （ 账号登录/手机号登录）
	$classify_span.eq(0).on('click',function(){
		$(this).addClass('action');
		$(this).siblings().removeClass('action');
		
		$login_account.show();
		$login_phone.hide();		
		
	})
	
	$classify_span.eq(1).on('click',function(){
		$(this).addClass('action');
		$(this).siblings().removeClass('action');
		
		$login_account.hide();
		$login_phone.show();		
		
	})

	
	
	
	
	
	
	
});