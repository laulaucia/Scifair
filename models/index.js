 mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                      'mongodb://localhost/scifair' );
 $(document).ready(function(){

 map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 37.783, lng: -122.4167},
    	zoom: 3
  	});
});