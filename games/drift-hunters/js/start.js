var gameInstance = UnityLoader.instantiate("game", "./unity/drift_hunters.json", {onProgress: UnityProgress});
document.getElementsByClassName('fullscreen')[0].addEventListener('click', () => {
  gameInstance.SetFullscreen(1)
});