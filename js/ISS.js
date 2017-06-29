var apiKey = require('./../.env').apiKey;

function SpaceStation() {
  this.apiKey = apiKey;
}

SpaceStation.prototype.getAstronauts = function(displayPeopleInSpace) {
  $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    displayPeopleInSpace(data);
  });
};

SpaceStation.prototype.getLocation = function(city, state, amount, displayDates) {
  var that = this;
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + state + '&key=' + that.apiKey).then(function(object) {
    var lat = object.results[0].geometry.location.lat;
    var lon = object.results[0].geometry.location.lng;
    console.log(city, state, amount);
    that.getDates(lat, lon, amount, displayDates);
  }); //close get
}

SpaceStation.prototype.getDates = function(lat, lon, amount, displayDates) {
  $.getJSON('http://api.open-notify.org/iss-pass.json?lat=' + lat + '&lon=' + lon + '&alt=10&n=' + amount + '&callback=?').then(function(data) {
    console.log(data);
    displayDates(data);
  }); //close then
}

exports.weatherModule = SpaceStation;
