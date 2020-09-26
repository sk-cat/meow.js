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

var version = "delta"

function help(com) {
	if (com = null) {
		var text = "███╗   ███╗███████╗ ██████╗ ██╗    ██╗        ██╗███████╗ \n████╗ ████║██╔════╝██╔═══██╗██║    ██║        ██║██╔════╝ \n██╔████╔██║█████╗  ██║   ██║██║ █╗ ██║        ██║███████╗ \n██║╚██╔╝██║██╔══╝  ██║   ██║██║███╗██║   ██   ██║╚════██║ \n██║ ╚═╝ ██║███████╗╚██████╔╝╚███╔███╔╝██╗╚█████╔╝███████║ \n╚═╝     ╚═╝╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚═╝ ╚════╝ ╚══════╝ \n" + ""
	}
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
	

