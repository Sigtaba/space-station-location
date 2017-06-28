$(document).ready(function() {
  $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
      var number = data['number'];
      $('#spacepeeps').html(number);

      data['people'].forEach(function (data) {
           $('#astronames').append('<li>' + data['name'] + '</li>');
      });
  });

  $.getJSON('http://api.open-notify.org/iss-pass.json?lat=-12.0&lon=-77.0&alt=20&n=10&callback=?', function(data) {
    data['response'].forEach(function (data) {
        var date = new Date(data['risetime']*1000);
         $('#isspass').append('<li>' + date.toString() + '</li>');
    });
  });
});
