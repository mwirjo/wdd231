document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const get = (name) => params.get(name) || "N/A";

  document.getElementById("fname").textContent = get("fname");
  document.getElementById("lname").textContent = get("lname");
  document.getElementById("email").textContent = get("email");
  document.getElementById("phone").textContent = get("phone");
  document.getElementById("business").textContent = get("business");

  const timestamp = get("timestamp");
  const date = timestamp !== "N/A" ? new Date(timestamp).toLocaleString() : "N/A";
  document.getElementById("timestamp").textContent = date;
});
