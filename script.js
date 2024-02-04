const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb726dbef8mshedb8e0db6889aa8p1f3a58jsnef61a60fc101',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(Response => Response.json())
.then((Response) => {
	console.log(Response)
	cloud_pct.innerHTML = Response.cloud_pct
	temp.innerHTML = Response.temp
	temp2.innerHTML = Response.temp
	feels_like.innerHTML = Response.feels_like
	humidity.innerHTML = Response.humidity
	humidity2.innerHTML = Response.humidity
	min_temp.innerHTML = Response.min_temp
	max_temp.innerHTML = Response.max_temp
	wind_speed.innerHTML = Response.wind_speed
	wind_speed2.innerHTML = Response.wind_speed
	sunrise.innerHTML = Response.sunrise
	sunset.innerHTML = Response.sunset
})
.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
.then(Response => Response.json())
.then((Response) => {
	console.log(Response)
	cloud_pct1.innerHTML = Response.cloud_pct
	temp1.innerHTML = Response.temp
	feels_like1.innerHTML = Response.feels_like
	humidity1.innerHTML = Response.humidity
	min_temp1.innerHTML = Response.min_temp
	max_temp1.innerHTML = Response.max_temp
	wind_speed1.innerHTML = Response.wind_speed
	sunrise1.innerHTML = Response.sunrise
	sunset1.innerHTML = Response.sunset
	wind_degrees1.innerHTML = Response.wind_degrees
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
.then(Response => Response.json())
.then((Response) => {
	console.log(Response)
	cloud_pct2.innerHTML = Response.cloud_pct
	temp3.innerHTML = Response.temp
	feels_like2.innerHTML = Response.feels_like
	humidity3.innerHTML = Response.humidity
	min_temp2.innerHTML = Response.min_temp
	max_temp2.innerHTML = Response.max_temp
	wind_speed3.innerHTML = Response.wind_speed
	sunrise2.innerHTML = Response.sunrise
	sunset2.innerHTML = Response.sunset
	wind_degrees2.innerHTML = Response.wind_degrees

})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
.then(Response => Response.json())
.then((Response) => {
	console.log(Response)
	cloud_pct3.innerHTML = Response.cloud_pct
	temp4.innerHTML = Response.temp
	feels_like3.innerHTML = Response.feels_like
	humidity4.innerHTML = Response.humidity
	min_temp3.innerHTML = Response.min_temp
	max_temp3.innerHTML = Response.max_temp
	wind_speed4.innerHTML = Response.wind_speed
	sunrise3.innerHTML = Response.sunrise
	sunset3.innerHTML = Response.sunset
	wind_degrees3.innerHTML = Response.wind_degrees

})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
.then(Response => Response.json())
.then((Response) => {
	console.log(Response)
	cloud_pct4.innerHTML = Response.cloud_pct
	temp5.innerHTML = Response.temp
	feels_like4.innerHTML = Response.feels_like
	humidity5.innerHTML = Response.humidity
	min_temp4.innerHTML = Response.min_temp
	max_temp4.innerHTML = Response.max_temp
	wind_speed5.innerHTML = Response.wind_speed
	sunrise4.innerHTML = Response.sunrise
	sunset4.innerHTML = Response.sunset
	wind_degrees4.innerHTML = Response.wind_degrees

})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New+York', options)
.then(Response => Response.json())
.then((Response) => {
	console.log(Response)
	cloud_pct5.innerHTML = Response.cloud_pct
	temp6.innerHTML = Response.temp
	feels_like5.innerHTML = Response.feels_like
	humidity6.innerHTML = Response.humidity
	min_temp5.innerHTML = Response.min_temp
	max_temp5.innerHTML = Response.max_temp
	wind_speed6.innerHTML = Response.wind_speed
	sunrise5.innerHTML = Response.sunrise
	sunset5.innerHTML = Response.sunset
	wind_degrees5.innerHTML = Response.wind_degrees

})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Amsterdam', options)
.then(Response => Response.json())
.then((Response) => {
	console.log(Response)
	cloud_pct6.innerHTML = Response.cloud_pct
	temp7.innerHTML = Response.temp
	feels_like6.innerHTML = Response.feels_like
	humidity7.innerHTML = Response.humidity
	min_temp6.innerHTML = Response.min_temp
	max_temp6.innerHTML = Response.max_temp
	wind_speed7.innerHTML = Response.wind_speed
	sunrise6.innerHTML = Response.sunrise
	sunset6.innerHTML = Response.sunset
	wind_degrees6.innerHTML = Response.wind_degrees

})
.catch(err => console.error(err));
