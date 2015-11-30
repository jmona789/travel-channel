$(document).ready(function() {

var cities = [ "chicago", "washington dc", "los angeles", "miami", "new york" ]
var hotelStars = [ "1", "2", "3", "4", "5" ]


$(function() {
  $( "#dateIn" ).datepicker();
});

$(function() {
  $( "#dateOut" ).datepicker();
});

$(function() {
  $( "#modalDateIn" ).datepicker();
});

$(function() {
  $( "#modalDateOut" ).datepicker();
});


$("#findHotel").click(nySearch);
function nySearch () {
  if (true) {};
  document.getElementById("nyResults").style.display = "block";
}

});