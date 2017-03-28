;$(function($){
	var $draw=$('#draw');
	var $btn=$('#sub');
	$btn.click(function(){
		var val = $draw.val();
		if (val === '') {
			alert('请输入取款金额');
		}else{
			if (val < 500) {
				alert('取款金额不能小于500');
			}
		}
	});
});