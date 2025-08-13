document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("benefitsModal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");

  // Define global showModal function 
  window.showModal = function(message) {
    modalContent.textContent = message;
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      // fallback for unsupported browsers
      modal.style.display = "block";
    }
  };

  // Close modal on clicking 'Close' button
  closeModal.addEventListener("click", () => {
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.style.display = "none";
    }
  });

  // Close modal if user clicks outside the dialog content (on backdrop)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      if (typeof modal.close === "function") {
        modal.close();
      } else {
        modal.style.display = "none";
      }
    }
  });

  // Optional: close modal with Escape key
  modal.addEventListener("cancel", (e) => {
    e.preventDefault(); // prevents default close if any
    modal.close();
  });
});
