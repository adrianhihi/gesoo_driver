//get zipcode from google map

function findZipCode(event) {
  event.preventDefault();
  $('#gzipcode').val("搜寻中...");
  $('#gzipcode').prop('disabled', true);
  navigator.geolocation.getCurrentPosition(function (position) {
      var geocoder = new google.maps.Geocoder();
      var latLng   = new google.maps.LatLng( 
          position.coords.latitude, position.coords.longitude);
      geocoder.geocode({
          'latLng': latLng
      }, function (results, status) {
          for (var i = 0; i < results[0].address_components.length; i++) {
              var address = results[0].address_components[i];
              if (address.types[0] == "postal_code") {
                  $('#gzipcode').val(address.long_name);
                  $('#gzipcode').prop('disabled', false);
              }
          }
      });
  });
  return false;
}

function findZipCodeLogin(event) {
  event.preventDefault();
  $('#gzipcodeLogin').val("搜寻中...");
  $('#gzipcodeLogin').prop('disabled', true);
  
  navigator.geolocation.getCurrentPosition(function (position) {
      var geocoder = new google.maps.Geocoder();
      var latLng   = new google.maps.LatLng( 
          position.coords.latitude, position.coords.longitude);
      geocoder.geocode({
          'latLng': latLng
      }, function (results, status) {
          for (var i = 0; i < results[0].address_components.length; i++) {
              var address = results[0].address_components[i];
              if (address.types[0] == "postal_code") {
                  $('#gzipcodeLogin').val(address.long_name);
                  $('#gzipcodeLogin').prop('disabled', false);
              }
          }
      });
  });
  return false;
}

$("#gzipbutton").click(findZipCode);
$("#gzipbuttonLogin").click(findZipCodeLogin);


//zipcode button mouse events
$(function () {
  $("#gzipbutton").mouseover(function (event) {
    $("#gzipbutton").css('background-image', 'url(./pic/login/driver_recruite_login2_47.png)'); 
  });

  $("#gzipbuttonLogin").mouseover(function (event) {
    $("#gzipbuttonLogin").css('background-image', 'url(./pic/login/driver_recruite_login2_47.png)'); 
  });
});

$(function () {
  $("#gzipbutton").mouseleave(function (event) {
    $("#gzipbutton").css('background-image', 'url(./pic/login/driver_recruite_login_47.png)');
  });
  $("#gzipbuttonLogin").mouseleave(function (event) {
    $("#gzipbuttonLogin").css('background-image', 'url(./pic/login/driver_recruite_login_47.png)');
  });
});

//switch between register and login
function toRegister() {
  page1LorR = "left";
  $( "#switchlogin" ).css('background-image', 'url(./pic/login/driver_recruite_login_44.png)');
  $( "#switchregister" ).css('background-image', 'url(./pic/login/driver_recruite_login2_44.png)');
  $( "#switchlogin" ).css('color', '#4d4d4d');
  $( "#switchregister" ).css('color', 'white');

  $( "#switchlogin" ).off('click');

  $("#logincontent").fadeOut("fast", function() {
    $( "#registercontent" ).fadeIn("fast", function() {
      $( "#switchlogin" ).on('click', toLogin);
      $( "gzipbuttonLogin" ).off('click');
    });
  });

}

function toLogin() {
  page1LorR = "right";
  $( "#switchlogin" ).css('background-image', 'url(./pic/login/driver_recruite_login2_44_right.png)');
  $( "#switchregister" ).css('background-image', 'url(./pic/login/driver_recruite_login_44_left.png)');
  $( "#switchlogin" ).css('color', 'white');
  $( "#switchregister" ).css('color', '#4d4d4d');

  $( "#switchregister" ).off('click');

  $( "#registercontent" ).fadeOut( "fast", function() {
    $( "#logincontent" ).fadeIn("fast", function() {
      $( "#switchregister" ).on('click', toRegister);
      $( "gzipbutton" ).off('click');
    });

  });
}

$( "#switchlogin" ).click(toLogin);
$( "#switchregister" ).click(toRegister);

//switch button mouse events
$(function () {
  $(".gbleft img").mouseover(function (event) {
    $(".gbleft img").attr('src', './pic/login/driver_recruite_login2_59.png');
    $(".gbleft").css('color', '#FF8600');
  });  
});

$(function () {
  $(".gbleft img").mouseleave(function (event) {
    $(".gbleft img").attr('src', './pic/login/driver_recruite_login_59.png');
    $(".gbleft").css('color', '#A9A9A9');
  });  
});

$(function () {
  $(".gbright img").mouseover(function (event) {
    $(".gbright img").attr('src', './pic/login/driver_recruite_login2_61.png');
    $(".gbright").css('color', '#FF8600');
  });  
});

$(function () {
  $(".gbright img").mouseleave(function (event) {
    $(".gbright img").attr('src', './pic/login/driver_recruite_login_61.png');
    $(".gbright").css('color', '#A9A9A9');
  });  
});

function backToPhoneSelect() {
  $('.gbottomtitle').find('span').text('Please Select your Phone Type');
  $('.gbottomtitle').find('img').attr('src', './pic/login/driver_recruite_login_21.png');
  $('.gbottomtitle').find('img').off()
  $('.gbottomtitle').find('span').off();
  
  $("#page1").load("registerandlogin.html");

}

function rotateAndMoveLeft() {
  
  $('.gbottomtitle').find('span').text('Back To Phone Options');
  $('.gbottomtitle').find('img').attr('src', './pic/login/driver_recruite_login_21 _right.png');
  $('.gbottomtitle').find('img').click(backToPhoneSelect);
  $('.gbottomtitle').find('span').click(backToPhoneSelect);
  
  $('.gbright img').remove();
  $("br").remove();
  $(".gbleft span").remove();
  $(".gbright span").remove();
  
  $(".gbleft").removeClass('col-xs-6');
  $(".gbleft").addClass('col-xs-3');
  
  $(".gbright").removeClass('col-xs-6');
  $(".gbright").addClass('col-xs-9');
  
  //move gbleft to left
  $('.gbleft').animate({
    height: '49px',
    width: '56px'
  }, { 
    duration: 450, 
    queue: false 
  });
  
  //smaller the icon
  $('.gbleft img').animate ({
    "height": $(".gbleft img").height()*0.6,
    "width":$(".gbleft img").width()*0.6,
  }, { 
    duration: 450,
    queue: false,
    
  });
  
  
  $(".gbright").append("<div class='col-xs-8' style='display:none; left:-22px;' id='pnshow'><input style='margin-top:4px; width:190px; border-radius:17px;' type='text' class='form-control' placeholder='Phone number'></div>");
  $(".gbright").append("<div class='col-xs-4' style='display:none;' id='butshow'><div id='downloadapp' style='margin-top:4px;'>Download</div></div>");
  $("#pnshow").fadeIn('slow');
  $("#butshow").fadeIn('slow');
  
  $('.gbleft img').removeAttr('onclick');
}

var value = 0
$(".gbleft img").rotate({ 
   bind: 
     { 
        click: function(){
            value +=360;
            $(this).rotate({ animateTo:value, duration:1000})
            $(".gbleft img").unbind('click');
        }
     }
   
});

//run after page loaded
$( document ).ready(function() {
});