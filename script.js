document.getElementById("1").addEventListener("click", function () {
  document.getElementById("rect1").className = "rectangle active";
  document.getElementById("rect2").className = "rectangle";
  document.getElementById("rect3").className = "rectangle";
  document.getElementById("rect4").className = "rectangle";
  document.getElementById("body").style.backgroundImage =
    "url(assets/modern-house.png)";
  document.querySelector(".normal").textContent = "Cennet Koyu";
  document.querySelector(".bold").textContent = "Modern House";
  document.querySelector(".year").textContent = "2018";
  document.querySelector(".work").textContent = "Exterior Design";
});

document.getElementById("2").addEventListener("click", function () {
  document.getElementById("rect1").className = "rectangle";
  document.getElementById("rect2").className = "rectangle active";
  document.getElementById("rect3").className = "rectangle";
  document.getElementById("rect4").className = "rectangle";
  document.getElementById("body").style.backgroundImage =
    "url(assets/swissotel.png)";
  document.querySelector(".normal").textContent = "SwissOtel";
  document.querySelector(".bold").textContent = "Bodrum Beach Room";
  document.querySelector(".year").textContent = "2015";
  document.querySelector(".work").textContent = "Interior Design";
});

document.getElementById("3").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("rect1").className = "rectangle";
    document.getElementById("rect2").className = "rectangle";
    document.getElementById("rect3").className = "rectangle active";
    document.getElementById("rect4").className = "rectangle";
    document.getElementById("body").style.backgroundImage =
      "url(assets/gundogan.png)";
    document.querySelector(".normal").textContent = "OXA";
    document.querySelector(".bold").textContent = "Gündoğan Houses";
    document.querySelector(".year").textContent = "2017";
    document.querySelector(".work").textContent = "Interior & Exterior Design";
  }, 100);
});

document.getElementById("4").addEventListener("click", function () {
  document.getElementById("rect1").className = "rectangle";
  document.getElementById("rect2").className = "rectangle";
  document.getElementById("rect3").className = "rectangle";
  document.getElementById("rect4").className = "rectangle active";
  document.getElementById("body").style.backgroundImage =
    "url(assets/stone-house.png)";
  document.querySelector(".normal").textContent = "Cennet Koyu";
  document.querySelector(".bold").textContent = "Stone House";
  document.querySelector(".year").textContent = "2018";
  document.querySelector(".work").textContent = "Exterior Design";
});
