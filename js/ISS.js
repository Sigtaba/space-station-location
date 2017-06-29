function SpaceStation() {

}

SpaceStation.prototype.getAstronauts = function() {
  $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
      var number = data['number'];
      $('#spacepeeps').html(number);

      data['people'].forEach(function (data) {
           $('#astronames').append('<li>' + data['name'] + '</li>');
      });
  });
};

SpaceStation.prototype.getLocation = function(city, state, amount, apiKey) {
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + state + '&key=' + apiKey).then(function(object) {
    var lat = object.results[0].geometry.location.lat;
    var lon = object.results[0].geometry.location.lng;
    console.log(city, state, amount);
    $('#isspass').empty();
    $.getJSON('http://api.open-notify.org/iss-pass.json?lat=' + lat + '&lon=' + lon + '&alt=10&n=' + amount + '&callback=?').then(function(data) {
      console.log(data);
      data['response'].forEach(function (i) {
        var date = new Date(i.risetime * 1000);
        $('#isspass').append('<li>' + date.toString() + '</li>');
      }); //close ForEACh
    }); //close then
  }); //close get
}

exports.weatherModule = SpaceStation;
