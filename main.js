var btn = document.getElementsByTagName("button")[0];
var img, src;

btn.addEventListener("click", function () {
  src = "gif/" + randomNum(1, 17) + ".gif";
  img = document.getElementsByTagName("img")[0].setAttribute("src", src);
});

function randomNum(min, max) {
  var num = min - 0.5 + Math.random() * (max - min + 1)
  num = Math.round(num);
  return num;
}