let lol;

const display = (lol, id, m) => {
  document.getElementById(`${id}`).innerHTML = `${m}:${lol}`;
  const temp = document.getElementById('temps').value;
  if (temp === 'F' && id === 'date') {
    lol = Math.round((lol * (9 / 5)) + 32);
    document.getElementById(`${id}`).innerHTML = `F: ${lol}`;
  }

  if (id === 'weather') {
    $('body').css('background-image', `url(img/${lol}.jpg)`);
  }
};

const weather = (city) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f43223591fa77f00dda54c1439ff73ff`,
    method: 'GET',
    error(xhr, status, error) {
      const errorMessage = `${xhr.status}: ${xhr.statusText}`;
      display(`Error - ${errorMessage}`, 'error', '');
    },
  };

  $.ajax(settings).done((response) => {
    lol = response;
    display(lol.main.temp, 'date', 'C*');
    display(lol.name, 'country', 'Country');
    display(lol.weather[0].main, 'weather', 'Climate');
  });
};

const formTemp = () => {
  const name = document.getElementById('city').value;
  document.getElementById('city').value = '';
  weather(name);
};

document.querySelector('.form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  formTemp();
});
