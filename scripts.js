/////////////////
var whole = document.getElementById("exit");
function hide() {
  for (i = 1; i <= 4; i++) {
    var showed = document.getElementById("photo" + i + "a");
    showed.classList.replace("visible", "image2");
  }
  var exit = document.getElementById("exit");
  exit.classList.replace("visiblex", "invisiblex");
}
whole.addEventListener("click", hide);
function show(number) {
  var showed = document.getElementById("photo" + number + "a");
  showed.classList.replace("image2", "visible");
  var exit = document.getElementById("exit");
  exit.classList.replace("invisiblex", "visiblex");
}
var photo1 = document.getElementById("photo1");
photo1.addEventListener("click", function () {
  show(1);
});
var photo2 = document.getElementById("photo2");
photo2.addEventListener("click", function () {
  show(2);
});
var photo3 = document.getElementById("photo3");
photo3.addEventListener("click", function () {
  show(3);
});
var photo4 = document.getElementById("photo4");
photo4.addEventListener("click", function () {
  show(4);
});
///////////
