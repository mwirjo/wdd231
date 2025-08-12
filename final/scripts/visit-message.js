const messageArea = document.getElementById('visit-message');

const today = Date.now();

const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
  messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const lastTime = Number(lastVisit);
  const msInDay = 1000 * 60 * 60 * 24;
  const daysBetween = Math.floor((today - lastTime) / msInDay);

  if (daysBetween < 1) {
    messageArea.textContent = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    messageArea.textContent = `You last visited 1 day ago.`;
  } else {
    messageArea.textContent = `You last visited ${daysBetween} days ago.`;
  }
}

localStorage.setItem('lastVisit', today);
