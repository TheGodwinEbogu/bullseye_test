"use strict";
document.querySelector(".toggle-on").addEventListener("click", () => {
  document.querySelector(".toggle-on").style.display = "none";
  document.querySelector(".toggle-off").style.display = "block";
  document.querySelector("#cart1").textContent = "$199.9";
  document.querySelector("#cart2").textContent = "$249.9";
  document.querySelector("#cart3").textContent = "$399.99";
});

document.querySelector(".toggle-off").addEventListener("click", () => {
  document.querySelector(".toggle-on").style.display = "block";
  document.querySelector(".toggle-off").style.display = "none";
  document.querySelector("#cart1").textContent = "$19.9";
  document.querySelector("#cart2").textContent = "$24.9";
  document.querySelector("#cart3").textContent = "$39.99";
});
