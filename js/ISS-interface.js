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

    var lat = $('.latitude').val();
    var lon = $('.longitude').val();
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
