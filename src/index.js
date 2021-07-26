let lol;
let $;

const display = (lol, id, m) => {
  document.getElementById(`${id}`).innerHTML = `${m}:${lol}`;
  if (document.getElementById('temps').checked && id === 'date') {
    lol = Math.round((lol * (9 / 5)) + 32);
    document.getElementById(`${id}`).innerHTML = `F: ${lol}`;
  }

  if (id === 'weather') {
    $('body').css('background-image', `url(img/${lol}.jpg)`);
  }
};

async function get(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f43223591fa77f00dda54c1439ff73ff`);
    if (response.ok) {
      const jsonData = await response.json();
      lol = jsonData;
      display(lol.main.temp, 'date', 'C*');
      display(lol.name, 'country', 'Country');
      display(lol.weather[0].main, 'weather', 'Climate');
    }
  } catch (error) {
    return (error);
  }
  return ('OK');
}

const formTemp = () => {
  const name = document.getElementById('city').value;
  document.getElementById('city').value = '';
  get(name);
};

document.querySelector('.form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  formTemp();
});
