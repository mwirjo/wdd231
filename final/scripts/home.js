async function loadHomeContent() {
  try {
    const response = await fetch('data/home.json');
    if (!response.ok) throw new Error('Network error');

    const data = await response.json();

    // Why Cybertron Section
    const whyTextBlock = document.querySelector('#why-cybertron .text-block');
    whyTextBlock.innerHTML = `
      <p>${data.whyCybertron.description}</p>
      <ul>
        ${data.whyCybertron.benefits.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;

    // About Cybertron Section
    const aboutTextBlock = document.querySelector('#about-cybertron .text-block');
    aboutTextBlock.innerHTML = `<p>${data.aboutCybertron.description}</p>`;

  } catch (error) {
    console.error('Error loading content:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadHomeContent);
