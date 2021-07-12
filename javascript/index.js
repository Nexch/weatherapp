var weather = 'lol';
document.getElementById('date').innerHTML = new Date().toDateString();

const response = fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=f43223591fa77f00dda54c1439ff73ff');

response.then((json => {
          console.log(json.json());
				window.weather = json;
     })
)
