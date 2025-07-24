document.addEventListener("DOMContentLoaded", async () => {
  const apiKey = '9f7910d3ac8f43313fb10c6f8986177e';
  const lat = 5.8111; // Wanica
  const lon = -55.2333;

  try {
    // Current Weather
    const currentRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    const currentData = await currentRes.json();
    document.getElementById("description").textContent = currentData.weather[0].description;
    document.getElementById("temperature").textContent = `🌡️ ${currentData.main.temp}°C`;

    // 3-Day Forecast
    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    const forecastData = await forecastRes.json();

    // Get one forecast per day around noon
    const dailyForecasts = forecastData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    const forecastContainer = document.getElementById("forecastList");
    forecastContainer.innerHTML = ""; // Clear previous entries

    dailyForecasts.forEach(day => {
      const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      const temp = `${day.main.temp}°C`;
      const desc = day.weather[0].description;

      const li = document.createElement("li");
      li.textContent = `${date}: ${temp}, ${desc}`;
      forecastContainer.appendChild(li);
    });

  } catch (err) {
    console.error(err);
    document.getElementById("description").textContent = "Error loading weather.";
  }
});
