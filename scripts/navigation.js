document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("hide");

    // Toggle icon
    if (nav.classList.contains("hide")) {
      toggleButton.textContent = "☰"; // hamburger
    } else {
      toggleButton.textContent = "✖"; // close
    }
  });
});
