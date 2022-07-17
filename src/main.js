
function display_weather(weather){ 
    document.querySelector('.main-content').innerHTML='';
    //get the curr date to get the weather for the next 3,6,9 hours
    const dateobj=new Date().toISOString().split('T');
    var curr_hour=Number(new Date().getHours());
    const curr_time=`${dateobj[0]} ${(curr_hour-(curr_hour%3)<10)?'0'+(curr_hour-(curr_hour%3)):(curr_hour-(curr_hour%3))}:00:00`;
    let i=0;
    //get the weather curentlly
    while(weather.list[i].dt_txt!==curr_time){ 
        i++;
    }
    var today_weather=document.createElement('div');
    today_weather.classList.add('today-weather');
    today_weather.innerHTML=
`<div class="main-weather">
<h1>${weather.list[i].dt_txt.split(' ')[0]} forecast</h1>
<ul>
    <li>Time: ${to_ampm(weather.list[i].dt_txt.split(' ')[1])}</li>
    <li>City: ${weather.city.name}</li>
    <li>Weather: ${weather.list[i].weather[0].description}</li>
    <li>Tempurature: ${weather.list[i].main.temp}°C/${((weather.list[i].main.temp*1.8)+32).toFixed(2)}°F</li>
    <li>Humidity: ${weather.list[i].main.humidity}%</li>
</ul>
<img src="http://openweathermap.org/img/wn/${weather.list[i].weather[0].icon.slice(0,2)}d@4x.png" alt="icon">
</div>
<div class="today-forecast">
<div class="card">
    <h2>${weather.list[i+1].dt_txt.split(' ')[0]}</h2>
    <img src="http://openweathermap.org/img/wn/${weather.list[i+1].weather[0].icon.slice(0,2)}d@4x.png" alt="icon">
    <ul>
        <li>Time: ${to_ampm(weather.list[i+1].dt_txt.split(' ')[1])}</li>
        <li>Weather: ${weather.list[i+1].weather[0].description}</li>
        <li>Tempurature: ${weather.list[i+1].main.temp}°C/${((weather.list[i+1].main.temp*1.8)+32).toFixed(2)}°F</li>
        <li>Humidity: ${weather.list[i+1].main.humidity}%</li>
    </ul>
</div>
<div class="card">
    <h2>${weather.list[i+2].dt_txt.split(' ')[0]}</h2>
    <img src="http://openweathermap.org/img/wn/${weather.list[i+2].weather[0].icon.slice(0,2)}d@4x.png" alt="icon">
    <ul>
        <li>Time: ${to_ampm(weather.list[i+2].dt_txt.split(' ')[1])}</li>
        <li>Weather: ${weather.list[i+2].weather[0].description}</li>
        <li>Tempurature: ${weather.list[i+2].main.temp}°C/${((weather.list[i+2].main.temp*1.8)+32).toFixed(2)}°F</li>
        <li>Humidity: ${weather.list[i+2].main.humidity}%</li>
    </ul>
</div>
<div class="card">
    <h2>${weather.list[i+3].dt_txt.split(' ')[0]}</h2>
    <img src="http://openweathermap.org/img/wn/${weather.list[i+3].weather[0].icon.slice(0,2)}d@4x.png" alt="icon">
    <ul>
        <li>Time: ${to_ampm(weather.list[i+3].dt_txt.split(' ')[1])}</li>
        <li>Weather: ${weather.list[i+3].weather[0].description}</li>
        <li>Tempurature: ${weather.list[i+3].main.temp}°C/${((weather.list[i+3].main.temp*1.8)+32).toFixed(2)}°F</li>
        <li>Humidity: ${weather.list[i+3].main.humidity}%</li>
    </ul>
</div>
</div>`;
    document.querySelector('.main-content').appendChild(today_weather);
    //get and display the next 5 days
    var next_days=[];
    i=0;
    while (next_days.length<5){
        if(weather.list[i].dt_txt.split(' ')[0]!==dateobj[0]){
            next_days.push(i);
            dateobj[0]=weather.list[i].dt_txt.split(' ')[0];
        }
        i++;
    }
    var forecast_weather=document.createElement('div');
    forecast_weather.classList.add('forecast-weather');
    forecast_weather.innerHTML=
`<div class="card">
<h2>${weather.list[next_days[0]].dt_txt.split(' ')[0]}</h2>
<img src="http://openweathermap.org/img/wn/${weather.list[next_days[0]].weather[0].icon.slice(0,2)}d@4x.png" alt="icon">
<ul>
    <li>Weather: ${weather.list[next_days[0]].weather[0].description}</li>
    <li>Tempurature: ${weather.list[next_days[0]].main.temp}°C/${((weather.list[next_days[0]].main.temp*1.8)+32).toFixed(2)}°F</li>
    <li>Humidity: ${weather.list[next_days[0]].main.humidity}%</li>
</ul>
</div>
<div class="card">
<h2>${weather.list[next_days[1]].dt_txt.split(' ')[0]}</h2>
<img src="http://openweathermap.org/img/wn/${weather.list[next_days[1]].weather[0].icon.slice(0,2)}d@4x.png" alt="icon">
<ul>
    <li>Weather: ${weather.list[next_days[1]].weather[0].description}</li>
    <li>Tempurature: ${weather.list[next_days[1]].main.temp}°C/${((weather.list[next_days[1]].main.temp*1.8)+32).toFixed(2)}°F</li>
    <li>Humidity: ${weather.list[next_days[1]].main.humidity}%</li>
</ul>
</div>
<div class="card">
<h2>${weather.list[next_days[2]].dt_txt.split(' ')[0]}</h2>
<img src="http://openweathermap.org/img/wn/${weather.list[next_days[2]].weather[0].icon.slice(0,2)}d@4x.png" alt="icon">
<ul>
    <li>Weather: ${weather.list[next_days[2]].weather[0].description}</li>
    <li>Tempurature: ${weather.list[next_days[2]].main.temp}°C/${((weather.list[next_days[2]].main.temp*1.8)+32).toFixed(2)}°F</li>
    <li>Humidity: ${weather.list[next_days[2]].main.humidity}%</li>
</ul>
</div>
<div class="card">
<h2>${weather.list[next_days[3]].dt_txt.split(' ')[0]}</h2>
<img src="http://openweathermap.org/img/wn/${weather.list[next_days[3]].weather[0].icon.slice(0,2)}d@4x.png" alt="icon">
<ul>
    <li>Weather: ${weather.list[next_days[3]].weather[0].description}</li>
    <li>Tempurature: ${weather.list[next_days[3]].main.temp}°C/${((weather.list[next_days[3]].main.temp*1.8)+32).toFixed(2)}°F</li>
    <li>Humidity: ${weather.list[next_days[3]].main.humidity}%</li>
</ul>
</div>
<div class="card">
<h2>${weather.list[next_days[4]].dt_txt.split(' ')[0]}</h2>
<img src="http://openweathermap.org/img/wn/${weather.list[next_days[4]].weather[0].icon.slice(0,2)}d@4x.png" alt="icon">
<ul>
    <li>Weather: ${weather.list[next_days[4]].weather[0].description}</li>
    <li>Tempurature: ${weather.list[next_days[4]].main.temp}°C/${((weather.list[next_days[4]].main.temp*1.8)+32).toFixed(2)}°F</li>
    <li>Humidity: ${weather.list[next_days[4]].main.humidity}%</li>
</ul>
</div>`
    document.querySelector('.main-content').appendChild(forecast_weather);
}
function get_weather(city){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}&units=metric`)
    .then(response =>{
        if(response.ok){
            return response.json()
        }
        else if(response.status===404){
            document.querySelector('.err_txt').innerText='* Cannot find city'
            throw 'error 404'
        }
        else{
            throw 'error: ' + response.status
        }
    })
    .then(value=>display_weather(value))
    .catch(e=> console.log('error: ', e))
}
document.querySelector('#cityname').addEventListener('focus',()=>{
    document.querySelector('.err_txt').innerText='';
})
document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    get_weather(document.querySelector('#cityname').value);
    document.querySelector('#cityname').value='';
})
function to_ampm(time){
    var suffix = Number(time.slice(0,2)) >= 12 ? "PM":"AM";
    var hours = `${((Number(time.slice(0,2)) + 11) % 12 + 1)}${time.slice(2,5)} ${suffix}`;
    return hours
}