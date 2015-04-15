//active navItems
$(function() {
  $(".navItem").click( function() {
    $(this).addClass('active').siblings().removeClass('active');
    hasActive();
  });
});

function onHover(item) {
  $("#navImg"+item).attr('src', './pic/shoppingCart/shopping_cart2_0'+ i +'.png');
  $("#navImg"+item).attr('height', '45');
  $("#navImg"+item).attr('width', '45');
  $(".navItem"+item).css('opacity', '1.0');
  $(".navItem"+item).css('bottom', '8px');
}

function offHover(item) {
  $("#navImg"+item).attr('src', './pic/shoppingCart/shopping_cart_0'+ i +'.png');
  $("#navImg"+item).attr('height', '30');
  $("#navImg"+item).attr('width', '30');
  $(".navItem"+item).css('opacity', '0.6');
  $(".navItem"+item).css('bottom', '0px');
}

function hasActive() {
  var i = 4;
  $(".rightItem").each(function() {
    if ($( this ).hasClass('active')) {
      $( this ).find('img:first').attr('src', './pic/shoppingCart/shopping_cart2_0'+ i +'.png');
      $( this ).find('img:first').attr('height', '25');
      $( this ).find('img:first').attr('width', '25');
      $( this ).css('opacity', '1.0');
      $( this ).css('bottom', '8px');
      $( this ).find('img:first').removeAttr('onmouseover');
      $( this ).find('img:first').removeAttr('onmouseout');
    }
    else {
      $( this ).find('img:first').attr('src', './pic/shoppingCart/shopping_cart_0'+ i +'.png');
      $( this ).find('img:first').attr('height', '25');
      $( this ).find('img:first').attr('width', '25');
      $( this ).css('opacity', '0.6');
      $( this ).css('bottom', '0px');
      $( this ).find('img:first').attr('onmouseover', 'onHover('+ i + ');');
      $( this ).find('img:first').attr('onmouseout', 'offHover('+ i + ');');
    }
    i++;
  });
}

$( document ).ready(function() {
  hasActive();
});