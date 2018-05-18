;(function(){

	var APP = function(){

	};

	APP.prototype={
		goPage:function(url){
			// window.location.replace(url);
			window.location.href=url;
		},
	};

	window.APP = APP;
})();