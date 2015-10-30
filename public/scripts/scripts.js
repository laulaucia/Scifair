console.log('sanity check: client-side js loaded');

var map;
var markers = [];
var startmap = {lat: 37.783, lng: -122.4167};
var initMap = function(){
      map = new google.maps.Map(document.getElementById('map'), {
      center: startmap,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      zoom: 4
      });
};

$(document).ready(function() {

////this takes the information from the search form and querys the database 
  $('#search-form').on('submit', function(e){
    e.preventDefault();
    //make sure old querys dont stick around
    reset();
    //turn search parameters into a string and send to fair API
    var serializedsearch = $('#search-form').serialize();
      $.getJSON( ('/api/search?'+serializedsearch), function( foundfairs ) {
        //this array stores information to append to the HTML
        var items = [];
        //takes away the text saying there is no search
        $('.col-md-4 p').empty();
        if (foundfairs.length === 0){
          $('#info').append("</br><p class='text-center'>I COULDN'T FIND ANY FAIRS THERE, </br>ARE YOU SURE YOU SPELLED EVERYTHING RIGHT?</p>");
          $('#findafair').modal('hide');
        }
        else{
        //loop though the found fairs and set map markers and write things to append to info
        $.each( foundfairs, function(key, val){ 
          items.push( "<li> <h5>"+ val.fairId +": <a target='_blank' href='" + val.website  + "'>" + val.name  + "</a></h5>" + val.city  +", "+ val.state  + "</br> "+ val.country  + "</br> Fair starts: "+ val.startDate + "</br> Affiliations: "+ val.affiliations +"</li>" );
          var coordinates = {lat:parseFloat(val.latitude), lng: parseFloat(val.longitude)};
            //make a new google marker
            var newMarker = new google.maps.Marker({
               position: coordinates,
               map: map,
               title: val.name.toUpperCase,
               animation: google.maps.Animation.DROP});
          //push to marker   
          markers.push(newMarker);
          map.panTo(newMarker.getPosition());
          setMapOnAll();
          showMarkers();          
      });
      $( "<ul/>", {
        "id": "foundfairs",
        html: items.join( "" )}).appendTo( "#info" );  
      $('#findafair').modal('hide');
      }
      });  
    });  
  });


/////////////// google map stuff ///////////

var reset = function(){
  $('#info').empty();
  deleteMarkers();

};

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}


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
    $.post('/users', loginData, function(response) {
      console.log(response);
    });
  });

///////////////
$('#addafair').on('submit', function(e){
  e.preventDefault();
  var newfairfromform = $(this).serialize();
  $.post('/fairs', newfairfromform, function(response){
    console.log(response);
  });
});
