"use strict";

// Map Logic
// handles all map-related stuff
// all dbo objects are loaded at this point




// HELPER FUNCTIONS

function toChatCode(id){
	// convert id to 2 bytes, reverse bytes, add 0x04 to the front and 0x00 0x00 to the back, encode to base 64, surround in [& and ];
	return '[&'+btoa(String.fromCharCode(0x04, id % 256, Math.floor(id/256), 0x00, 0x00))+']';
}

var numLayers = 8;
var layers = {"97463":1,"97472":0,"97479":0,"97484":0,"97487":0,"97490":0,"97501":0,"97503":1,"97505":0,"97507":3,"97512":2,"97527":0,"97529":0,"97535":0,"97547":0,"97549":0,"97568":1,"97571":0,"97573":2,"97596":0,"97633":3,"97644":0,"97646":1,"97649":-1,"97651":2,"97656":0,"97666":-1,"97669":3,"97672":2,"97677":0,"97683":-1,"97686":-1,"97691":-1,"97694":-1,"97699":2,"97707":0,"97712":-1,"97728":0,"97736":0,"97741":-1,"97743":-1,"97748":-1,"97750":-1,"97755":-1,"97764":0,"97796":-1,"97801":0,"97810":0,"97820":0,"97833":0,"97837":-1,"97845":0,"97856":0,"97879":-1,"97884":0,"97887":1,"97895":-1,"97897":-1,"97907":4,"97909":-1,"97911":-1,"97913":-1,"97915":-1,"97917":2,"97920":2,"97926":0,"97928":-1,"97932":2,"97934":3,"97936":0,"97939":-1,"97944":3,"97952":2,"97956":5,"97960":0,"97964":3,"97971":0,"97974":-1,"97982":0,"97984":0,"97986":-1,"97988":-1,"97992":2,"97994":0,"98001":0,"98006":0,"98014":0,"98024":2,"98027":2,"98030":1,"98034":3,"98036":0,"98040":1,"98045":2,"98049":1,"98055":0,"98057":0,"98063":0,"98093":0,"98096":0,"98108":0,"98110":0,"98124":0,"98136":2,"98137":0,"98138":1,"98146":-1,"98148":-1,"98168":0,"98180":0,"98182":2,"98189":-1,"98191":-1,"98201":-1,"98203":0,"98216":0,"98219":-1,"98221":4,"98223":-1,"98232":-1,"98237":-1,"98242":-1,"98247":5,"98249":1,"98253":-1,"98255":-1,"98260":-1,"98268":-1,"98270":-1,"98273":2,"98275":-1,"98278":3,"98282":1,"98293":-1,"98295":-1,"98297":-1,"98308":-1,"98328":-1,"98330":-1,"98334":0,"98341":-1,"98343":-1,"98345":-1,"98348":0,"98351":-1,"98353":-1,"98355":-1,"98357":-1,"98373":0,"98376":1,"98378":-1,"98387":0,"98391":-1,"98393":-1,"98401":-1,"98403":3,"98405":-1,"98407":-1,"98412":-1,"98414":-1,"98417":-1,"98419":-1,"98424":-1,"98427":-1,"98430":-1,"98432":-1,"98444":0,"98464":-1,"98466":-1,"98470":-1,"98473":2,"98477":0,"98481":-1,"98483":-1,"98489":2,"98496":0,"98499":2,"98503":3,"98548":3,"98550":2,"98552":0,"98565":-1,"98567":0,"98573":-1,"98575":-1,"98580":0,"98586":0,"98617":-1,"98620":2,"98638":-1,"98642":-1,"98646":0,"98656":-1,"98658":-1,"98660":-1,"98662":-1,"98664":-1,"98668":-1,"98670":-1,"98672":-1,"98674":-1,"98677":0,"98679":-1,"98681":-1,"98683":-1,"98687":-1,"98694":2,"98696":4,"98698":-1,"98700":6,"98702":-1,"98704":-1,"98707":-1,"98709":7,"98712":0,"98714":3,"98718":0,"98720":-1,"98722":-1,"98724":-1,"98726":-1,"98732":1,"98734":5,"98736":-1,"98738":0,"98741":7,"98743":-1,"98745":-1,"98747":-1,"98754":-1,"98756":-1,"98760":-1,"98762":-1,"98766":-1,"98768":-1,"98770":-1,"98772":4,"98774":-1,"98776":5,"98778":-1,"98780":-1,"98782":0,"98784":-1,"98793":0,"98804":-1,"98811":2,"98813":3,"98815":-1,"98819":3,"98833":-1,"98836":-1,"98839":4,"98842":3,"98845":-1,"98848":-1,"98851":0,"98856":2,"98859":0,"98861":-1,"98863":-1,"98867":-1,"98869":-1,"98871":-1,"98874":0,"98879":-1,"98881":-1,"98884":-1,"98887":-1,"98889":-1,"98892":-1,"98894":-1,"98897":1,"98900":-1,"98903":-1,"98905":-1,"98907":2,"98909":-1,"98911":-1,"98913":-1,"98915":1,"98917":2,"98919":-1,"98921":-1,"98923":-1,"98925":-1,"98927":-1,"98929":-1,"98931":-1,"98935":-1,"98937":-1,"98939":-1,"98941":-1,"98947":-1,"98950":-1,"98952":-1,"98954":-1,"98962":5,"98964":-1,"98966":3,"98968":0,"98970":-1,"98973":2,"98978":4,"98983":5,"98985":3,"98987":-1,"98989":-1,"99011":0,"99023":0,"99027":-1,"99029":-1,"99031":-1,"99033":-1,"99040":-1,"99042":-1,"99094":0,"99100":-1,"99103":-1,"99105":-1,"99107":-1,"99113":-1,"99116":-1,"99119":-1,"99121":-1,"99123":-1,"99125":-1,"99127":-1,"99129":-1,"99131":-1,"99133":-1,"99135":-1,"99139":-1,"99141":-1,"99143":-1,"99145":-1,"99147":-1,"99150":-1,"99153":-1,"99156":-1,"99159":-1,"99163":-1,"99165":-1,"99167":2,"99169":-1,"99174":0,"99181":-1,"99184":-1,"99186":-1,"99189":2,"99191":-1,"99193":-1,"99198":-1,"99200":-1,"99202":-1,"99204":-1,"99206":-1,"99208":-1,"99210":-1,"99212":-1,"99214":-1,"99223":-1,"99225":0,"99227":0,"99235":-1,"99237":-1,"99246":0,"99251":3,"99253":-1,"99257":-1,"99259":-1,"99261":-1,"99265":-1,"99270":-1,"99272":-1,"99276":-1,"99279":-1,"99297":0,"99304":0,"99307":0,"99312":-1,"99314":-1,"99316":-1,"99328":-1,"99330":-1,"99332":-1,"99334":-1,"99336":0,"99338":-1,"99340":0,"99342":-1,"99346":-1,"99348":-1,"99350":1,"99352":-1,"99354":-1,"99358":2,"99360":-1,"99362":-1,"99367":0,"99372":-1,"99374":-1,"99376":-1,"99378":-1,"99380":-1,"99382":-1,"99387":-1,"99390":-1,"99392":-1,"99394":-1,"99396":-1,"99408":0,"99410":0,"99412":-1,"99414":-1,"99418":-1,"99420":-1,"99424":-1,"99426":-1,"99428":-1,"99430":-1,"99434":-1,"99436":-1,"99451":-1,"99459":1,"99461":2,"99470":-1,"99473":0,"99476":-1,"99484":3,"99492":0,"99495":0,"99504":-1,"99506":-1,"99515":0,"99558":2,"99570":2,"99581":0,"99631":-1,"99635":0,"99637":2,"99644":0,"99654":0,"99657":-1,"99664":-1,"99666":-1,"99689":0,"99691":-1,"99709":-1,"99712":-1,"99727":-1,"99732":-1,"99734":0,"99736":0,"99739":-1,"99741":-1,"99743":3,"99748":-1,"99753":-1,"99755":-1,"99757":-1,"99761":-1,"99763":0,"99765":-1,"99768":-1,"99770":-1,"99773":-1,"99775":2,"99789":0,"99793":0,"99797":-1,"99799":-1,"99803":-1,"99809":0,"99813":-1,"99818":-1,"99827":3,"99839":0,"99841":-1,"99843":-1,"99846":0,"99852":-1,"99856":0,"99869":2,"99874":2,"99876":-1,"99878":1,"99880":3,"99883":0,"99891":-1,"99899":3,"99901":-1,"99976":0,"99978":-1,"99980":-1,"99982":-1,"99984":0,"99987":-1,"99990":-1,"99992":0,"99995":-1,"99998":-1,"100000":-1,"100006":0,"100014":0,"100017":-1,"100038":0};

