;$(function($){
	var $qq=$('#qq');
	var $tj=$('#tj');
	$tj.on('click',function(){
		var qq=$qq.val();
		var patten=/^[1-9]\d{5,}$/;
		if (patten.test(qq)) {
			alert('提交成功');
		}else{
			alert('填写正确的qq号码');
		}
	});
});