;$(function($){
	var btn=$('#btn');
	btn.on('click',function(){
		var que=$('#que').val();
		var npass=$('#npass').val();
		var paten=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
		console.log(npass);
		if (!(paten.test(npass)) || npass == '') {
			alert('新密码格式错误');
		}else{
			if (npass != que) {
				alert('和新密码不相同');
			}else{
				alert('密码更改成功');
			}
		}
	});
});