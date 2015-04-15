function onHoverV(item) {
  $("#vehicle"+item).attr('src', './pic/vehicle/v_mo_'+item+'.png');
  $("#vehicle"+item).parent().find('h4').css('color', '#ff8600');
}

function offHoverV(item) {
  $("#vehicle"+item).attr('src', './pic/vehicle/v_u_'+item+'.png');
  $("#vehicle"+item).parent().find('h4').css('color', '#808080');
}

$(function() {
  $(".vitem").click( function() {
    $(this).addClass('activeV').siblings().removeClass('activeV');
    changeIcon();
    hasActiveV();
    
  });
  
});

function changeIcon() {
  if ($('#isChecked').is(':checked')) {
    $('#vehicle4').attr('src', './pic/vehicle/v_s_4.png');
    $('#nooption').find('h4').css('color', '#808080');
  }
}

function switchPopover(i) {
  $(".gpopover").each(function () {
    $(this).attr('style', 'display:none');
  });
  
  $("#pop"+i).removeAttr('style', '');
}

function hasActiveV() {
  var i = 1;

  $(".vitem").each(function() {
    if ($( this ).hasClass('activeV')) {

      $( this ).find('img:first').attr('src', './pic/vehicle/v_o_'+ i +'.png');
      
      $( this ).find('h4').css('color', '#ff8600');
      $( this ).find('img:first').removeAttr('onmouseover');
      $( this ).find('img:first').removeAttr('onmouseout');

      switchPopover(i);
    }
    else {
      if ($('#isChecked').is(':checked')) {
        if (i==4) {
          $(this).attr('src', './pic/vehicle/v_s_4.png');
          $( this ).find('h4').css('color', '#808080');
          return true;
        }
      }
      $( this ).find('img:first').attr('src', './pic/vehicle/v_u_'+ i +'.png');
      $( this ).find('h4').css('color', '#808080');
      $( this ).find('img:first').attr('onmouseover', 'onHoverV('+ i + ');');
      $( this ).find('img:first').attr('onmouseout', 'offHoverV('+ i + ');');
    }
    i++;
});
}

/*
$(function() {
  $(".nooption").click( function() {
    if ($( this ).find('img:first').attr('src') == './pic/vehicle/v_s_'+ 4 +'.png') {
      $( this ).find('img:first').attr('src', './pic/vehicle/v_u_'+ 4 +'.png');
      $( this ).find('img:first').attr('onmouseover', 'onHoverV('+ 4 + ');');
      $( this ).find('img:first').attr('onmouseout', 'offHoverV('+ 4 + ');');
      $( this ).find('h4').css('color', '#808080');
      return true;
    }
    $( this ).find('img:first').attr('src', './pic/vehicle/v_s_'+ 4 +'.png');
    $( this ).find('img:first').removeAttr('onmouseover');
    $( this ).find('img:first').removeAttr('onmouseout');
    $( this ).find('h4').css('color', '#808080');
  });
});
*/

$( "#car_make" )
  .change(function() {
    var str = "";
    $( "#car_make option:selected" ).each(function() {
      
      var current_make = $(this).text()+"";
      
      $.getJSON('./json/data.json', function(data) {
        var i = 1;
        $.each(data,function(i,item) {
          if (item['title'] == current_make) {
            $("#car_model").find('option').remove();
            $.each(item.models, function(j, jitem) {
              $("#car_model").append($("<option></option>").val(j).html(jitem['title']));
            });
          }
          i++;
        });
      });
    });
  })
  .trigger( "change" );



$( document ).ready(function() {
  hasActiveV();
  
  $('.datepicker').datepicker({
    format: 'mm/dd/yyyy'
  });
  
  //generate make list
  $.getJSON('./json/data.json', function(data) {
    $.each(data,function(i,item) {
      //alert(item['title']); 
      $("#car_make").append($("<option></option>").val(i).html(item['title']));
      $.each(item.models, function(j, jitem) {
      });
    });
  });
  
  //generate year list
  var j = 1;
  
  for(i = 2015 ;i >= 1970; i--) {
    $("#car_year").append($("<option></option>").val(j).html(i+''));
    j++;
  }

});