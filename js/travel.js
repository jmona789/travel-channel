/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {

  "use strict";
  function citySearch(citySelector) {
    if (citySelector === "New York" || "NYC" || "New York City" || "New York, NY" || "New York City, NY") {
      $('#nyResults').show();
    } else if (citySelector === "Chicago" || "Chicago, IL") {
      $('#chicagoResults').show();
    } else if (citySelector === "Miami" || "Miami, FL") {
      $('#miamiResults').show();
    } else if (citySelector === "Washington DC") {
      $('#dcResults').show();
    } else if (citySelector === "Los Angeles" || "Los Angeles, CA" ||"LA, CA" || "LA") {
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