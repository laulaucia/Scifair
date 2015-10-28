

console.log('sanity check: client-side js loaded');
var map;
var initMap = function(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.783, lng: -122.4167},
        zoom: 5
    });
};

$(document).ready(function() {

// var searchResults =

// $.getJSON( searchResults, function( fair ) {
//         var items = [];
//         $.each( data.features, function(key, val) {

//             items.push( "<li id='" + key + "'>" + val.properties.title + "</br> - " + timeSinceQuake +"</li>");
            
//             var geometryData = val.geometry.coordinates;
//             var coordinates = {lat:geometryData[1], lng: geometryData[0]};

//             var newMarker = new google.maps.Marker({
//                 position: coordinates,
//                 map: map,
//                 title: val.properties.title.toString(),
//                 icon: image
//             });
            
//             }
            
//         );
//         $( "<ul/>", {
//         "id": "geoquakes",
//         html: items.join( "" )
//     }).appendTo( "#info" );
    
// });  





/////////////////////////// user JS ///////////////////////////////

  $('#signup-form').on('submit', function(e) {
    e.preventDefault();

    // select the form and serialize its data
    var signupData = $("#signup-form").serialize();
    console.log(signupData);
    // send POST request to /users with the form data
    $.post('/users', signupData, function(response) {
      console.log(response);
    });
  });

  $('#login-form').on('submit', function(e) {
    e.preventDefault();

    // select the form and serialize its data
    // note: this is the form because the event handler
    //   was triggered from the form
    var loginData = $(this).serialize();
    // send POST request to /login with the form data
    $.post('/login', loginData, function(response) {
      console.log(response);
    });
  });

});

