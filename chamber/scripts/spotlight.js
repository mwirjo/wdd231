async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Filter for Silver (2) or Gold (3) members
    const goldSilver = data.filter(m => m.membership === 2 || m.membership === 3);

    // Randomly select 2 or 3 members
    const count = Math.floor(Math.random() * 2) + 2; // gives 2 or 3
    const selected = goldSilver.sort(() => 0.5 - Math.random()).slice(0, count);

    const container = document.getElementById("spotlightCards");
    if (!container) {
      console.error("Element with id 'spotlightCards' not found.");
      return;
    }

    container.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${member.name}</h3>
        <p class="level">${member.membership === 3 ? "Gold" : "Silver"}</p>
        <div class="divider"></div>
        <div class="card-content">
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" width="100" height="100">
            <div class"contact-info">
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
            </div>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load spotlight members:", error);
  }
}

loadSpotlights();
