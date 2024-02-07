// https://codepen.io/NiklasKnaack/pen/OmwgKb <3

var animationID;

function warpDeinit() {
  var canvas = document.getElementById("warpCanvas");
  if (canvas) {
    canvas.remove();
  }

  document.querySelectorAll("a").forEach((e) => {
    e.replaceWith(e.cloneNode(true));
  });

  const navLinks = document.querySelectorAll("nav a");
  const iframe = document.getElementById("frame");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      iframe.src = this.href;
    });
  });

  cancelAnimationFrame(animationID);
}

function addEventListenerToElements(query, eventType, callback) {
  const elements = document.querySelectorAll(query);
  elements.forEach((element) => {
    element.addEventListener(eventType, callback);
  });
}

function warpInit() {
  console.log("Making it so.");
  var mobile = false;

  var body = document.body,
    html = document.documentElement;

  //---

  if (isMobile.phone || isMobile.tablet) {
    mobile = true;
  }

  //---

  var main = document.querySelector("main");

  var canvasWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  var canvasHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  //---

  var canvas = document.createElement("canvas");
  canvas.id = "warpCanvas";
  canvas.setAttribute("width", canvasWidth);
  canvas.setAttribute("height", canvasHeight);
  canvas.oncontextmenu = function (e) {
    e.preventDefault();
  };

  if (!mobile) {
    addEventListenerToElements("a", "mousemove", mouseMoveHandler);
    addEventListenerToElements("a", "mousedown", mouseDownHandler);
    addEventListenerToElements("a", "mouseup", mouseUpHandler);
    addEventListenerToElements("a", "mouseenter", mouseEnterHandler);
    addEventListenerToElements("a", "mouseleave", mouseLeaveHandler);

    // $(canvas).css("cursor", "pointer");
    // canvas.style.cursor = "pointer";
  } else {
    addEventListenerToElements("a", "touchstart", touchStartHandler, false);
    addEventListenerToElements("a", "touchend", touchEndHandler, false);
    addEventListenerToElements("a", "touchmove", touchMoveHandler, false);
    addEventListenerToElements("a", "touchcancel", touchCancelHandler, false);
  }

  document.getElementById("effect").appendChild(canvas);

  //---

  var ctx = canvas.getContext("2d");
  var imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  var pix = imageData.data;

  //---

  var MATHPI180 = Math.PI / 180;
  var MATHPI2 = Math.PI * 2;

  var center = { x: canvas.width / 2, y: canvas.height / 2 };

  //---

  var mouseActive = false;
  var mouseDown = false;
  var mousePos = { x: center.x, y: center.y };

  //---

  var rotationSpeed = -1.0;
  var rotationSpeedFactor = { x: 0, y: 0 };
  rotationSpeedFactor.x = rotationSpeed / center.x;
  rotationSpeedFactor.y = rotationSpeed / center.y;

  var fov = 300;
  var fovMin = 210;
  var fovMax = fov;

  var starHolderCount = 6666;
  var starHolder = [];
  var starBgHolder = [];
  var starSpeed = 20;
  var starSpeedMin = starSpeed;
  var starSpeedMax = 200;
  var starDistance = 8000;
  var starRotation = 0;

  var backgroundColor = { r: 0, g: 0, b: 0, a: 0 };

  var colorInvertValue = 0;

  //---

  function clearImageData() {
    for (var i = 0, l = pix.length; i < l; i += 4) {
      pix[i] = backgroundColor.r;
      pix[i + 1] = backgroundColor.g;
      pix[i + 2] = backgroundColor.b;
      pix[i + 3] = backgroundColor.a;
    }
  }

  function setPixel(x, y, r, g, b, a) {
    var i = (x + y * canvasWidth) * 4;

    pix[i] = r;
    pix[i + 1] = g;
    pix[i + 2] = b;
    pix[i + 3] = a;
  }

  function setPixelAdditive(x, y, r, g, b, a) {
    var i = (x + y * canvasWidth) * 4;

    pix[i] = pix[i] + r;
    pix[i + 1] = pix[i + 1] + g;
    pix[i + 2] = pix[i + 2] + b;
    pix[i + 3] = a;
  }

  //---

  function drawLine(x1, y1, x2, y2, r, g, b, a) {
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);

    var sx = x1 < x2 ? 1 : -1;
    var sy = y1 < y2 ? 1 : -1;

    var err = dx - dy;

    var lx = x1;
    var ly = y1;

    while (true) {
      if (lx > 0 && lx < canvasWidth && ly > 0 && ly < canvasHeight) {
        setPixel(lx, ly, r, g, b, a);
      }

      if (lx === x2 && ly === y2) break;

      var e2 = 2 * err;

      if (e2 > -dx) {
        err -= dy;
        lx += sx;
      }

      if (e2 < dy) {
        err += dx;
        ly += sy;
      }
    }
  }

  //---

  function addParticle(x, y, z, ox, oy, oz) {
    var particle = {};
    particle.x = x;
    particle.y = y;
    particle.z = z;
    particle.ox = ox;
    particle.oy = oy;
    particle.x2d = 0;
    particle.y2d = 0;

    return particle;
  }

  function addParticles() {
    var i;

    var x, y, z;

    var colorValue;
    var particle;

    for (i = 0; i < starHolderCount / 3; i++) {
      x = Math.random() * 24000 - 12000;
      y = Math.random() * 4500 - 2250;
      z = Math.round(Math.random() * starDistance); //Math.random() * 700 - 350;

      colorValue = Math.floor(Math.random() * 55) + 5;

      particle = addParticle(x, y, z, x, y, z);
      particle.color = { r: colorValue, g: colorValue, b: colorValue, a: 255 };

      starBgHolder.push(particle);
    }

    for (i = 0; i < starHolderCount; i++) {
      x = Math.random() * 10000 - 5000;
      y = Math.random() * 10000 - 5000;
      z = Math.round(Math.random() * starDistance); //Math.random() * 700 - 350;

      colorValue = Math.floor(Math.random() * 155) + 100;

      particle = addParticle(x, y, z, x, y, z);
      particle.color = { r: colorValue, g: colorValue, b: colorValue, a: 255 };
      particle.oColor = { r: colorValue, g: colorValue, b: colorValue, a: 255 };
      particle.w = 1;
      particle.distance = starDistance - z;
      particle.distanceTotal = Math.round(starDistance + fov - particle.w);

      starHolder.push(particle);
    }
  }

  //---

  window.requestAnimFrame = (function () {
    console.log("requestAnimFrame");
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  function animloop() {
    animationID = requestAnimFrame(animloop);
    render();
  }

  function render() {
    clearImageData();

    //---

    var i, j, l, k, m, n;

    //---

    var rx, rz;

    var star;
    var scale;

    //---

    if (mouseActive) {
      starSpeed += 2;

      if (starSpeed > starSpeedMax) starSpeed = starSpeedMax;
    } else {
      starSpeed -= 1;

      if (starSpeed < starSpeedMin) starSpeed = starSpeedMin;
    }

    //---

    if (!mouseActive) {
      fov += 0.5;

      if (fov > fovMax) fov = fovMax;
    } else {
      fov -= 1;

      if (fov < fovMin) fov = fovMin;
    }

    //---

    var warpSpeedValue;

    if (mobile) {
      warpSpeedValue = starSpeed * (starSpeed / starSpeedMax);
    } else {
      warpSpeedValue = starSpeed * (starSpeed / (starSpeedMax / 2));
    }

    //---

    for (i = 0, l = starBgHolder.length; i < l; i++) {
      star = starBgHolder[i];

      scale = fov / (fov + star.z);

      star.x2d = star.x * scale + center.x;
      star.y2d = star.y * scale + center.y;

      if (
        star.x2d > 0 &&
        star.x2d < canvasWidth &&
        star.y2d > 0 &&
        star.y2d < canvasHeight
      ) {
        setPixel(
          star.x2d | 0,
          star.y2d | 0,
          star.color.r,
          star.color.g,
          star.color.b,
          255
        );
      }
    }

    //---

    for (i = 0, l = starHolder.length; i < l; i++) {
      star = starHolder[i];

      star.z -= starSpeed;
      star.distance += starSpeed;

      if (star.z < -fov + star.w) {
        star.z = starDistance;
        star.distance = 0;
      }

      //---
      //star color

      var distancePercent = star.distance / star.distanceTotal;

      star.color.r = Math.floor(star.oColor.r * distancePercent);
      star.color.g = Math.floor(star.oColor.g * distancePercent);
      star.color.b = Math.floor(star.oColor.b * distancePercent);

      //---
      //star draw

      scale = fov / (fov + star.z);

      star.x2d = star.x * scale + center.x;
      star.y2d = star.y * scale + center.y;

      if (
        star.x2d > 0 &&
        star.x2d < canvasWidth &&
        star.y2d > 0 &&
        star.y2d < canvasHeight
      ) {
        setPixelAdditive(
          star.x2d | 0,
          star.y2d | 0,
          star.color.r,
          star.color.g,
          star.color.b,
          255
        );
      }

      if (starSpeed != starSpeedMin) {
        var nz = star.z + warpSpeedValue;

        scale = fov / (fov + nz);

        var x2d = star.x * scale + center.x;
        var y2d = star.y * scale + center.y;

        if (x2d > 0 && x2d < canvasWidth && y2d > 0 && y2d < canvasHeight) {
          drawLine(
            star.x2d | 0,
            star.y2d | 0,
            x2d | 0,
            y2d | 0,
            star.color.r,
            star.color.g,
            star.color.b,
            255
          );
        }
      }

      if (mouseDown) {
        //rotation
        var radians = MATHPI180 * starRotation;

        var cos = Math.cos(radians);
        var sin = Math.sin(radians);

        (star.x =
          cos * (star.ox - center.x) + sin * (star.oy - center.y) + center.x),
          (star.y =
            cos * (star.oy - center.y) - sin * (star.ox - center.x) + center.y);
      }
    }

    //---

    ctx.putImageData(imageData, 0, 0);

    //---

    if (mouseActive) {
      center.x += (mousePos.x - center.x) * 0.015;
    } else {
      center.x += (canvas.width / 2 - center.x) * 0.015;
    }

    //---

    if (mouseDown) {
      starRotation -= 0.5;
    }
  }

  //---

  function mouseMoveHandler(event) {
    mousePos = getMousePos(canvas, event);
  }

  function mouseEnterHandler(event) {
    mouseActive = true;
  }

  function mouseLeaveHandler(event) {
    mouseActive = false;

    mouseDown = false;
  }

  function mouseDownHandler(event) {
    mouseDown = true;

    speed = 0;
  }

  function mouseUpHandler(event) {
    mouseDown = false;

    speed = 0.25;
  }

  //---

  function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();

    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  //---

  function touchStartHandler(event) {
    event.preventDefault();

    mouseDown = true;
    mouseActive = true;
  }

  function touchEndHandler(event) {
    event.preventDefault();

    mouseDown = false;
    mouseActive = false;
  }

  function touchMoveHandler(event) {
    event.preventDefault();

    mousePos = getTouchPos(canvas, event);
  }

  function touchCancelHandler(event) {
    mouseDown = false;
    mouseActive = false;
  }

  //---

  function getTouchPos(canvas, event) {
    var rect = canvas.getBoundingClientRect();

    return {
      x: event.touches[0].clientX - rect.left,
      y: event.touches[0].clientY - rect.top,
    };
  }

  //---

  addParticles();
  animloop();
}
