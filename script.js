const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "293a1fa0f3mshddb27e40cc66aecp13ea16jsn915d8d9c06ab",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {

    console.log(response)



    cloud_pct.innerHtml  = response.cloud_pct
    feels_like.innerHtml  = response.feels_like
    humidity.innerHtml  = response.humidity
    max_temp.innerHtml  = response.max_temp
    min_temp.innerHtml  = response.min_temp
    sunrise.innerHtml  = response.sunrise
    sunset.innerHtml  = response.sunset
    temp.innerHtml  = response.temp
    wind_degrees.innerHtml  = response.wind_degrees
    wind_speed.innerHtml  = response.wind_speed

    
  })
  .catch((err) => console.error(err));
