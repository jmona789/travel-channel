/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
  //hide Alerts
  $('#noCityAlert, #noDateInAlert, #noDateOutAlert').hide();

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
    var city = $('#citySelector').val().trim().toLowerCase();
    var dateIn = $("#modalDateIn").val();
    var dateOut = $("#modalDateOut").val();
    if(city === '' && dateIn === '' && dateOut === ''){
      $('.alert').slideDown();
    }else if(city === '' && dateIn === ''){
      $('#noDateOutAlert').hide();
      $('#noCityAlert, #noDateInAlert').slideDown();
    }else if(city === '' && dateOut ===''){
      $('#noDateOutAlert').hide();
      $('#noCityAlert, #noDateOutAlert').slideDown();
    }else if(dateIn === '' && dateOut ===''){
      $('#noCityAlert').hide();
      $('#noDateInAlert, #noDateOutAlert').slideDown();
    }else if (city === '') {
      $('#noDateInAlert, #noDateOutAlert').hide();
      $('#noCityAlert').slideDown();
    }else if(dateIn === '') {
      $('#noCityAlert, #noDateOutAlert').hide();
      $('#noDateInAlert').slideDown();
    }else if (dateOut === ''){
      $('#noCityAlert, #noDateInAlert').hide();
      $('#noDateOutAlert').slideDown();
    }else{
      $('.alert').hide();
      $('#travelModal').modal('hide');
      citySearch(city);
    }
  });

  $('#wifiYes').on('click', function(){
    $('#nyResult1, #chicagoResult1, #miamiResult1, #dcResult1, #losAngelesResult1').show();
    $('#nyResult2, #chicagoResult2, #miamiResult2, #dcResult2, #losAngelesResult2').hide();
    $('#nyResult3, #chicagoResult3, #miamiResult3, #dcResult3, #losAngelesResult3').show();
    $('#nyResult4, #chicagoResult4, #miamiResult4, #dcResult4, #losAngelesResult4').show();
    $('#nyResult5, #chicagoResult5, #miamiResult5, #dcResult5, #losAngelesResult5').hide();
  })

  $('#wifiNo').on('click', function(){
    $('#nyResult1, #chicagoResult1, #miamiResult1, #dcResult1, #losAngelesResult1').hide();
    $('#nyResult2, #chicagoResult2, #miamiResult2, #dcResult2, #losAngelesResult2').show();
    $('#nyResult3, #chicagoResult3, #miamiResult3, #dcResult3, #losAngelesResult3').hide();
    $('#nyResult4, #chicagoResult4, #miamiResult4, #dcResult4, #losAngelesResult4').hide();
    $('#nyResult5, #chicagoResult5, #miamiResult5, #dcResult5, #losAngelesResult5').show();
  })

  $('#restaurantYes').on('click', function(){
    $('#nyResult1, #chicagoResult1, #miamiResult1, #dcResult1, #losAngelesResult1').hide();
    $('#nyResult2, #chicagoResult2, #miamiResult2, #dcResult2, #losAngelesResult2').show();
    $('#nyResult3, #chicagoResult3, #miamiResult3, #dcResult3, #losAngelesResult3').show();
    $('#nyResult4, #chicagoResult4, #miamiResult4, #dcResult4, #losAngelesResult4').hide();
    $('#nyResult5, #chicagoResult5, #miamiResult5, #dcResult5, #losAngelesResult5').show();
  })
  $('#restaurantNo').on('click', function(){
    $('#nyResult1, #chicagoResult1, #miamiResult1, #dcResult1, #losAngelesResult1').show();
    $('#nyResult2, #chicagoResult2, #miamiResult2, #dcResult2, #losAngelesResult2').hide();
    $('#nyResult3, #chicagoResult3, #miamiResult3, #dcResult3, #losAngelesResult3').hide();
    $('#nyResult4, #chicagoResult4, #miamiResult4, #dcResult4, #losAngelesResult4').show();
    $('#nyResult5, #chicagoResult5, #miamiResult5, #dcResult5, #losAngelesResult5').hide();
  })

  $('#poolYes').on('click', function(){
    $('#nyResult1, #chicagoResult1, #miamiResult1, #dcResult1, #losAngelesResult1').hide();
    $('#nyResult2, #chicagoResult2, #miamiResult2, #dcResult2, #losAngelesResult2').show();
    $('#nyResult3, #chicagoResult3, #miamiResult3, #dcResult3, #losAngelesResult3').show();
    $('#nyResult4, #chicagoResult4, #miamiResult4, #dcResult4, #losAngelesResult4').hide();
    $('#nyResult5, #chicagoResult5, #miamiResult5, #dcResult5, #losAngelesResult5').show();
  })
  $('#poolNo').on('click', function(){
    $('#nyResult1, #chicagoResult1, #miamiResult1, #dcResult1, #losAngelesResult1').show();
    $('#nyResult2, #chicagoResult2, #miamiResult2, #dcResult2, #losAngelesResult2').hide();
    $('#nyResult3, #chicagoResult3, #miamiResult3, #dcResult3, #losAngelesResult3').hide();
    $('#nyResult4, #chicagoResult4, #miamiResult4, #dcResult4, #losAngelesResult4').show();
    $('#nyResult5, #chicagoResult5, #miamiResult5, #dcResult5, #losAngelesResult5').hide();
  })

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