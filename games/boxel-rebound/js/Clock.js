class Clock {
	// Included with THREE.js
	constructor( autoStart = true ) {
		this.autoStart = autoStart;
		this.startTime = 0;
		this.oldTime = 0;
		this.elapsedTime = 0;
		this.running = false;
	}

	render() {
		if ($('.clock').length <= 0) {
			var _self = this;
			var clock = $('<div>', { class: 'clock' });
			var play = $('<span class="material-icons play">play_arrow</span>');
			var pause = $('<span class="material-icons pause" style="display: none;">stop</span>');
			var zoomIn = $('<span class="material-icons zoom-in">fullscreen</span>');
			var zoomOut = $('<span class="material-icons zoom-out">fullscreen_exit</span>');
			var timer = $('<span class="timer">00:00:000</span>');
			var interval = setInterval(function() { _self.update(); }, 1 / 24);
			
			clock.append(play, pause, zoomIn, zoomOut, timer);
			$('body').append(clock);
			document.querySelectorAll('.clock').DraggableJS();

			// Add event listeners
			$(document).on('click', '.material-icons.play', function(e) { _self.start(); });
			$(document).on('click', '.material-icons.pause', function(e) { _self.stop(); });
			$(document).on('click', '.material-icons.zoom-in', function(e) { $(this).parent().css({ 'font-size': parseInt($(this).css("font-size")) + 12 }); })
			$(document).on('click', '.material-icons.zoom-out', function(e) { $(this).parent().css({ 'font-size': parseInt($(this).css("font-size")) - 12 }); if (parseInt($(this).css("font-size")) <= 0) { $(this).parent().remove(); clearInterval(interval); }});
			
		}
	}

	update() {
		var duration = this.getElapsedTime() * 1000;
		var milliseconds = Math.floor((duration % 1000));
		var seconds = Math.floor((duration / 1000) % 60);
		var minutes = Math.floor((duration / (1000 * 60)) % 60);
		seconds = (seconds < 10) ? "0" + seconds : seconds; 
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;
		milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
    	document.getElementsByClassName("timer")[0].innerHTML = minutes + ':' + seconds + '.' + milliseconds;
	}

	start() {
		if (this.running == false) {
			this.startTime = now();
			this.oldTime = this.startTime;
			this.elapsedTime = 0;
			this.running = true;
			$('.play').hide();
			$('.pause').show();
		}
	}

	stop() {
		this.getElapsedTime();
		this.running = false;
		this.autoStart = false;
		$('.play').show();
		$('.pause').hide();
	}

	getElapsedTime() {
		this.getDelta();
		return this.elapsedTime;
	}

	getDelta() {
		let diff = 0;
		if ( this.autoStart && ! this.running ) {
			this.start();
			return 0;
		}
		if ( this.running ) {
			const newTime = now();
			diff = ( newTime - this.oldTime ) / 1000;
			this.oldTime = newTime;
			this.elapsedTime += diff;
		}
		return diff;
	}
}

function now() {
	return ( typeof performance === 'undefined' ? Date : performance ).now(); // see #10732
}