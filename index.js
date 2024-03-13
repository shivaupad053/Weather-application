document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.querySelector('#search-button');

  searchButton.addEventListener('click', function() {
    const searchInput = document.querySelector('#search-bar');
    const cityName = searchInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=83ea2a0e67f492968519be9d55df9140`)
      .then(function(resp) { return resp.json() })
      .then(function(data) {
          console.log(data);
          document.querySelector('.city').textContent = `Weather in ${data.name}`;
          document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg;C`;
          document.querySelector('.description').textContent = data.weather[0]['description'];
          document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
          document.querySelector('.wind').textContent = `Wind speed: ${data.wind.speed} km/h`;
      })
      .catch(function(error) {
          console.log(error);
      });
  });
});
