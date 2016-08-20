/**
 * Main JS Reggie Senal
 */
$(function() {
	$('.popup-youtube').magnificPopup({
		disableOn : 700,
		type : 'iframe',
		mainClass : 'mfp-fade',
		removalDelay : 160,
		preloader : false,
		fixedContentPos : false
	});
	
	// call OSGi thru ajax plugin.js servertime
	$('.servertimevalue').servertime();
});

var map = false;
function initMap() {
	var mapd = document.getElementById('map');
	map = new google.maps.Map(mapd, {
		center: {lat: 1.36261104, lng: 103.82657055},
	    zoom: 12
	});
}

function addMarker(shopname, latc, lngc, address, phone) {
	var contentString = "<div class='shopinfo'>";
	contentString = contentString + "<span class='shopname'>"+shopname+"</span>";
	contentString = contentString + "<span class='shopaddress'>Address: "+address+"</span>";
	contentString = contentString + "<span class='shopphone'>Telephone: "+phone+"</span>";
	contentString = contentString + "</div>";
	var infowindow = new google.maps.InfoWindow({
        content: contentString
	});
	
	var marker = new google.maps.Marker({
		position : {lat: latc, lng: lngc},
		map : map
	});
	marker.addListener('click', function() {
    	infowindow.open(map, marker);
	});
}