

console.log('sanity check: client-side js loaded');

var map;
var initMap = function(){
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.783, lng: -122.4167},
      zoom: 0
      });
};

$(document).ready(function() {
 
  $('#search-form').on('submit', function(e){
    e.preventDefault();
    reset();

    var serializedsearch = $('#search-form').serialize();
      $.getJSON( ('/api/search?'+serializedsearch), function( foundfairs ) {
        var items = [];

        $.each( foundfairs, function(key, val){ 
          console.log("val =", val);
          items.push( "<li id='" + key + "> <h5><a href='" + val.website + "'>" + val.name + "</a></h5></br> "+ val.fairId + "</br>" + val.city +" "+ val.state + " "+ val.country + "</li>");
          var coordinates = {lat:parseFloat(val.latitude), lng: parseFloat(val.longitude)};
          console.log(coordinates);
          var newMarker = new google.maps.Marker({
             position: coordinates,
             map: map,
             title: val.name,
          });
        });
      $( "<ul/>", {
        "id": "foundfairs",
        html: items.join( "" )
    }).appendTo( "#info" );
    
    $('#findafair').modal('hide');



      });
            
        
        
    
});  

});


///////////////

var reset = function(){
  $('#info').empty();

};




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


