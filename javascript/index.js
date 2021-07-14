var lol

function weather(city) {
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f43223591fa77f00dda54c1439ff73ff`,
		"method": "GET",
	}


	$.ajax(settings).done(function (response) {
		lol = response;
		display(lol.main.temp, "date", "C*")
		display(lol.name, "country", "Country")
		display(lol.weather[0].main, "weather", "Climate")
	});

}

function display(lol, id, m) {
	document.getElementById(`${id}`).innerHTML = `${m}:${lol}`;
}

function formTemp() {
	let form = document.getElementById('form');
	name = document.getElementById('city').value
	document.getElementById('city').value = ""
	weather(name);
}

document.querySelector('.form')?.addEventListener('submit', e => {
  e.preventDefault();
  formTemp();
});
