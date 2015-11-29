$(document).ready(function() {

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
  document.getElementById("nyResults").style.display = "none";
}



// if the html matches any city then change css display to block

    // $("findHotel").click(function() {
    //     $(".chicagoHotels").h();
    //     $(".dcHotels").hide();
    //     $(".losAngelesHotels").hide();
    //     $(".miamiHotels").hide();
    //     $(".nyHotels").hide();
    //     if ($(".chicagoHotels").css("display") === "none") {
    //         $("").css({
    //             'background-image' : 'url("public/images/expand-lg.png")'
    //         });
    //     }
    //     else {} 
    // });

});