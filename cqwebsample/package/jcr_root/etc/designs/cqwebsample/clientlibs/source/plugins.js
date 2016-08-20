/**
 * Plugins JS Reggie Senal
 */
$(function(){
	// get server time via OSGi
	$.fn.servertime = function(){
		var $this = $(this);
		var jqxhr = $.ajax({
			url:'/apps/bean/servertime',
			dataType: 'json'
		}).
		fail(function(){
			console.log("fail to get server time");
		}).
		done(function(reply){
			$this.text(reply.time);
		});
	}
});


