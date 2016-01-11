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

  $('body').on('click', "#findHotel", function () {
    citySearch($('#citySelector').val().trim().toLowerCase());
  });

  $('#wifiYes').on('click', function(){
    $('#nyResult1, #chicagoResult1, #miamiResult1, #dcResult1, #losAngelesResult1').fadeIn('slow');
    $('#nyResult2, #chicagoResult2, #miamiResult2, #dcResult2, #losAngelesResult2').fadeOut('slow');
    $('#nyResult3, #chicagoResult3, #miamiResult3, #dcResult3, #losAngelesResult3').fadeIn('slow');
    $('#nyResult4, #chicagoResult4, #miamiResult4, #dcResult4, #losAngelesResult4').fadeIn('slow');
    $('#nyResult5, #chicagoResult5, #miamiResult5, #dcResult5, #losAngelesResult5').fadeOut('slow');
  })

  $('#wifiNo').on('click', function(){
    $('#nyResult1, #chicagoResult1, #miamiResult1, #dcResult1, #losAngelesResult1').fadeOut('slow');
    $('#nyResult2, #chicagoResult2, #miamiResult2, #dcResult2, #losAngelesResult2').fadeIn('slow');
    $('#nyResult3, #chicagoResult3, #miamiResult3, #dcResult3, #losAngelesResult3').fadeOut('slow');
    $('#nyResult4, #chicagoResult4, #miamiResult4, #dcResult4, #losAngelesResult4').fadeOut('slow');
    $('#nyResult5, #chicagoResult5, #miamiResult5, #dcResult5, #losAngelesResult5').fadeIn('slow');
  })

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