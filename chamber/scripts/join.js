// Timestamp hidden input
document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  document.getElementById("timestamp").value = now.toISOString();

  const modal = document.getElementById("benefitsModal");
  const closeBtn = document.getElementById("closeModal");

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
});

function showModal(message) {
  const modal = document.getElementById("benefitsModal");
  document.getElementById("modalContent").textContent = message;
  modal.showModal();
}
