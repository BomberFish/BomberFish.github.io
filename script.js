var rotate = 0;
document.getElementById("logo").addEventListener("click", function () {
  rotate -= 1440;
  document.getElementById("logo").style.transform = "rotate(" + rotate + "deg)";
});
