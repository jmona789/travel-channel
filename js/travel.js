/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {

  function citySearch(citySelector) {
    $('#nyResults, #chicagoResults, #miamiResults, #dcResults, #losAngelesResults').hide();
    if (citySelector === "new york" || citySelector === "nyc" || citySelector === "new york city" || citySelector === "new york, ny" || citySelector === "new york city, ny") {
      $('#nyResults').show();
    } else if (citySelector === "chicago" || citySelector === "chicago, il") {
      $('#chicagoResults').show();
    } else if (citySelector === "miami" || citySelector === "miami, fl") {
      $('#miamiResults').show();
    } else if (citySelector === "washington dc" || citySelector === "washington dc") {
      $('#dcResults').show();
    } else if (citySelector === "los angeles" || citySelector === "los angeles, ca" || citySelector === "la, ca" || citySelector === "la") {
      $('#losAngelesResults').show();
    }
  }

  $("body").on('click', "#findHotel", function () {
    citySearch($("#citySelector").val().trim().toLowerCase());
  });

  function wifi() {
    
  }

  function cost() {
    
  }

  function pool() {
    
  }

  function restaurant() {
    
  }

  $(function () {
    $("#dateIn").datepicker();
  });

  $(function () {
    $("#dateOut").datepicker();
  });

  $(function () {
    $("#modalDateIn").datepicker();
  });

  $(function () {
    $("#modalDateOut").datepicker();
  });
});