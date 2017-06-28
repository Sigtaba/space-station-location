var ISS = require('./../js/ISS.js').spaceModule;

var displayLatLon = function() {
  $('.showISS').text("The location of the International Space Station is " + lat + " latitude " + lon + "longitude");
}

$(document).ready(function() {
  var currentISS = new ISS();
  $('.showISS').text(currentISS.getLatLon());
  $('#weather-location').click(function() {


  });
});
