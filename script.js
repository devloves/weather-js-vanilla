const input_text = document.getElementById('input-text');
const submit = document.getElementById('submit');
const city = document.querySelector('.name');
const temprature = document.querySelector('.temp');
const wrng = document.getElementById('wrong');
const addidata = document.querySelector('.desc');

function weatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input_text.value + '&appid=f670cd60c54c18b3edfa49d0f30c1a88&units=metric')
        .then(response => response.json())
        .then(data => {
            const cityname = data.name;
            const cityTemp = data.main.temp;
            const description = data.weather[0].main;

            temprature.innerHTML = cityTemp + '°';
            city.innerHTML = cityname;
            addidata.innerHTML = description
  			if (cityTemp <= 30) {
    			document.body.style.background = "#3282b8"; 
  			} else {
    			document.body.style.background = "#e43f5a"; 
  			}
        })

        .catch(err => console.log('Wrong City'));
}
// Event Listeners
submit.addEventListener('click', weatherData);