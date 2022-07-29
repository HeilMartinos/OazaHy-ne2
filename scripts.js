var przycisk1 = document.querySelector("#unv1");
var przycisk2 = document.querySelector("#unv2");
var przycisk3 = document.querySelector("#unv3");

var wysuwane1 = document.querySelector("#el1");
var wysuwane2 = document.querySelector("#el2");
var wysuwane3 = document.querySelector("#el3");

przycisk1.addEventListener("change", function () {
  if (this.checked) {
    wysun1();
  } else {
    schowaj1();
  }
});
przycisk2.addEventListener("change", function () {
  if (this.checked) {
    wysun2();
  } else {
    schowaj2();
  }
});
przycisk3.addEventListener("change", function () {
  if (this.checked) {
    wysun3();
  } else {
    schowaj3();
  }
});

function wysun1() {
  wysuwane1.classList.add("unveiled");
}
function wysun2() {
  wysuwane2.classList.add("unveiled");
}
function wysun3() {
  wysuwane3.classList.add("unveiled");
}

function schowaj1() {
  wysuwane1.classList.remove("unveiled");
}
function schowaj2() {
  wysuwane2.classList.remove("unveiled");
}
function schowaj3() {
  wysuwane3.classList.remove("unveiled");
}
