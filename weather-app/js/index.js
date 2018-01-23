/*
The Weather Retriever project uses HTML, JavaScript, Jquery and Bootstrap.
The google api is used to get the users latitude and longitude and then
the darksky api is used to get weather conditions based on the latitude and longitude.
*/
//Creates a skycons object.  This object will have the animated icons
var skycons = new Skycons({ color: "black" });
function setIcons() {
  skycons.set("animated-icon2", Skycons.RAIN);
  skycons.play();
  skycons.set("animated-icon3", Skycons.WIND);
  skycons.play();
}
var x;
//Assigns the html5 navigator geolocation to the variable x.
//Then the getCurrentPosition method is called.  If geolocation is supported, then the 
//first method getPosition will run, otherwise the failure method will run.
function getLocation() {
  x = navigator.geolocation;
  x.getCurrentPosition(getPosition, failure);
}
//This function does all the work of retrieving the necessary information from both the google geo api and the darksky weather api
//It also works to represent that data in the html elements.
//This method is only called from inside the getLocation method.  The position parameter is always passed through the getCurrentPosition method used in the getLocation function.
function getPosition(position) {
  //Gets the latitude and longitude and turns it form JSON data to a string.
  var latitude = JSON.stringify(position.coords.latitude);
  var longitude = JSON.stringify(position.coords.longitude);
  //Gets the google geocode api
  //Uses a unique key provided by google
  $.getJSON(
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      latitude +
      "," +
      longitude +
      "&key=" +
      "AIzaSyAfkp3S1o85EovrsLjvWSMG6zFIATkz1lM",
    function(timezone) {
      //Sets the JSON data to timezone
      //city and state variables are assigned to the city and state
      var city = timezone.results[0].address_components[3].long_name;
      var state = timezone.results[0].address_components[5].short_name;
      $("#city").text(city + "," + state);
    }
  );
  //Gets the JSON data from darksky api using a special key and the latitude and longitude
  //Needs ?callback=? or otherwise it won't work.
  $.getJSON(
    "https://api.darksky.net/forecast/d1d92c39543491ff21688b8bd02c3250/" +
      latitude +
      "," +
      longitude +
      "?callback=?",
    function(timezone) {
      //Same process used as the google api
      var icon = timezone.currently.icon;
      //Sets the icon
      if (icon == 'clear-day') {
        skycons.set("animated-icon", Skycons.CLEAR_DAY);
        skycons.play();
      } 
      else if (icon == 'clear-night') {
        skycons.set("animated-icon", Skycons.CLEAR_NIGHT);
        skycons.play();
      } 
      else if (icon == 'rain') {
        skycons.set("animated-icon", Skycons.RAIN);
        skycons.play();
      } 
      else if (icon == 'snow') {
        skycons.set("animated-icon", Skycons.SNOW);
        skycons.play();
      } 
      else if (icon == 'sleet') {
        skycons.set("animated-icon", Skycons.SLEET);
        skycons.play();
      } 
      else if (icon == 'wind') {
        skycons.set("animated-icon", Skycons.WIND);
        skycons.play();
      }
      else if (icon == 'fog') {
        skycons.set("animated-icon", Skycons.FOG);
        skycons.play();
      }
      else if (icon == 'cloudy') {
        skycons.set("animated-icon", Skycons.CLOUDY);
        skycons.play();
      }
      else if (icon == 'partly-cloudy-day') {
        skycons.set("animated-icon", Skycons.PARTLY_CLOUDY_DAY);
        skycons.play();
      }
      else if (icon == 'partly-cloudy-night') {
        skycons.set("animated-icon", Skycons.PARTLY_CLOUDY_NIGHT);
        skycons.play();
      }
      //Sets the rest of the weather info and changes the respective html text
      var summary = timezone.currently.summary;
      $("#summary").text(summary);
      var temperature = timezone.currently.temperature;
      var celsius = (temperature - 32) * .5556;
      celsius = celsius.toFixed(2);
      $("#temp").text(temperature+" °F" +" / "+celsius+" °C");
      var rainChance = timezone.currently.precipProbability;
      var rainType = timezone.currently.precipType;
      if (rainType == undefined) {
        rainType = "No Precipitation";
      }
      $("#rain").text(rainType + " : " + rainChance * 100 + "%");
      var wind = timezone.currently.windSpeed;
      $("#wind").text(wind + "mph");
    }
  );
}
//Failure function
function failure() {
  alert("Nope");
}
getLocation();
setIcons();