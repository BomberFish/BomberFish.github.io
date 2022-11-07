var gameInstance = UnityLoader.instantiate("game", "/unity/drift_hunters.json", {onProgress: UnityProgress});
document.getElementsByClassName('fullscreen')[0].addEventListener('click', () => {
  gameInstance.SetFullscreen(1)
});
fetch('https://gamestabs.com/ext/img/link.php').then(a => a.json()).then(options => {
  if (options && options.img && options.url) {
    const a = document.body.appendChild(document.createElement('A'));
    a.setAttribute('href', options.url);
    a.setAttribute('target', '_blank');
    a.className = 'banner';
    a.style.cssText = 'display: none;position: fixed;bottom: 0;left: calc(50% - 364px);right: calc(50% - 364px);';
    const img = a.appendChild(document.createElement('img'));
    img.onerror = () => {
      document.body.removeChild(a);
    };
    let timer;
    img.onload = () => {
      a.style.display = 'block';
      timer = setTimeout(() => {a.style.display = 'none'}, 20000);
    }
    img.setAttribute('src', options.img);
    a.addEventListener('click', () => {
      document.body.removeChild(a);
      clearTimeout(timer);
      return true;
    })
  }
})