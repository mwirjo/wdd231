const dataUrl = 'data/discover-data.json';
const gridContainer = document.querySelector('.discover-grid');

// Fetch JSON and append cards (excluding first, which is hardcoded)
fetch(dataUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Could not load JSON data.');
    }
    return response.json();
  })
  .then(data => {
    // Skip the first entry if it matches the hardcoded card
    const rest = data.slice(1);

    rest.forEach((item, index) => {
      const card = document.createElement('article');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="300" height="200" loading="lazy">
        <h2>${item.name}</h2>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>  <!-- This line adds the button -->
      `;

      gridContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading discover data:', error);
  });
