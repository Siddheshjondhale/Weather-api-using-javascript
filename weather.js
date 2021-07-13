let button = document.querySelector("#search-btn");
let searched = document.querySelector(".search-bar");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let flex = document.querySelector(".flex");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

searched.addEventListener("keyup", (e) => {
  e.keyCode === 13 ? weatherfind(e) : null;
});

button.addEventListener("click", weatherfind);
// http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=90ff4bbf108c7fc4cdc1bfb36fce3f7c
function weatherfind(e) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      searched.value +
      "&units=metric" +
      "&appid=90ff4bbf108c7fc4cdc1bfb36fce3f7c"
  )
    .then((response) => response.json())

    .then((data) => {
      var { country } = data.sys.country;

      var cityt = searched.value;
      var tempt = data["main"]["temp"];
      var descriptiont = data["weather"][0]["description"];
      var humidityt = data["main"]["humidity"];
      var windt = data["wind"]["speed"];

      city.innerHTML = cityt;
      temp.innerHTML = tempt + "°C";
      description.innerHTML = descriptiont;
      humidity.innerHTML = "Humidity: " + humidityt + "%";
      wind.innerHTML = "Wind speed: " + windt + "km/h";
      console.log(data);
      // console.log('https://api.openweathermap.org/data/2.5/weather?q=' + searched.value + '&units=metric' + '&appid=90ff4bbf108c7fc4cdc1bfb36fce3f7c')
    })

    .catch((err) => alert("The city doesn't exists"));
}