function distanceFromSegment(p, a, b){
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    var L = (dx*dx) + (dy*dy);
    if(L == 0){
    	return Math.sqrt((p.x - a.x) * (p.x - a.x) + (p.y - a.y) * (p.y - a.y));
    }
    var r = ((p.x - a.x) * dx + (p.y - a.y) * dy) / L;
    if(r > 1){
    	return Math.sqrt((p.x - b.x) * (p.x - b.x) + (p.y - b.y) * (p.y - b.y));
    }else if(r < 0){
    	return Math.sqrt((p.x - a.x) * (p.x - a.x) + (p.y - a.y) * (p.y - a.y));
    }
    dx = a.x + r * dx;
    dy = a.y + r * dy;
    return Math.sqrt((p.x - dx) * (p.x - dx) + (p.y - dy) * (p.y - dy));
}

// CONVERSION FUNCTIONS

function fromLatLngToPoint(ll, max_zoom){
	var point = new google.maps.Point(0, 0),
	origin = new google.maps.Point(128, 128),
	tiles = 1 << max_zoom,
	bound = function(value, min, max){
		if (min != null) value = Math.max(value, min);
		if (max != null) value = Math.min(value, max);
		return value;
	},
	sin_y = bound(Math.sin(ll.lat() * (Math.PI / 180)), -0.9999, 0.9999);
	point.x = origin.x + ll.lng() * (256 / 360);
	point.y = origin.y + 0.5 * Math.log((1 + sin_y) / (1 - sin_y)) * -(256 / (2 * Math.PI));
	return {x: Math.floor(point.x * tiles), y: Math.floor(point.y * tiles)};
	return new google.maps.Point(Math.floor(point.x * tiles), Math.floor(point.y * tiles));
}

