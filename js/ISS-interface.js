var SpaceStation = require('./../js/ISS.js').weatherModule;
// var apiKey = require('./../.env').apiKey;

var displayDates = function(data) {
  data['response'].forEach(function (i) {
    var date = new Date(i.risetime * 1000);
    $('#isspass').append('<li>' + date.toString() + '</li>');
  }); //close ForEACh
}

var displayPeopleInSpace = function(data) {
  var number = data['number'];
  $('#spacepeeps').html(number);

  data['people'].forEach(function (data) {
       $('#astronames').append('<li>' + data['name'] + '</li>');
  });
}

$(document).ready(function() {
  var spacePeople = new SpaceStation();
  spacePeople.getAstronauts(displayPeopleInSpace);

  $('#location').submit(function(event) {
    event.preventDefault();
    $('#isspass').empty();

    var city = $('#city').val();
    var state = $('#state').val();
    var amount = $('.amount').val();

    var spacePlaces = new SpaceStation();
    spacePlaces.getLocation(city, state, amount, displayDates);
  }); //close #location submit
}); //close document ready
