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
    else if (citySelector === "Miami")
      $('#miamiResults').show();
    else if (citySelector === "Washington DC")
      $('#dcResults').show();
    else if (citySelector === "Los Angeles")
      $('#losAngelesResults').show();
  }

  function wifi ()
  {

  }

  function cost ()
  {

  }

  function pool ()
  {

  }

  function restaurant ()
  {
    
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