$(document).ready(function() {

$("body").on('click', "#findHotel", function()
{
  citySearch($("#citySelector").val().trim());
});

function citySearch (citySelector) 
{
  if (citySelector === "New York")
      $('#nyResults').show();
  else if (citySelector === "Chicago")
      $('#chicagoResults').show();
}

  $(function() {
    $("#dateIn").datepicker();
  });

  $(function() {
    $("#dateOut").datepicker();
  });

  $(function() {
    $("#modalDateIn").datepicker();
  });

  $(function() {
    $("#modalDateOut").datepicker();
  });

 });