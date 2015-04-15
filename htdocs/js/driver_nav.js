//active navItems
$(function() {
  $(".navItem").click( function() {
    $(this).addClass('active').siblings().removeClass('active');
    hasActiveB();
  });
});
$(function(){
  $(".stepButton").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    hasActiveB();
  });
});

function onHover(item) {
  $("#navImg"+item).attr('src', './pic/login/navImgL_'+item+'.png');
  $("#navImg"+item).attr('height', '45');
  $("#navImg"+item).attr('width', '45');
  $(".navItem"+item).css('opacity', '1.0');
  $(".navItem"+item).css('bottom', '8px');
}

function offHover(item) {
  $("#navImg"+item).attr('src', './pic/login/navImgS_'+item+'.png');
  $("#navImg"+item).attr('height', '30');
  $("#navImg"+item).attr('width', '30');
  $(".navItem"+item).css('opacity', '0.6');
  $(".navItem"+item).css('bottom', '0px');
}
function onHoverB(num) {
  if(num===1){
    $("#leftButton").attr('src', './pic/button/driver_left.png');
    $("#leftButton").attr('height', '60px');
    $("#leftButton").attr('width', '60px');
    $(".leftBtn").css('opacity', '1.0');
    $(".rightBtn").css('opacity', '0.5');

  }else if(num===2){
    $("#rightButton").attr('src', './pic/button/driver_right.png');
    $("#rightButton").attr('height', '60');
    $("#rightButton").attr('width', '60');
    $(".leftBtn").css('opacity', '0.5');
    $(".rightBtn").css('opacity', '1.0');
  }
}
function offHoverB(num) {
  if(num===1){
    $("#leftButton").attr('src', './pic/button/driver_left.png');
    $("#leftButton").attr('height', '50');
    $("#leftButton").attr('width', '50');
    // $(".leftBtn").css('opacity', '0.5');
    $(".rightBtn").css('opacity', '1.0');

  }else if(num===2){
    $("#rightButton").attr('src', './pic/button/driver_right.png');
    $("#rightButton").attr('height', '50');
    $("#rightButton").attr('width', '50');
    $(".leftBtn").css('opacity', '1.0');
    // $(".rightBtn").css('opacity', '0.5');
  }
}
function hasActiveB() {
  $(".stepButton").each(function(){
    if($(this).hasClass('active')){
      $(this).css('opacity', '1.0');
      $( this ).find('img:first').removeAttr('onmouseover');
      $( this ).find('img:first').removeAttr('onmouseout');
    }else{
      $(this).css('opacity', '0.5');
    }
  });
}

function hasActive() {
  var i = 1;
  $(".navItem").each(function() {
    if ($( this ).hasClass('active')) {
      $( this ).find('img:first').attr('src', './pic/login/navImgL_'+ i +'.png');
      $( this ).find('img:first').attr('height', '45');
      $( this ).find('img:first').attr('width', '45');
      $( this ).css('opacity', '1.0');
      $( this ).css('bottom', '8px');
      $( this ).find('img:first').removeAttr('onmouseover');
      $( this ).find('img:first').removeAttr('onmouseout');
    }
    else {
      $( this ).find('img:first').attr('src', './pic/login/navImgS_'+ i +'.png');
      $( this ).find('img:first').attr('height', '30');
      $( this ).find('img:first').attr('width', '30');
      $( this ).css('opacity', '0.6');
      $( this ).css('bottom', '0px');
      $( this ).find('img:first').attr('onmouseover', 'onHover('+ i + ');');
      $( this ).find('img:first').attr('onmouseout', 'offHover('+ i + ');');
    }
    i++;
  });
}

$(function(){
  $(".navItem1").click(function() {
    //$("#includedContent").load("registerandlogin.html");
    for (i = 1; i < 5; i++) { 
      $("#page" + i).css('display', 'none');
    }
    $("#page1").removeAttr('style');
  }); 
});

function page1check() {
    //check if left or right form for page 1
    if($('#registercontent').css('display') != 'none') {
      check_register(); // check if page1 left ok
    }
    else {
      check_login(); //check if page1 right ok
    }
     
    //delete preview status picture
    if ($(".navItem1").find('p').find('img')) {
        $(".navItem1").find('p').find('img').remove();
    }
    //if page1 not ok
    if(page1Status == false) {
      $(".navItem1").find('p').prepend('<img style="margin-right:2px; margin-bottom:2px;" id="page1status" src="pic/background_check/driver_recruite_background-check-_22.png" width="11px" height="11px">');
    }
    //if page 1 ok
    else {
      $(".navItem1").find('p').prepend('<img style="margin-right:2px; margin-bottom:2px;" id="page1status" src="pic/background_check/driver_recruite_background-check-_20.png" width="11px" height="11px">');
    }

}
function page2check() {
    check_Car();
    
    //delete preview status picture
    if ($(".navItem2").find('p').find('img')) {
        $(".navItem2").find('p').find('img').remove();
    }
    //if page2 car not ok
    if(page2Status[0] == 1) {
      $(".navItem2").find('p').prepend('<img style="margin-right:2px; margin-bottom:2px;" id="page1status" src="pic/background_check/driver_recruite_background-check-_22.png" width="11px" height="11px">');
    }
    //if page 2 ok
    else {
      $(".navItem2").find('p').prepend('<img style="margin-right:2px; margin-bottom:2px;" id="page1status" src="pic/background_check/driver_recruite_background-check-_20.png" width="11px" height="11px">');
    }
}

$(function(){
  $(".navItem2").click(function() {
    //$("#includedContent").load("vehicleinfo.html");
    
    for (i = 1; i < 5; i++) { 
      $("#page" + i).css('display', 'none');
    }
    $("#page2").removeAttr('style');
    page1check();
  }); 
});

$(function(){
  $(".navItem3").click(function() {
    for (i = 1; i < 5; i++) { 
      $("#page" + i).css('display', 'none');
    }
    $("#page3").removeAttr('style');
    page1check();
    page2check();
  }); 
});

$(function(){
  $(".navItem4").click(function() {
    for (i = 1; i < 5; i++) { 
      $("#page" + i).css('display', 'none');
    }
    $("#page4").removeAttr('style');
  }); 
});

$( document ).ready(function() {
  hasActive();
});