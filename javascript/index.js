let lol;

function display(lol, id, m) {
  document.getElementById(`${id}`).innerHTML = `${m}:${lol}`;
}

function weather(city) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f43223591fa77f00dda54c1439ff73ff`,
    method: 'GET',
  };

  $.ajax(settings).done((response) => {
    lol = response;
    display(lol.main.temp, 'date', 'C*');
    display(lol.name, 'country', 'Country');
    display(lol.weather[0].main, 'weather', 'Climate');
  });
}

function formTemp() {
  const name = document.getElementById('city').value;
  document.getElementById('city').value = '';
  weather(name);
}

document.querySelector('.form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  formTemp();
});
