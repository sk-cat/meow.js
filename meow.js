//
//
//
// ███╗   ███╗███████╗ ██████╗ ██╗    ██╗        ██╗███████╗
// ████╗ ████║██╔════╝██╔═══██╗██║    ██║        ██║██╔════╝
// ██╔████╔██║█████╗  ██║   ██║██║ █╗ ██║        ██║███████╗
// ██║╚██╔╝██║██╔══╝  ██║   ██║██║███╗██║   ██   ██║╚════██║
// ██║ ╚═╝ ██║███████╗╚██████╔╝╚███╔███╔╝██╗╚█████╔╝███████║
// ╚═╝     ╚═╝╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚═╝ ╚════╝ ╚══════╝
// 
// made by Slovak_Cat and cats on 🌍 Eatrh in 2020
// © sk_cat() & Slovak_Cat 2019-2020
// 

var meowjs_available = true
var version = "delta"

function help(com) {
  return "\n███╗   ███╗███████╗ ██████╗ ██╗    ██╗        ██╗███████╗ \n████╗ ████║██╔════╝██╔═══██╗██║    ██║        ██║██╔════╝ \n██╔████╔██║█████╗  ██║   ██║██║ █╗ ██║        ██║███████╗ \n██║╚██╔╝██║██╔══╝  ██║   ██║██║███╗██║   ██   ██║╚════██║ \n██║ ╚═╝ ██║███████╗╚██████╔╝╚███╔███╔╝██╗╚█████╔╝███████║ \n╚═╝     ╚═╝╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚═╝ ╚════╝ ╚══════╝ \n" + "More information on https://github.com/sk-cat/meow.js or https://skcat.tk/meow.js/"
}

function ifInternetConnection {
	   // Checking for an Internet connection
  // From http://youmightnotneedjquery.com/#request IE8+
  var Request = new XMLHttpRequest();
  // Load a tiny library from a reliable source to check if a real Internet connexion is available.
  Request.open('GET', 'https://ajax.googleapis.com/ajax/libs/threejs/r76/three.min.js', true);
  Request.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        // jéj internetové pripojenie dostupné 
        var connect = true
      } else {
        var connect = false
      }
    }
  };
  Request.send();
  Request = null;

return connect
}

function openInYT(id) {
	var yt_x-callback-url = "vnd.youtube://"
	var yturl = "https://youtube.com/"
	if (id = null) {
		document.location(yt_x-callback-url)
	} else {
		document.location(yt_x-callback-url + yturl + id)
	}
}

function catAscii() {
}

function cclog(text, colorhex) {
	var atext = "%c" + text
	var csstext = "color: " + colorhex + "; font-family: sans-serif;"
	console.log(atext, csstext)
}

function shortlinkisgd(link) {
	var isgdcreatelink = "http://is.gd/create.php?format=simple&url="
	
	}

function editwebpageAsText() {
	document.body.contentEditable = "true"; document.designMode = "on"

completion();
	return "contentEditable=true desingMode=on"
}

function echo(echo) {
return echo
}

function w_Che(a, b) {
  var mAT = a+b;
  var m = b;
  var non_percetonial = mAT / m;
  var final = non_percetonial*100;
  return "𝔀= " + final + "%"
 }


/**
 * Dubiously created by Adrian Cooney
 * http://adriancooney.github.io
 */
(function(console) {
	"use strict";

	function getBox(width, height) {
		return {
			string: "+",
			style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: " + height + "px;"
		}
	}
	console.image = function(url, scale) {
		scale = scale || 1;
		var img = new Image();

		img.onload = function() {
			var dim = getBox(this.width * scale, this.height * scale);
			console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;");
		};

		img.src = url;
	};
})(console);
