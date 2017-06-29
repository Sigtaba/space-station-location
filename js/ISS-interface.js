var Weather = require('./../js/ISS.js').weatherModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var spacePeople = new Weather();
  spacePeople.getWeather();

  $('#location').submit(function(event) {
    event.preventDefault();

    var city = $('#city').val();
    var state = $('#state').val();
    var amount = $('.amount').val();

    var spacePlaces = new Weather();
    spacePlaces.getLocation(city, state, amount, apiKey);
  }); //close #location submit
}); //close document ready
