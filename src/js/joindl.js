;$(function($){
	var $name=$('#name');
	var $tel=$('#tel');
	var $qq=$('#qq');
	var $wx=$('#wx');
	var $eml=$('#eml');
	var $dz=$('#dz');
	var $btn=$('.pad .sub');
	$btn.click(function(){
		var name=$name.val();
		var tel=$tel.val();
		var qq=$qq.val();
		var wx=$wx.val();
		var eml=$eml.val();
		var dz=$dz.val();
		var patten1=/^[\u4e00-\u9fa5]{2,}|[a-zA-Z]/;
		var patten2= /^1\d{10}$/;
		var patten3=/[1-9]\d{4,}/;
		var patten4=/^[a-zA-Z\d_]{5,}$/;
		var patten5=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/   ;
		var patten6=/[\u4E00-\u9FFF\w\d]+/;
		if (name == '' || tel == '' || qq == '' || wx == '' || eml == '' || dz == '') {
			alert('请填写必填项目');
		}else{
			if (!(patten1.test(name))) {
				alert('代理人姓名错误');
			}else{
				if (!(patten2.test(tel))) {
					alert('电话号码错误');
				}else{
					if (!(patten3.test(qq))) {
						alert('qq号码输入错误');
					}else{
						if (!(patten4.test(wx))) {
							alert('微信号码输入错误');
						}else{
							if (!(patten5.test(eml))) {
								alert('邮箱账号错误');
							}else{
								if (!(patten6.test(dz))) {
									alert('所在地址输入错误');
								}else{
									alert('提交成功');
								}
							}
						}
					}
				}
			}
		}
	});
});