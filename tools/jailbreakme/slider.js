/* slider */
var step;
var unlock4 = document.getElementById('unlock_text');
var unlock1 = document.getElementById('unlock1');
var ival = null;

// returns a -webkit-gradient string for an infinite gradient
// there is probably a simpler way to do this.
function get_gradient(bits) {
    var last = -10000;
    var last_alpha = -10000;
    var ret = '-webkit-gradient(linear, left bottom, right bottom, ';
    var stops = '';
    var on = false;
    //console.log('bits='+bits);
    for(var i = 0; i < bits.length; i += 2) {
        var pos = bits[i];
        var alpha = bits[i+1];
        if(!on && pos >= 0) {
            var from = (alpha * (0 - last_pos) - last_alpha * (0 - pos)) / (pos - last_pos);
            ret += 'from(rgba(0,0,0,' + from + ')), ';
            on = true;
        }
        if(on) {
            if(pos >= 1) {
                // last_alpha + ((alpha - last_alpha) / (pos - last_pos)) * (1 - last_pos);
                // [1/[pos - last_pos]](last_alpha*pos - last_alpha*last_pos + alpha - alpha*last_pos - last_alpha + last_alpha*last_pos)
                // [1/[pos - last_pos]](last_alpha*(pos - 1) + alpha(1 - last_pos))

                var to = (alpha * (1 - last_pos) - last_alpha * (1 - pos)) / (pos - last_pos);
                ret += 'to(rgba(0,0,0,' + to + '))';
                ret += stops;
                break;
            }
            stops += ', color-stop(' + pos + ', rgba(0,0,0,' + alpha + '))';
        }
        last_pos = pos;
        last_alpha = alpha;
    }
    return ret + ')';
}
function turn_on() {
    if(ival) return;
    step = -0.15;
    ival = setInterval(window.stepp = function() {
        step = (step + 0.05) % 1.55;
        var wleft = step - 0.15;
        var wright = step;
        var gleft = wleft - 0.2;
        var gright = wright + 0.2;
        var s = get_gradient([-1000, 0.5, gleft, 0.5, wleft, 0.9, wright, 0.9, gright, 0.5, 1000, 0.5]);
        //console.log('step='+step+' s='+s);
        unlock4.style.WebkitMaskImage = s;
    }, 50);
}
function turn_off() {
    if(!ival) return;
    clearInterval(ival);
    ival = null;
    unlock4.style.WebkitMaskImage = '';
}

var left = 0;
function set_left(left_) {
    left = left_;
    slider.style.left = left_ + 'px';
    unlock4.style.opacity = 1.0 - (left / 40);
}

var startX = null, startLeft, maxLeft;

var vmismatch = 0;

slider.ontouchstart = function(e) {
    startX = e.targetTouches[0].clientX;
    startLeft = left;
    turn_off();
    slider.style.WebkitTransitionProperty = '';
    slider.style.WebkitTransitionDuration = '0s';
    unlock4.style.WebkitTransitionProperty = '';
    unlock4.style.WebkitTransitionDuration = '0s';
    maxLeft = slider.parentNode.clientWidth - slider.clientWidth - 5;
    return false;
}
slider.ontouchmove = function(e) {
    var diff = e.targetTouches[0].clientX - startX;
    if(diff < 0) diff = 0;
    else if(diff >= maxLeft) diff = maxLeft;
    set_left(diff + startLeft);
}
window.ontouchend = function() {
    if(startX == null) return;
    startX = null;
    if(maxLeft - left < 15) {
        jailbreak();
        return false;
    }
    turn_on();
    unlock4.style.WebkitTransitionProperty = 'opacity';
    unlock4.style.WebkitTransitionDuration = '0.5s';
    var left_ = left;
    set_left(0);
    slider.style.WebkitTransform = 'translateX('+left_+'px)';
    setTimeout(function() {
        slider.style.WebkitTransitionProperty = '-webkit-transform';
        slider.style.WebkitTransitionDuration = '0.5s';
        slider.style.WebkitTransform = 'translateX(0px)';
    }, 0);
    return false;
}

set_left(0);
turn_on();
