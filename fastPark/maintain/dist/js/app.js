
;(function(){
	var APP = function(){
		this.config = {
			// 测试请求地址
			url:"http://119.23.35.59:9091/",
		};
	};
	APP.prototype={
		toast:function(msg){
			if(layer){
				layer.open({
			      content: msg,
			      time: 3,
			      skin:'msg'
			    });
			}
		},
	};
	window.APP = APP;
})();