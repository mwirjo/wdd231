// scripts/navigation.js

// Optional: Add hamburger toggle if required later
// Currently not shown in your screenshot layout, but here's a simple handler:

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
