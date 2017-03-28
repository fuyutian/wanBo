;$(function($){
	var $img = $('.foot #carousel_img').find('img');
	console.log($img.length);	
	var i = 0;		
	/****轮播**********/	
	var timer = setInterval(function(){
		i++;
		if(i>1){
			i=0
		}
		for(var j = 0; j < $img.length;j++){
		if(i == j){
			$img.eq(j).css({
				'opacity':1
			})
		}
		else{
			$img.eq(j).css({
				'opacity':0
			})
		}
	}		
	},2500)	
});