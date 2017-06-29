var SpaceStation = require('./../js/ISS.js').weatherModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var spacePeople = new SpaceStation();
  spacePeople.getAstronauts();

  $('#location').submit(function(event) {
    event.preventDefault();

    var city = $('#city').val();
    var state = $('#state').val();
    var amount = $('.amount').val();

    var spacePlaces = new SpaceStation();
    spacePlaces.getLocation(city, state, amount, apiKey);
  }); //close #location submit
}); //close document ready
