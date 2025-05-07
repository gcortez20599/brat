"use strict";



$(document).ready(function () {
  // the  widget
  $("#accordion").accordion({
    collapsible: true,  
    active: false,     
    heightStyle: "content" 
  });

  //  the  Carousel
  $('.album-carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  // Weather API Fetch
  const apiKey = "e491feacbb1fc5597781a9102e4b2509";
  const city = "Chicago"; // Replace with the desired city
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  $.get(weatherApiUrl, function(data) {
    const weatherDescription = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;

    const weatherContent = `
      <p>Location: ${city}</p>
      <p>Weather: ${weatherDescription}</p>
      <p>Temperature: ${temp}°C</p>
      <p>Humidity: ${humidity}%</p>
    `;
    
    $("#weather-content").html(weatherContent);
  }).fail(function() {
    $("#weather-content").html("<p>Sorry, couldn't load the weather data.</p>");
  });

  // Handle my Favorite Album Form
  const savedAlbum = localStorage.getItem("favoriteAlbum");
  if (savedAlbum) {
    document.getElementById("saved-album").textContent = savedAlbum;
    document.getElementById("saved-album").classList.add("saved");
  }

  document.getElementById("favorite-album-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const favoriteAlbum = document.getElementById("favorite-album").value;

    if (favoriteAlbum) {
      localStorage.setItem("favoriteAlbum", favoriteAlbum);
      document.getElementById("saved-album").textContent = favoriteAlbum;
      document.getElementById("saved-album").classList.add("saved");
    }
  });
});
