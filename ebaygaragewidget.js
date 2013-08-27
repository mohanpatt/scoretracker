<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
function generateHTML(vehicleId, publicViewCount, favoritesCount, mediaCount, publicURL, newPublicURL, vehicleName, primaryPhoto) {
	var outputhtml = "<div style=\" margin-top:6px;margin-right:6px\" class=\"gg-fL grid\">";
	outputhtml += "<a href=\"" + publicURL + "\" style=\"text-decoration: none; border: 0\" id=\"vehAnc_" + vehicleId + "\">";
	outputhtml += "<div class=\"crop\">";
	outputhtml += "<img width=\"295\" onload=\"loaded(this, 'grid')\" src=\"" + primaryPhoto + "\" style=\"border: 0px none; visibility: visible;\">";
	outputhtml += "<div class=\"gg-dN gcg-msk gg-fwB\"></div> ";
	outputhtml += "<div class=\"gcg-hvr gg-dN\">";
	outputhtml += "<div class=\"gcg-gBg gcg-ttlH\"> "+vehicleName+"</div>";
	outputhtml += "<div class=\"gVehData gcg-pdT\">"+mediaCount+"<span class=\"gg-fwN\">&nbsp; photos</span></div>";
	outputhtml += "<div class=\"gVehData\"> "+publicViewCount+"<span class=\"gg-fwN\">&nbsp; views</span></div>";
	outputhtml += "<div class=\"gVehData\"><span id=\"com_"+vehicleId+"\">0</span><span class=\"gg-fwN\">&nbsp; comments</span></div>";
	outputhtml += "<div class=\"gVehData\"><span id=\"pFavCnt_"+vehicleId+"\">"+favoritesCount+"</span><span class=\"gg-fwN\">&nbsp; favorites</span></div>";
	outputhtml += "<button class=\"cbtn gcg-btm gcg-btn\">Click to view this vehicle</button>";
	outputhtml += "</div>";
	outputhtml += "</div>";
	outputhtml += "</a>";
	outputhtml += "<div class=\"tagsD gg-dN \"></div>";
	outputhtml += "</div>";
	return outputhtml;
}

function generateDIV(vehicleId, publicViewCount, favoritesCount, mediaCount, publicURL, newPublicURL, vehicleName, primaryPhoto) {
	var outputhtml = "<div><link href=\"http://ir.ebaystatic.com/z/yi/2k2lczczji343jqgl5i553x4n.css?dataUri=true\" type=\"text/css\" rel=\"stylesheet\">";
	outputhtml += "<link href=\"http://gh.ebaystatic.com/header/css/all.min?combo=53&app=RAPTOR&ds=3&siteid=0&rvr=75&h=18546\" type=\"text/css\" rel=\"stylesheet\">";
	outputhtml += "<link href=\"http://ir.ebaystatic.com/z/2a/syjgmgunzm5avm0qkjipmeey1.css?dataUri=true\" type=\"text/css\" rel=\"stylesheet\">";
	outputhtml += generateHTML(vehicleId, publicViewCount, favoritesCount, mediaCount, publicURL, newPublicURL, vehicleName, primaryPhoto);
	outputhtml += "</div>";
	return outputhtml;
}

function geteBayGarage() {
	alert("Hello1");
	var url="http://127.0.0.1:8888/ebaygaragejsonp/wrap";
	$.getJSON(url + "?callback=handleResponse", null, function(json) {
        alert(json);
		var fvsr = json.findingVehiclesResponse;
		var fvr = findingVehiclesResponse.findingVehicleResponse[0];
		if(fvr.ack=='Success') {
			var uvd = fvr.userVehiclesDetail[0];
			var uvdx = fvr.userVehicleDetailExt[0];
			return generateDIV(uvd.vehicleId, uvdx.publicViewCount, uvdx.favoritesCount, uvdx.mediaCount, uvdx.publicURL, uvdx.publicURL, uvd.year + " " + uvd.make + " " + uvd.model, uvd.primaryPhoto);
		}
    });
    alert("Hello2");
}
