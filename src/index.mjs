import axios from 'axios'
const api_key = "15b6ba0523386a8a73b38b2440a74dea";

let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = now.getDay();
    if (day === 0) {
        day = "Sunday";

        let h5 = document.querySelector("#dayAndTime")
        h5.innerHTML = `${day}, ${hours}:${inutes}`;
      }
  

    function search(event) {
        event.preventDefault();
        let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
        console.log(apiUrl);
        
        let searchInput = document.querySelector("#search-input");
        let temperature = document.querySelector("h2");
        temperature.innerHTML = `${temp} °C`;
        
      //make an API call to Openweather API
      //once I get the HTTP response, we display the city name and temperature
    
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${api_key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        const temp = Math.round(data.main.temp);
        console.log(`${temp} °C`);
        let currentTemperature = document.querySelector("h2");
        currentTemperature.innerHTML = `${temp} °C`;
      })
      .catch((error) => console.error(error));

    console.log(searchInput.value);
        let h1 = document.querySelector("h1");
        h1.innerHTML = `${searchInput.value}`;
    }

    let form = document.querySelector("#search-form");
    form.addEventListener("submit", search);

    function showPosition(position) {
      console.log(position);
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
       let form = document.querySelector("#search-form");
    
       
      form.addEventListener("submit", search);
      
      function showTemperature() {
      let city = document.querySelector("city_name");
      city.innerHTML = "${city_name}";
      let cityAndTemp = document.querySelector("button");
      cityAndTemp.addEventListener = ("click", temperature)
      }}
   
      navigator.geolocation.getCurrentPosition(showPosition);
