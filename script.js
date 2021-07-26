const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const normal = document.querySelector(".normal");
const bold = document.querySelector(".bold");
const year = document.querySelector(".year");
const work = document.querySelector(".work");
const rect1 = document.getElementById("rect1");
const rect2 = document.getElementById("rect2");
const rect3 = document.getElementById("rect3");
const rect4 = document.getElementById("rect4");
const body = document.getElementById("body");

document.getElementById("1").addEventListener("click", function () {
  rect1.className = "rectangle active";
  rect2.className = "rectangle";
  rect3.className = "rectangle";
  rect4.className = "rectangle";
  body.style.backgroundImage = "url(assets/modern-house.png)";
  normal.textContent = "Cennet Koyu";
  bold.textContent = "Modern House";
  year.textContent = "2018";
  work.textContent = "Exterior Design";
});

document.getElementById("2").addEventListener("click", function () {
  rect1.className = "rectangle";
  rect2.className = "rectangle active";
  rect3.className = "rectangle";
  rect4.className = "rectangle";
  body.style.backgroundImage = "url(assets/swissotel.png)";
  normal.textContent = "SwissOtel";
  bold.textContent = "Bodrum Beach Room";
  year.textContent = "2015";
  work.textContent = "Interior Design";
});

document.getElementById("3").addEventListener("click", function () {
  rect1.className = "rectangle";
  rect2.className = "rectangle";
  rect3.className = "rectangle active";
  rect4.className = "rectangle";
  body.style.backgroundImage = "url(assets/gundogan.png)";
  normal.textContent = "OXA";
  bold.textContent = "Gündoğan Houses";
  year.textContent = "2017";
  work.textContent = "Interior & Exterior Design";
});

document.getElementById("4").addEventListener("click", function () {
  rect1.className = "rectangle";
  rect2.className = "rectangle";
  rect3.className = "rectangle";
  rect4.className = "rectangle active";
  body.style.backgroundImage = "url(assets/stone-house.png)";
  normal.textContent = "Cennet Koyu";
  bold.textContent = "Stone House";
  year.textContent = "2018";
  work.textContent = "Exterior Design";
});

hamburger.addEventListener("click", function () {
  menu.style.display = "block";
  hamburger.style.display = "none";
  body.style.overflow = "hidden"
});

close.addEventListener("click", function () {
  menu.style.display = "none";
  hamburger.style.display = "block";
  body.style.overflowY = "scroll"

});
