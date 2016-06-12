/**
 * Plugins JS Reggie Senal
 */
$(function(){
	console.log('plugin js');
	
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
			console.log(reply);
			$this.text(reply.time);
		});
		console.log(jqxhr);
	}
});