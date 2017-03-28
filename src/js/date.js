;$(function($){
	
	var $date_start = $('.content_right #date_start');
    var $date_end = $('.content_right #date_end');
	
	var start = {
    format: 'YYYY-MM-DD',
//  minDate: $.nowDate(0), //设定最小日期为当前日期
//  isinitVal:true,
    festival:false,
    ishmsVal:false,
    maxDate: '2099-06-30', //最大日期
    choosefun: function(elem,datas){
        end.minDate = datas; //开始日选好后，重置结束日的最小日期
    }
};
var end = {
    format: 'YYYY-MM-DD',
    minDate: $.nowDate(0), //设定最小日期为当前日期
    festival:false,
    maxDate: '2099-06-16', //最大日期
    choosefun: function(elem,datas){
        start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
    }
};
$date_start.jeDate(start);
$date_end.jeDate(end);
	
})
