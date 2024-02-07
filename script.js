var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

document.body.addEventListener('resize', function() {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if (vw < vh) {
        document.getElementById("sidebar").classList.add("collapsed");
        updateCollapser();
    }
});

if (vw < vh) {
    document.getElementById("sidebar").classList.add("collapsed");
    updateCollapser();
}

const spans = document.querySelectorAll('#header span');
spans.forEach((span, index) => {
  span.style.animationDelay = `${index * 0.075}s`;
});

function warp() {
    let checkbox = document.querySelector('#warp');
    let checkboxValue = checkbox.checked ? checkbox.value : null;
    if (checkboxValue === "on") {
        console.log("Warp speed, captain!")
        warpInit();
        document.getElementById("holder").classList.remove('hidden')
    } else {
        console.log("Warp drive disengaged.")
        warpDeinit();
        document.getElementById("holder").classList.add('hidden')
    }
}

const navLinks = document.querySelectorAll('nav a');
const iframe = document.getElementById('frame');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    iframe.src = this.href;
  });
});

function updateCollapser() {
    const collapser = document.getElementById('collapser');
    if (document.getElementById("sidebar").classList.contains("collapsed")) {
        collapser.innerHTML = ">>";
    } else {
        collapser.innerHTML = "<<";
    }
}