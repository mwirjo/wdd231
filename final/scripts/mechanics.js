const dataUrl = 'data/features.json'; // path to your JSON file
const gridContainer = document.querySelector('.discover-grid');

fetch(dataUrl)
  .then(res => res.ok ? res.json() : Promise.reject('Failed to load features'))
  .then(features => {
    features.forEach(feature => {
      const card = document.createElement('article');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${feature.img}" alt="${feature.title}" width="300" height="300" loading="lazy">
        <h2>${feature.title}</h2>
        <p>${feature.desc}</p>
        <p><em>${feature.info}</em></p>
      `;

      gridContainer.appendChild(card);
    });
  })
  .catch(err => console.error(err));
