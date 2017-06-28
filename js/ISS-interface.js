var apikey = 'AIzaSyApIDDb9M0b3j4dH77mcqqXj-dZ-l3YkhY';

$(document).ready(function() {
  $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
      var number = data['number'];
      $('#spacepeeps').html(number);

      data['people'].forEach(function (data) {
           $('#astronames').append('<li>' + data['name'] + '</li>');
      });
  });


  $('#location').submit(function(event) {
    event.preventDefault();

    var city = $('#city').val();
    var state = $('#state').val();

    $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + state + '&key=' + apikey,
    function(object) {
      var lat = object.results[0].geometry.location.lat;
      var lon = object.results[0].geometry.location.lng;
      var amount = $('.amount').val();
      $.getJSON('http://api.open-notify.org/iss-pass.json?lat=' + lat + '&lon=' + lon + '&alt=10&n=' + amount + '&callback=?',
      function(data) {
        data['response'].forEach(function (data) {
          var date = new Date(data.risetime * 1000);
          $('#isspass').append('<li>' + date.toString() + '</li>');
        });
      });
    });
  });
});