function fromPointToLatLng(point, max_zoom){
	var size = (1 << max_zoom) * 256,
	lat = (2 * Math.atan(Math.exp((point.y - size/2) / -(size/(2 * Math.PI)))) - (Math.PI / 2)) * (180/Math.PI),
	lng = (point.x - size/2) * (360/size);
	return new google.maps.LatLng(lat, lng);
}

var gw2map;

// on page load
$(document).ready(function(){
	gw2map = new Gw2Map();
	gw2map.create();
	var d = new MapData({
		toLoad:
		[
			{ name: "dboMapItem", url: "data/dboMapItem.json" },
			{ name: "dboMapRegion", url: "data/dboMapRegion.json" },
			{ name: "dboMapZone", url: "data/dboMapZone.json" },
			{ name: "dboPublicRegistry", url: "data/dboPublicRegistry.json" },
			{ name: "dboMapInfo", url: "data/dboMapInfo.json" },
			{ name: "dboPoints", url: "data/dboPoints.json" },
			{ name: "pimg2tile", url: "data/pimg2tile.json" },
			{ name: "tile2pimg", url: "data/tile2pimg.json" },
		],
		onReady: function(){
			gw2map.dataLoaded(d);
		}
	});
});

// TODO: make this a proper class.

function Gw2Map() {
	// data locals
	var dboMapInfo = {};
	var dboMapZone = {};
	var dboMapRegion = {};
	var dboMapItem = {};
	var dboPublicRegistry = {};
	var dboPoints = {};
	var pimg2tile = {};
	var tile2pimg = {};

	// locals
	var minZoom = 5;
	var maxZoom = 11;

	var markerZoom = 9;
	var waypointZoom = 8;

	var mapSize = 0;

	//var startMapPos = {x: mapSize/2, y: mapSize/2};
	var startMapZoom = 8;

	var markersStartVisible = startMapZoom > markerZoom;




	var max_zoom = function(){
		return maxZoom;
	};

	var ll2p = function(latlng){
		var p = fromLatLngToPoint(latlng, max_zoom());
		p.x -= (mapSize*8), p.y -= (mapSize*8);
		return p;
	};

	var p2ll = function(point){
		point.x += (mapSize*8), point.y += (mapSize*8);
		return fromPointToLatLng(point, max_zoom());
	};

	function toLatLng(x,y){
		return p2ll(new google.maps.Point(x, y));
	}

// Map Declaration
	var gmap;


// to translate map coordinates to pixel coordinates to display the mouse-over div for map items

	var pixelOverlay;
// functions to drive the map


	function get_caves(pimg) {
		return function(coords,zoom){
			var zOffset = 4;
			var offset = (1 << (zoom - 1));
			var actualX = coords.x - offset;
			var actualY = coords.y - offset;
			var actualZ = zoom - zOffset;
			if (actualZ != 7) return "";
			for (var i in pimg2tile[pimg]) {
				var pos = pimg2tile[pimg][i].split(",");
				if (actualX == pos[0] && actualY == pos[1]) {
					return "http://tiles.teichroeb.net/out/pimgs/"+pimg+"/"+actualX+"/"+actualY+".png";
				}
			}
			return "";
		};
	}
	function get_caves_layer(layer) {
		return function(coords,zoom){
		var zOffset = 4;
		var offset = (1 << (zoom - 1));
		var actualX = coords.x - offset;
		var actualY = coords.y - offset;
		var actualZ = zoom - zOffset;
		var pos = actualX + "," + actualY;
		if (actualZ != 7) {
			if (layer == 0) {
				return "http://tiles.teichroeb.net/out/tiles/1/1/"+actualZ+"/"+actualX+"/"+actualY+".png";
			} else {
				return "";
			}
		}
		if (pos in tile2pimg) {
			var pimgs = tile2pimg[pos];
			var pimg = "";
			var num = 0;
			for (var i in pimgs) {
				var nextpimg = pimgs[i];
				if ((layer == 1 && !(nextpimg in layers)) || layers[nextpimg] == layer) {
					pimg = nextpimg;
					++num;
				}
			}
			if (num == 1) {
				return "http://tiles.teichroeb.net/out/pimgs/"+pimg+"/"+actualX+"/"+actualY+".png";
			} if (num > 1) {
				return "http://tiles.teichroeb.net/red.png";
			}
		}
		return "";
	};
	}

	var get_tile = function(coords,zoom){
		var zOffset = 4;
		var offset = (1 << (zoom - 1));
		var actualX = coords.x - offset;
		var actualY = coords.y - offset;
		var actualZ = zoom - zOffset;
		if(actualY < 0 || actualX < 0 || actualY >= (1 << actualZ) || actualX >= (1 << actualZ)){
			return "";
		}
		return "http://tiles2.teichroeb.net/1/1/"+actualZ+"/"+actualX+"/"+actualY+".jpg";
	};

	var pathStyleNormal = {
		editable: false,
		map: gmap,
		suppressUndo: true,
		zIndex: 9,
		strokeOpacity: 1,
		strokeWeight: 3,
		strokeColor: '#4F4',
	};

	var pathStyleUnderground = {
		editable: false,
		map: gmap,
		suppressUndo: true,
		zIndex: 9,
		strokeOpacity: 0,
		strokeWeight: 2,
		strokeColor: '#F62',
		icons:  [{
			icon: {
				path: 'M 1,-2 1,2 -1,2 -1,-2 z',
				fillOpacity: 1,
				strokeWeight: 0,
			},
			offset: '0px',
			repeat: '12px',
		}],
	};


// defining map settings

	var tile_size = new google.maps.Size(256,256);

	var tyria, caves, caves2;

	var mapMarkers = {};


	var dboMapPaths = {}; // paths indexed by zoneid, eventually from an external file
	// for testing

	var iconTypes = {};

	var editing = false;
	var myPath;

	this.changeLayer = function(pimg, newlayer) {
		layers[pimg] = newlayer;
		for (var i = 0; i < numLayers; ++i) {
			gmap.overlayMapTypes.setAt(i, gmap.overlayMapTypes.getAt(i));
		}
	}

	this.changeToOverlay = function(pimg) {
		var caves = new google.maps.ImageMapType({
			maxZoom: 11,
			alt: "caves",
			name: "caves",
			tileSize: tile_size,
			getTileUrl: get_caves(pimg)
		});
		gmap.mapTypes.set("3", caves);
		gmap.overlayMapTypes.setAt(numLayers, caves);
		var output = "";
		for (var i = 0; i < numLayers + 1; ++i) {
			output += '<input onclick="gw2map.changeLayer('+pimg+', '+(i-1)+');" type=button value="'+(i-1)+'">';
		}

		$("#panel2").html(output);
	}

	this.create = function() {
		gmap = new google.maps.Map(document.getElementById("gw2map") , {
			disableDoubleClickZoom: true,
			zoom: startMapZoom,
			minZoom: minZoom,
			maxZoom: maxZoom,
			streetViewControl: false,
			mapTypeControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.RIGHT_BOTTOM,
			},
			/*mapTypeControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM,
				mapTypeIds: ["1","2"]
},*/
			panControl: false,
			backgroundColor: '#000',
			mapTypeId: "1", // string for gmaps' sake
		});

		pixelOverlay = new google.maps.OverlayView();
		pixelOverlay.draw = function(){};
		pixelOverlay.setMap(gmap);

		tyria = new google.maps.ImageMapType({
			maxZoom: 11,
			alt: "Tyria",
			name: "Tyria",
			tileSize: tile_size,
			getTileUrl: get_tile
		});

		gmap.mapTypes.set("1",tyria);
		gmap.overlayMapTypes.insertAt(0, null);
		for (var i = numLayers - 1; i >= 0; --i) {
			var caves2 = new google.maps.ImageMapType({
				maxZoom: 11,
				alt: "caves",
				name: "caves",
				tileSize: tile_size,
				getTileUrl: get_caves_layer(i)
			});
			gmap.overlayMapTypes.insertAt(0, caves2);
			console.log(i);
		}
//		gmap.mapTypes.set("2",caves2);
		//gmap.mapTypes.set("3",caves2);

		mapMarkers['waypoint'] = new Array();
		mapMarkers['landmark'] = new Array();
		mapMarkers['task'] = new Array();
		mapMarkers['skill'] = new Array();
		mapMarkers['vista'] = new Array();

		iconTypes["waypoint"] = {
			url: "images/icon_waypoint.png",
			anchor: new google.maps.Point(14,14),
			scaledSize: new google.maps.Size(28,28),
		};

		iconTypes["waypointHover"] = {
			url: "images/icon_waypoint_hover.png",
			anchor: new google.maps.Point(14,14),
			scaledSize: new google.maps.Size(28,28),
		};

		iconTypes["landmark"] = {
			url: "images/icon_POI.png",
			anchor: new google.maps.Point(11,11),
			scaledSize: new google.maps.Size(22,22),
		};

		iconTypes["vista"] = {
			url: "images/icon_vista.png",
			anchor: new google.maps.Point(11,11),
			scaledSize: new google.maps.Size(22,22),
		};

		iconTypes["skill"] = {
			url: "images/icon_skillpoint.png",
			anchor: new google.maps.Point(11,11),
			scaledSize: new google.maps.Size(22,22),
		};

		iconTypes["task"] = {
			url: "images/icon_heart.png",
			anchor: new google.maps.Point(11,11),
			scaledSize: new google.maps.Size(22,22),
		};

		MarkerMan = new MarkerManager(gmap, {borderPadding: 0});
		google.maps.event.addListener(MarkerMan, 'loaded', function(){
			for(var key in mapMarkers){
				if(key == 'waypoint'){
					MarkerMan.addMarkers(mapMarkers[key], waypointZoom);
				}else{
					MarkerMan.addMarkers(mapMarkers[key], markerZoom);
				}

			}
			MarkerMan.refresh();
		});

		$('#map_title').hide();

		google.maps.event.addListener(gmap, 'dblclick', function(e){
			var p = ll2p(e.latLng);
			updateCurrentZone(p);
			if (typeof URLquery.edit != 'undefined') {
				if (editing) {
					editing = false;
				} else {
					editing = true;
					myPath = new MapPath(gmap, {
						types: [pathStyleNormal, pathStyleUnderground],
						vertices: [{pos: e.latLng, type: 0}]
					});
				}
			}

		});

		google.maps.event.addListenerOnce(gmap, 'idle', function(){
			// need to resize to have the whole map show
			readyToStart();

		});

		google.maps.event.addListener(gmap, 'rightclick', function(e){
			var numTiles = 1 << gmap.getZoom() - 4;
			var worldCoordinate = ll2p(e.latLng);
			var coord = {};
			coord.x = Math.floor((worldCoordinate.x/mapSize)*numTiles );
			coord.y = Math.floor((worldCoordinate.y/mapSize)*numTiles );

			console.log('TileX:' +coord.x+' - TileY:'+coord.y);

			if (gmap.getZoom() == 11) {
				var index =coord.x + "," + coord.y;
				var pimgs = tile2pimg[index];
				var output = "";
				for (var i in pimgs) {
					var pimg = pimgs[i];
					output += '<input onclick="gw2map.changeToOverlay('+pimg+');" type=button value="Use '+pimg+'">';
				}
				$("#panel").html(output);
			}

			if (editing == true) {
				myPath.push(e.latLng, 0);
			}
		});

		updateControls();
	}


	function makeOverFunc(target){
		return function(e){
			// waypoint icon
			if(target.mapItem.type == "waypoint"){
				target.setIcon(iconTypes['waypointHover']);
			}
			// task special name
			if(target.mapItem.type == "task"){
				$('#hover_window').html(target.mapItem.name + String.fromCharCode(160,160) + "<font style='color:#BBB;font-size:0.9em;'>(" + target.mapItem.level + ")</font>");
			}else{
				$('#hover_window').html(target.mapItem.name);
			}
			// show pop-up text
			$('#hover_window').stop().fadeIn({
				duration:200,
				queue: false,
			});
			// get future position and current size of textbox
			var proj = pixelOverlay.getProjection();
			var pixel = proj.fromLatLngToContainerPixel(target.getPosition());
			var docWidth = $(window).width();
			var floatWidth = $('#hover_window').width();
			// if textbox is going to overflow, flip it to go the other direction
			if(Math.round(pixel.x) + floatWidth + 20 >= docWidth){
				$('#hover_window').css({
					top: (Math.round(pixel.y) - 45) + "px",
					left: (Math.round(pixel.x) - (floatWidth + 10) ) + "px",
				});
			}else{ // otherwise go normal direction
				$('#hover_window').css({
					top: (Math.round(pixel.y) - 45) + "px",
					left: (Math.round(pixel.x) + 0) + "px",
				});
			}



		};
	}

	function makeOutFunc(target){
		return function(e){
			if(target.mapItem.type == "waypoint"){
				target.setIcon(iconTypes['waypoint']);
			}
			$('#hover_window').stop().fadeOut({
				duration:200,
				queue: false,
			});
		};
	}

	function makeClickFunc(target){
		return function(e){
			$('#dialog_title').text(target.mapItem.name);

			var url = window.location.pathname + "?target=" + target.mapItem.pubid;

			var output = "<p>Direct Link: <a href='"+url+"' onClick='return gw2map.clickTarget(event, \""+url+"\");'>" + target.mapItem.pubid + "</a></p>";

			if(target.mapItem.type == "waypoint" || target.mapItem.type == "landmark"){
				output += "<p>Chat Code: " + toChatCode(target.mapItem.itemid).replace('&', '&amp;') + "</p>";

				output += "<p>ID Code: " + target.mapItem.itemid;
			}

			$('#dialog_content').html(output);

			if(!$('#dialog_window').is(':visible'))
			{
				$('#dialog_window').fadeIn();

				$('#dialog_window').css({
					'left': (($(window).width() - $('#dialog_window').width())/2) + 'px',
					'top': (($(window).height() - $('#dialog_window').height())/2) + 'px'
				});
			}
		}
	}

	function gotoTarget(target) {
		window.history.pushState({},"", target);
		URLquery = loadQuery();
		processTarget();
	}

	this.clickTarget = function(event, target) {
		if (event.button != 0) {
			return true;
		}
		gotoTarget(target);
		return false;
	}


	var startCount = 0;
	function readyToStart() {
		++startCount;
		if (startCount == 2) {
			ShowUI();
			AddItemToControl("default", "Guild Wars 2 Traveller", 'images/icon_waypoint.png', "Double-click a zone to get started", "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)");

			google.maps.event.trigger(gmap, 'resize');
			gmap.setCenter(toLatLng(mapSize/2,mapSize/2));

			processTarget();
		}
	}

	this.dataLoaded = function(data) {
		dboMapInfo = data.get('dboMapInfo');
		dboMapZone = data.get('dboMapZone');
		dboMapRegion = data.get('dboMapRegion');
		dboMapItem = data.get('dboMapItem');
		dboPublicRegistry = data.get('dboPublicRegistry');
		dboPoints = data.get('dboPoints');
		pimg2tile = data.get('pimg2tile');
		tile2pimg = data.get('tile2pimg');
		processData();

		readyToStart();
	}

	function processTarget() {
		var pos = {};
		var zoom;
		// process target
		if(typeof URLquery.target != 'undefined'){
			for(var i = 0; i < URLquery.target.length; ++i)
			{
				// try each target in order
				// is it an pubid target?
				if(URLquery.target[i] in dboPublicRegistry)
				{
					var entry = dboPublicRegistry[URLquery.target[i]];
					if(entry.type == "item"){
						var itemData = dboMapItem[entry.localid];
						pos = itemData.pos;
						UpdateTitle(itemData.name);
						if(typeof URLquery.zoom == 'undefined'){
							zoom = maxZoom;
						}
						break;
					}else if(entry.type == "zone"){
						var zoneData = dboMapZone[entry.localid];
						pos = {x: (zoneData.area.right + zoneData.area.left) / 2, y: (zoneData.area.bottom + zoneData.area.top) / 2};
						UpdateTitle(zoneData.name);
						if(typeof URLquery.zoom == 'undefined'){
							zoom = maxZoom;
						}
						break;
					}else if(entry.type == "region"){
						var regionData = dboMapRegion[entry.localid];
						pos = regionData.label;
						UpdateTitle(regionData.name);
						if(typeof URLquery.zoom == 'undefined'){
							zoom = maxZoom;
						}
						break;
					}
				}else
				{
					// position data, check if formatted as "number,number"
					var match = URLquery.target[i].match(/(\d.*)\,(\d.*)/);

					if(match){
						var tempX = parseInt(match[1], 10);
						var tempY = parseInt(match[2], 10);
						if(tempX && tempY){
							pos = {x: tempX, y: tempY};
						}
					}
				}
			}
		}
		if(typeof pos.x !== 'undefined' && typeof pos.y !== 'undefined')
		{
			gmap.setCenter(toLatLng(pos.x,pos.y));
		}else{
			UpdateTitle(); // set to default
		}

		// process zoom
		if(typeof URLquery.zoom != 'undefined'){
			for(var i = 0; i < URLquery.zoom.length; ++i){
				var tempZoom = parseInt(URLquery.zoom[i]);
				if(tempZoom && tempZoom >= minZoom && tempZoom <= maxZoom){
					zoom = tempZoom;
					markersStartVisible = startMapZoom > markerZoom;
					break;
				}
			}
		}
		if(typeof zoom !== 'undefined'){
			gmap.setZoom(zoom);
		}

	}

	function processData() {
		mapSize = Math.max(dboMapInfo.size.x, dboMapInfo.size.y);

		for(var key in dboMapRegion) {
			var region = dboMapRegion[key];

			new MapLabel({
				map: gmap,
				fontColor: '#d6bb70',
				fontSize: 24,
				fontFamily: 'Menomonia',
				strokeWeight: 3,
				strokeColor: '#000',
				maxZoom: 6,
				minZoom: 6,
				position: toLatLng(region.label.x, region.label.y),
				text: region.name,
				zIndex: 100,
			});
		}

		for(var key in dboMapZone) {
			dboMapPaths[key] = {};
			dboMapPaths[key]['0'] = {name: "Map Exploration"};
		}
		// for each zone
		for(var key in dboMapZone){
			var zone = dboMapZone[key];

			new MapLabel({
				map: gmap,
				fontColor: '#d6bb70',
				fontSize: 24,
				fontFamily: 'Menomonia',
				strokeWeight: 3,
				strokeColor: '#000',
				maxZoom: 9,
				minZoom: 7,
				position: toLatLng((zone.area.left + zone.area.right) / 2, (zone.area.top + zone.area.bottom) / 2),
				text: zone.name,
				level: zone.level.min == 0 ? null : "(" + zone.level.min + " - " + zone.level.max + ")",
				levelColor: '#777',
				levelSize: 20,
				zIndex: 100,
			});
		}

		for(var key in dboMapItem){
			var item = dboMapItem[key];

			var itemName = item.name;
			if(item.type == 'task'){
				itemName += String.fromCharCode(160,160) + "<font style='color:#BBB;font-size:0.9em;'>(" + item.level + ")</font>";
			}

			if(typeof iconTypes[item.type] != 'undefined'){
				var tempMarker = new google.maps.Marker({
					position: toLatLng(item.pos.x, item.pos.y),
					draggable: false,
					icon: iconTypes[item.type],
					mapItem: item,
					zIndex: 100,
				});

				google.maps.event.addListener(tempMarker, "mouseover", makeOverFunc(tempMarker));
				google.maps.event.addListener(tempMarker, "mouseout", makeOutFunc(tempMarker));
				google.maps.event.addListener(tempMarker, "click", makeClickFunc(tempMarker));

				mapMarkers[item.type].push(tempMarker);
			}
		}


		for (key in dboPoints) {
			var line = dboPoints[key];
			var verts = [];
			for (var vertkey in line.vertices) {
				var vert = line.vertices[vertkey];
				verts.push({
								pos: p2ll(new google.maps.Point(vert.x, vert.y)),
								type: vert.type,
							});
			}
			var myPath = new MapPath(gmap, {
				types: [pathStyleNormal, pathStyleUnderground],
				vertices: verts
			});
		}
	}

	var MarkerMan;

	// map center
	// hold map in place
	/*google.maps.event.addListener(gmap, 'center_changed', function(){
		var bounds = gmap.getBounds();
		var ne = ll2p(bounds.getNorthEast());
		var sw = ll2p(bounds.getSouthWest());
		var pos = ll2p(gmap.getCenter());
		//console.log("center: " + pos.x + ", " + pos.y);
		//console.log("NE: " + ne.x + ", " + ne.y);
		//console.log("SW: " + sw.x + ", " + sw.y);

		var force = false;

		if(sw.y - ne.y >= mapSize){
			if(pos.y != mapSize/2){
				pos.y = mapSize/2;
				force = true;
			}
		}else if(ne.y < 0){
			pos.y -= ne.y;
			force = true;
		}else if(sw.y > mapSize){
			pos.y -= (sw.y - mapSize);
			force = true;
		}

		if(ne.x - sw.x >= mapSize){
			if(pos.x != mapSize/2){
				pos.x = mapSize/2;
				force = true;
			}
		}else if(sw.x < 0){
			pos.x -= sw.x;
			force = true;
		}else if(ne.x > mapSize){
			pos.x -= (ne.x - mapSize);
			force = true;
		}

		if(force == true){
			//console.log("set center: " + pos.x + ", " + pos.y);
			gmap.setCenter(p2ll(pos));

		}

	});*/

	// detect zone stuff

	var currentZone = null;
	var isEditMode = false;
	var isLocked = false;

	function updateControls(){
		//RemoveAllItemsFromControl();
		if(currentZone != null){
			// get paths in the zone
			if(currentZone.zoneid in dboMapPaths && dboMapPaths[currentZone.zoneid].length != 0){
				var currentPaths = dboMapPaths[currentZone.zoneid];
				for(var key in currentPaths){
					var path = currentPaths[key];
					AddItemToControl(currentZone.zoneid, currentZone.name, 'images/icon_vista.png', path.name, "linear-gradient(to right, rgba(0,128,0,0) 0%, rgba(0,128,0,0.5) 100%)");
				}
			}else{
				AddItemToControl(currentZone.zoneid, currentZone.name, 'images/icon_heart.png', "There are no paths for this zone", "linear-gradient(to right, rgba(128,0,0,0) 0%, rgba(128,0,0,0.8) 100%)");
			}
		}
	}

	function updateCurrentZone(p){
		if(currentZone == null ||
			(
				currentZone.area.top >= p.y ||
				currentZone.area.bottom <= p.y ||
				currentZone.area.left >= p.x ||
				currentZone.area.right <= p.x
			))
		{
			for(var key in dboMapZone){
				var zone = dboMapZone[key];

				if(zone.area.top < p.y &&
					zone.area.bottom > p.y &&
					zone.area.left < p.x &&
					zone.area.right > p.x)
				{
					currentZone = zone;
					//$('#map_title').show()
					//$('#map_title_content').text(zone.name);

					updateControls();
					return;
				}
			}
			//currentZone = null;
			//updateControls();
			//$('#map_title').hide();
		}
	};

};
