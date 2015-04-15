
$(function () {
  $(".status_gbleft img").mouseleave(function (event) {
    $(".status_gbleft img").attr('src', './pic/login/driver_recruite_login_59.png');
    $(".status_gbleft").css('color', '#A9A9A9');
  });  
});

$(function () {
  $(".status_gbright img").mouseover(function (event) {
    $(".status_gbright img").attr('src', './pic/login/driver_recruite_login2_61.png');
    $(".status_gbright").css('color', '#FF8600');
  });  
});

$(function () {
  $(".status_gbright img").mouseleave(function (event) {
    $(".status_gbright img").attr('src', './pic/login/driver_recruite_login_61.png');
    $(".status_gbright").css('color', '#A9A9A9');
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
  
  $('.status_gbright img').remove();
  $("br").remove();
  $(".status_gbleft span").remove();
  $(".status_gbright span").remove();
  
  $(".status_gbleft").removeClass('col-xs-6');
  $(".status_gbleft").addClass('col-xs-3');
  
  $(".status_gbright").removeClass('col-xs-6');
  $(".status_gbright").addClass('col-xs-9');
  
  //move status_gbleft to left
  $('.status_gbleft').animate({
    height: '49px',
    width: '56px'
  }, { 
    duration: 450, 
    queue: false 
  });
  
  //smaller the icon
  $('.status_gbleft img').animate ({
    "height": $(".status_gbleft img").height()*0.6,
    "width":$(".status_gbleft img").width()*0.6,
  }, { 
    duration: 450,
    queue: false,
    
  });
  
  
  $(".status_gbright").append("<div class='col-xs-8' style='display:none; left:-22px;' id='pnshow'><input style='margin-top:4px; width:190px; border-radius:17px;' type='text' class='form-control' placeholder='Phone number'></div>");
  $(".status_gbright").append("<div class='col-xs-4' style='display:none;' id='butshow'><div id='downloadapp' style='margin-top:4px;'>Download</div></div>");
  $("#pnshow").fadeIn('slow');
  $("#butshow").fadeIn('slow');
  
  $('.status_gbleft img').removeAttr('onclick');
}

var value = 0
$(".status_gbleft img").rotate({ 
   bind: 
     { 
        click: function(){
            value +=360;
            $(this).rotate({ animateTo:value, duration:1000})
            $(".status_gbleft img").unbind('click');
        }
     }
   
});