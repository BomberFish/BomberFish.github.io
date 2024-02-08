if (
  document.querySelector("html").attributes["data-darkreader-scheme"] !==
    undefined ||
  document.querySelector("html").attributes["data-darkreader-mode"] !==
    undefined
) {
  alert(
    "Hi!!! It looks like you're using Dark Reader. Sadly, it messes with my epic styling. If you could disable it for this site, that would be great. Thanks!"
  );
}

var vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
var vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

document.body.addEventListener("resize", function () {
  warpDeinit();
  warpInit();
  vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  if (vw < vh) {
    document.getElementById("sidebar").classList.add("collapsed");
    updateCollapser();
  }
});

if (vw < vh) {
  document.getElementById("sidebar").classList.add("collapsed");
  updateCollapser();
}

const spans = document.querySelectorAll("#header span");
spans.forEach((span, index) => {
  span.style.animationDelay = `${index * 0.075}s`;
});

function warp() {
  let checkbox = document.querySelector("#warp");
  let checkboxValue = checkbox.checked ? checkbox.value : null;
  if (checkboxValue === "on") {
    console.log("Engage.");
    warpInit();
    document.getElementById("holder").classList.remove("hidden");
  } else {
    warpDeinit();
    document.getElementById("holder").classList.add("hidden");
    console.log("Warp drive disengaged.");
  }
}

const navLinks = document.querySelectorAll("nav a");
const iframe = document.getElementById("frame");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    iframe.src = this.href;
    // iframe.style.height = (iframe.contentWindow.document.body.scrollHeight + 40) + "px";
  });
});

function updateCollapser() {
  const collapser = document.getElementById("collapser");
  if (document.getElementById("sidebar").classList.contains("collapsed")) {
    collapser.innerHTML = ">>";
  } else {
    collapser.innerHTML = "<<";
  }
}


// Selecting the iframe element
var frames = document.querySelectorAll("iframe");

frames.forEach((frame) => {
  // Adjusting the iframe height onload event
  frame.onload = function () // function execute while load the iframe
  {
    // set the height of the iframe as
    // the height of the iframe content
    frame.style.height = (frame.contentWindow.document.body.scrollHeight + 10) + "px";

  };
});
