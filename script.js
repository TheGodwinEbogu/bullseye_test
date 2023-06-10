"use strict";
document.querySelector(".toggle-on").addEventListener("click", () => {
  document.querySelector(".toggle-on").style.display = "none";
  document.querySelector(".toggle-off").style.display = "block";
});

document.querySelector(".toggle-off").addEventListener("click", () => {
  document.querySelector(".toggle-on").style.display = "block";
  document.querySelector(".toggle-off").style.display = "none";
});
