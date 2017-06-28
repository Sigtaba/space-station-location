ISS = function(){
}

ISS.prototype.getLatLon = function() {
  $.get('http://api.open-notify.org/iss-now.json').then(function(response) {
    console.log(response);
    displayLatLon(response.iss_position.latitude, response.iss_position.latitude);
    console.log(response);
  // }).fail(function(error) {
  //   $('.showWeather').text(error.responseJSON.message);
  // });
}

exports.spaceModule = ISS;
