// scripts/date.js

document.addEventListener("DOMContentLoaded", () => {
  // Dynamically display current year
  const yearSpan = document.getElementById("year");
  const now = new Date();
  yearSpan.textContent = now.getFullYear();

  // Display last modified date
  const lastMod = document.getElementById("lastModified");
  lastMod.textContent = `Last Modification: ${document.lastModified}`;
});