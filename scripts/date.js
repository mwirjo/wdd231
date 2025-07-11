document.addEventListener('DOMContentLoaded', () => {
  // Current year in footer
  const currentYearSpan = document.getElementById('currentYear');
  currentYearSpan.textContent = new Date().getFullYear();

  // Last modified date
  const lastModifiedP = document.getElementById('lastModified');
  lastModifiedP.textContent = 'Last Modified: ' + document.lastModified;
});

