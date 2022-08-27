const navColorChange = document.getElementById("nav");
window.addEventListener("scroll", function () {
  const windowHeight = window.pageYOffset || document.documentElement.windowHeight;
  if (windowHeight <= 40) {
    navColorChange.style.background = "transparent";
  } else if (windowHeight <= 800) {
    navColorChange.style.background = "#0f0f0f";
  }
});
