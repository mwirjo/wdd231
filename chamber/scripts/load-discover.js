const dataUrl = 'data/discover-data.json';
const gridContainer = document.querySelector('.discover-grid');

fetch(dataUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Could not load JSON data.');
    }
    return response.json();
  })
  .then(data => {
    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.gridArea = `card${index + 1}`;

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;

      gridContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading discover data:', error);
  });
