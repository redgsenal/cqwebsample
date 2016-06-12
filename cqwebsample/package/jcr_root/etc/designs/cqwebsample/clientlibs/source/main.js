/**
 * Main JS Reggie Senal
 */
$(function() {
	console.log('main js');
	$('.popup-youtube').magnificPopup({
		disableOn : 700,
		type : 'iframe',
		mainClass : 'mfp-fade',
		removalDelay : 160,
		preloader : false,
		fixedContentPos : false
	});
	
	// call OSGi thru ajax plugin.js servertime
	console.log('server time');
	$('.servertimevalue').servertime();
});