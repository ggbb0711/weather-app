/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("\nfunction display_weather(weather){ \n    document.querySelector('.main-content').innerHTML='';\n    //get the curr date to get the weather for the next 3,6,9 hours\n    const dateobj=new Date().toISOString().split('T');\n    var curr_hour=Number(new Date().getHours());\n    const curr_time=`${dateobj[0]} ${(curr_hour-(curr_hour%3)<10)?'0'+(curr_hour-(curr_hour%3)):(curr_hour-(curr_hour%3))}:00:00`;\n    let i=0;\n    //get the weather curentlly\n    while(weather.list[i].dt_txt!==curr_time){ \n        i++;\n    }\n    var today_weather=document.createElement('div');\n    today_weather.classList.add('today-weather');\n    today_weather.innerHTML=\n`<div class=\"main-weather\">\n<h1>${weather.list[i].dt_txt.split(' ')[0]} forecast</h1>\n<ul>\n    <li>Time: ${to_ampm(weather.list[i].dt_txt.split(' ')[1])}</li>\n    <li>City: ${weather.city.name}</li>\n    <li>Weather: ${weather.list[i].weather[0].description}</li>\n    <li>Tempurature: ${weather.list[i].main.temp}°C/${((weather.list[i].main.temp*1.8)+32).toFixed(2)}°F</li>\n    <li>Humidity: ${weather.list[i].main.humidity}%</li>\n</ul>\n<img src=\"http://openweathermap.org/img/wn/${weather.list[i].weather[0].icon.slice(0,2)}d@4x.png\" alt=\"icon\">\n</div>\n<div class=\"today-forecast\">\n<div class=\"card\">\n    <h2>${weather.list[i+1].dt_txt.split(' ')[0]}</h2>\n    <img src=\"http://openweathermap.org/img/wn/${weather.list[i+1].weather[0].icon.slice(0,2)}d@4x.png\" alt=\"icon\">\n    <ul>\n        <li>Time: ${to_ampm(weather.list[i+1].dt_txt.split(' ')[1])}</li>\n        <li>Weather: ${weather.list[i+1].weather[0].description}</li>\n        <li>Tempurature: ${weather.list[i+1].main.temp}°C/${((weather.list[i+1].main.temp*1.8)+32).toFixed(2)}°F</li>\n        <li>Humidity: ${weather.list[i+1].main.humidity}%</li>\n    </ul>\n</div>\n<div class=\"card\">\n    <h2>${weather.list[i+2].dt_txt.split(' ')[0]}</h2>\n    <img src=\"http://openweathermap.org/img/wn/${weather.list[i+2].weather[0].icon.slice(0,2)}d@4x.png\" alt=\"icon\">\n    <ul>\n        <li>Time: ${to_ampm(weather.list[i+2].dt_txt.split(' ')[1])}</li>\n        <li>Weather: ${weather.list[i+2].weather[0].description}</li>\n        <li>Tempurature: ${weather.list[i+2].main.temp}°C/${((weather.list[i+2].main.temp*1.8)+32).toFixed(2)}°F</li>\n        <li>Humidity: ${weather.list[i+2].main.humidity}%</li>\n    </ul>\n</div>\n<div class=\"card\">\n    <h2>${weather.list[i+3].dt_txt.split(' ')[0]}</h2>\n    <img src=\"http://openweathermap.org/img/wn/${weather.list[i+3].weather[0].icon.slice(0,2)}d@4x.png\" alt=\"icon\">\n    <ul>\n        <li>Time: ${to_ampm(weather.list[i+3].dt_txt.split(' ')[1])}</li>\n        <li>Weather: ${weather.list[i+3].weather[0].description}</li>\n        <li>Tempurature: ${weather.list[i+3].main.temp}°C/${((weather.list[i+3].main.temp*1.8)+32).toFixed(2)}°F</li>\n        <li>Humidity: ${weather.list[i+3].main.humidity}%</li>\n    </ul>\n</div>\n</div>`;\n    document.querySelector('.main-content').appendChild(today_weather);\n    //get and display the next 5 days\n    var next_days=[];\n    i=0;\n    while (next_days.length<5){\n        if(weather.list[i].dt_txt.split(' ')[0]!==dateobj[0]){\n            next_days.push(i);\n            dateobj[0]=weather.list[i].dt_txt.split(' ')[0];\n        }\n        i++;\n    }\n    var forecast_weather=document.createElement('div');\n    forecast_weather.classList.add('forecast-weather');\n    forecast_weather.innerHTML=\n`<div class=\"card\">\n<h2>${weather.list[next_days[0]].dt_txt.split(' ')[0]}</h2>\n<img src=\"http://openweathermap.org/img/wn/${weather.list[next_days[0]].weather[0].icon.slice(0,2)}d@4x.png\" alt=\"icon\">\n<ul>\n    <li>Weather: ${weather.list[next_days[0]].weather[0].description}</li>\n    <li>Tempurature: ${weather.list[next_days[0]].main.temp}°C/${((weather.list[next_days[0]].main.temp*1.8)+32).toFixed(2)}°F</li>\n    <li>Humidity: ${weather.list[next_days[0]].main.humidity}%</li>\n</ul>\n</div>\n<div class=\"card\">\n<h2>${weather.list[next_days[1]].dt_txt.split(' ')[0]}</h2>\n<img src=\"http://openweathermap.org/img/wn/${weather.list[next_days[1]].weather[0].icon.slice(0,2)}d@4x.png\" alt=\"icon\">\n<ul>\n    <li>Weather: ${weather.list[next_days[1]].weather[0].description}</li>\n    <li>Tempurature: ${weather.list[next_days[1]].main.temp}°C/${((weather.list[next_days[1]].main.temp*1.8)+32).toFixed(2)}°F</li>\n    <li>Humidity: ${weather.list[next_days[1]].main.humidity}%</li>\n</ul>\n</div>\n<div class=\"card\">\n<h2>${weather.list[next_days[2]].dt_txt.split(' ')[0]}</h2>\n<img src=\"http://openweathermap.org/img/wn/${weather.list[next_days[2]].weather[0].icon.slice(0,2)}d@4x.png\" alt=\"icon\">\n<ul>\n    <li>Weather: ${weather.list[next_days[2]].weather[0].description}</li>\n    <li>Tempurature: ${weather.list[next_days[2]].main.temp}°C/${((weather.list[next_days[2]].main.temp*1.8)+32).toFixed(2)}°F</li>\n    <li>Humidity: ${weather.list[next_days[2]].main.humidity}%</li>\n</ul>\n</div>\n<div class=\"card\">\n<h2>${weather.list[next_days[3]].dt_txt.split(' ')[0]}</h2>\n<img src=\"http://openweathermap.org/img/wn/${weather.list[next_days[3]].weather[0].icon.slice(0,2)}d@4x.png\" alt=\"icon\">\n<ul>\n    <li>Weather: ${weather.list[next_days[3]].weather[0].description}</li>\n    <li>Tempurature: ${weather.list[next_days[3]].main.temp}°C/${((weather.list[next_days[3]].main.temp*1.8)+32).toFixed(2)}°F</li>\n    <li>Humidity: ${weather.list[next_days[3]].main.humidity}%</li>\n</ul>\n</div>\n<div class=\"card\">\n<h2>${weather.list[next_days[4]].dt_txt.split(' ')[0]}</h2>\n<img src=\"http://openweathermap.org/img/wn/${weather.list[next_days[4]].weather[0].icon.slice(0,2)}d@4x.png\" alt=\"icon\">\n<ul>\n    <li>Weather: ${weather.list[next_days[4]].weather[0].description}</li>\n    <li>Tempurature: ${weather.list[next_days[4]].main.temp}°C/${((weather.list[next_days[4]].main.temp*1.8)+32).toFixed(2)}°F</li>\n    <li>Humidity: ${weather.list[next_days[4]].main.humidity}%</li>\n</ul>\n</div>`\n    document.querySelector('.main-content').appendChild(forecast_weather);\n}\nfunction get_weather(city){\n    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${\"04382fca428cc76ef90e803dcaad42fe\"}&units=metric`)\n    .then(response =>{\n        if(response.ok){\n            return response.json()\n        }\n        else if(response.status===404){\n            document.querySelector('.err_txt').innerText='* Cannot find city'\n            throw 'error 404'\n        }\n        else{\n            throw 'error: ' + response.status\n        }\n    })\n    .then(value=>display_weather(value))\n    .catch(e=> console.log('error: ', e))\n}\ndocument.querySelector('#cityname').addEventListener('focus',()=>{\n    document.querySelector('.err_txt').innerText='';\n})\ndocument.querySelector('form').addEventListener('submit',e=>{\n    e.preventDefault();\n    get_weather(document.querySelector('#cityname').value);\n    document.querySelector('#cityname').value='';\n})\nfunction to_ampm(time){\n    var suffix = Number(time.slice(0,2)) >= 12 ? \"PM\":\"AM\";\n    var hours = `${((Number(time.slice(0,2)) + 11) % 12 + 1)}${time.slice(2,5)} ${suffix}`;\n    return hours\n}\n\n//# sourceURL=webpack://weather_app/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;