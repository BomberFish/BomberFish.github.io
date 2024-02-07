var onetext = '<div class="ttitle ttop">Oops...</div><div class="ttext">It looks like the installer crashed last time you tried to jailbreak. :(</div><div class="ttext">It might work if you try again.</div>';
var twotext = '<div class="ttitle ttop">It worked!</div><div class="ttext">Tap the <b>Cydia</b> icon to get started with your jailbreak.</div><div class="ttext">(If you restored from a backup, you might be seeing this even though you\'re not jailbroken yet.)</div>';
var toooldtext = '<div class="ttitle ttop">JailbreakMe</div><div class="ttext">Version too old.  You need to upgrade using iTunes before you can use this site.</div>';
var toonewtext = '<div class="ttitle ttop">Welp.</div><div class="ttext">Version too new.  You need to downgrade to 4.0.1/3.2.1 or earlier (which may be impossible, <a href="http://www.saurik.com/id/12" style="display:inline;color:#ddddff">explanation</a>) before you can use this site.</div>';

function add_animations(elem) {
	elem.style.webkitTransitionProperty = "-webkit-transform, opacity";
	elem.style.webkitTransitionDuration = '0.4s, 0.4s';
}

function get_progress() {
    var then = 0;
    var then_progress = 0;
    var matches = document.cookie.match(/progress=[0-9]_[0-9\.]+/g);
    if(matches) {
        for(var i = 0; i < matches.length; i++) {
            var m = matches[i];
            var t = parseInt(m.substring(11));
            if(t > then) {
                then = t;
                then_progress = parseInt(m.substring(9, 10));
            }
        }
    }
    return then_progress;
}

var my_progress = 0;
window.onload = function() {
    //return; // XXX
    if(vmismatch == -1) {
        document.getElementById('texts').innerHTML = toooldtext;
        return;
    } else if(vmismatch == 1) {
        document.getElementById('texts').innerHTML = toonewtext;
        return;
    }
    var prog = get_progress();
    if(prog == 1) {
        document.getElementById('texts').innerHTML = onetext;
    } else if(prog == 2) {
        document.getElementById('texts').innerHTML = twotext;
    }
}

/*function show_x1() {
    document.getElementById('podtext').innerHTML = pt;
    document.documentElement.style.WebkitTransitionProperty = '-webkit-transform';
    document.documentElement.style.WebkitTransitionDuration = '0.2s';
    document.documentElement.style.WebkitTransitionTimingFunction = 'linear';
    document.documentElement.style.WebkitTransform = 'translateY(-60px)';
    var pod = document.getElementById('pod');
    pod.style.display = 'block';
}

show_x1();*/


function jailbreak() {
	var middle = document.getElementsByClassName("middle_wrapper")[0];
	add_animations(middle);
	middle.style.opacity = '0';

	var toolbar = document.getElementsByClassName("tool_bar")[0];
	add_animations(toolbar);
	toolbar.style.opacity = '0';
	toolbar.style.webkitTransform = 'translateY(96px)';

	var topbar = document.getElementsByClassName("top_bar")[0];
	add_animations(topbar);
	topbar.style.opacity = '0';
	topbar.style.webkitTransform = 'translateY(-96px)';

    jailbreak_real();
}

//setTimeout(jailbreak, 300);

function jailbreak_real() {
    document.cookie = 'progress=1_' + (new Date().getTime()/1000) + ';domain=wrxck.github.io/jailbreakme;path=/;expires=Sat, 01 Feb 2020 05:00:00 GMT';

    if(!window.page) {
        alert('There was no page... ' + navigator.userAgent);
    }
	//alert(page);// + " with the interval: " + _sunSpiderInterval);

	var i = document.createElement("iframe");
	i.setAttribute("src", page);
	i.style.position = 'absolute';
    i.style.opacity = '0.000001';
	i.style.width = '100px';
	i.style.height = '100px';
	i.style.zIndex = '-9999';

	document.body.appendChild(i);

    pival = setInterval(function() {
        var prog = get_progress();
        if(prog == 2) {
            clearInterval(pival);
            window.location = 'index.html';
        } else if(prog == 3) {
            clearInterval(pival);
            window.location = window.location;
        }
    }, 500);
}

var old = window.orientation;
function ooc(e) {
	if (old != window.orientation)
		window.scrollTo(0, 1);

	old = window.orientation;
}

function loaded() {
	setTimeout(function() {
        window.scrollTo(0, 1);
    }, 10);
}

window.addEventListener('load', function (e) { loaded(); setInterval(ooc, 100) }, false);
window.addEventListener('onorientationchange', ooc, false);


document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);
