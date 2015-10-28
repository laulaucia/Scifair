

console.log('sanity check: client-side js loaded');
var map;
var initMap = function(){
 map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.783, lng: -122.4167},
        zoom: 3
    });
};

$(document).ready(function() {

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

////////////////////search modal search///////////////////////////


// //on click of search results button prevent default
//  $('#search-form').on('submit', function(e) {
//     //serialize data form
//     var searchdata =$('#search-form').serialize();
//         console.log(searchdata);
//     }); 

        //response.redirect('map');
// prevent default
// find the data from the form and serialize it and console log to check the right data
// write an ajax post request the from the serialized data 
// then i'd go to the server and write a post server side route
//app.post same url and req res
//console log req.body - make varables  for city and state and then query the db
// db.fair.find({city:var}, f
// res.json(cities)
//window.location.href('/maps')





// /* #####################################################################
//    #
//    #   Project       : Modal Login with jQuery Effects
//    #   Author        : Rodrigo Amarante (rodrigockamarante)
//    #   Version       : 1.0
//    #   Created       : 07/29/2015
//    #   Last Change   : 08/04/2015
//    #
//    ##################################################################### */
   
 $(function() {
    
//     var $formLogin = $('#login-form');
//     var $formLost = $('#lost-form');
//     var $formRegister = $('#register-form');
//     var $divForms = $('#div-forms');
//     var $modalAnimateTime = 300;
//     var $msgAnimateTime = 150;
//     var $msgShowTime = 2000;

//     $("form").submit(function () {
//         switch(this.id) {
//             case "login-form":
//                 var $lg_username=$('#login_username').val();
//                 var $lg_password=$('#login_password').val();
//                 if ($lg_username == "ERROR") {
//                     msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
//                 } else {
//                     msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Login OK");
//                 }
//                 return false;
//                 break;
//             case "lost-form":
//                 var $ls_email=$('#lost_email').val();
//                 if ($ls_email == "ERROR") {
//                     msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "error", "glyphicon-remove", "Send error");
//                 } else {
//                     msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "success", "glyphicon-ok", "Send OK");
//                 }
//                 return false;
//                 break;
//             case "register-form":
//                 var $rg_username=$('#register_username').val();
//                 var $rg_email=$('#register_email').val();
//                 var $rg_password=$('#register_password').val();
//                 if ($rg_username == "ERROR") {
//                     msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "error", "glyphicon-remove", "Register error");
//                 } else {
//                     msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "success", "glyphicon-ok", "Register OK");
//                 }
//                 return false;
//                 break;
//             default:
//                 return false;
//         }
//         return false;
//     });
    
    // $('#login_register_btn').click( function () { modalAnimate($formLogin, $formRegister) });
    // $('#register_login_btn').click( function () { modalAnimate($formRegister, $formLogin); });
    // $('#login_lost_btn').click( function () { modalAnimate($formLogin, $formLost); });
    // $('#lost_login_btn').click( function () { modalAnimate($formLost, $formLogin); });
    // $('#lost_register_btn').click( function () { modalAnimate($formLost, $formRegister); });
    // $('#register_lost_btn').click( function () { modalAnimate($formRegister, $formLost); });
    
    function modalAnimate ($oldForm, $newForm) {
        var $oldH = $oldForm.height();
        var $newH = $newForm.height();
        $divForms.css("height",$oldH);
        $oldForm.fadeToggle($modalAnimateTime, function(){
            $divForms.animate({height: $newH}, $modalAnimateTime, function(){
                $newForm.fadeToggle($modalAnimateTime);
            });
        });
    }
    
    function msgFade ($msgId, $msgText) {
        $msgId.fadeOut($msgAnimateTime, function() {
            $(this).text($msgText).fadeIn($msgAnimateTime);
        });
    }
    
    function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
        var $msgOld = $divTag.text();
        msgFade($textTag, $msgText);
        $divTag.addClass($divClass);
        $iconTag.removeClass("glyphicon-chevron-right");
        $iconTag.addClass($iconClass + " " + $divClass);
        setTimeout(function() {
            msgFade($textTag, $msgOld);
            $divTag.removeClass($divClass);
            $iconTag.addClass("glyphicon-chevron-right");
            $iconTag.removeClass($iconClass + " " + $divClass);
  		}, $msgShowTime);
  }
});
