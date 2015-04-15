function check_Car () {
  var str = $( ".form2_1" ).serialize();
  var res = str.split("&");
  
  page2Status[0] = 0;
  
  if ($("#car_year option:selected").text() == 'Year') {
    page2Status[0] = 1;
  }
  
  else if ($("#car_make option:selected").text() == 'Make') {
    page2Status[0] = 1;
  }
  else if ($("#car_model option:selected").text() == 'Model') {
    page2Status[0] = 1;
  }
  else if ( isEmpty($("#registrationdate").val()) || !validateDate($("#registrationdate").val()) ) {
    page2Status[0] = 1;
  }
}

function check_Scooter () {
  
}

function check_Motorycle () {

}

function check_Bike () {

}

function isEmpty(str) {
  var temp = str.replace(/\s/g, '');
  if (temp.length == 0) {
    return true;
  }
  else {
    return false;
  }
}

function validateEmail(sEmail) {
  sEmail = sEmail.replace('%40','@');
  return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/.test(sEmail);

}

function onlyLetters (str) {
  return /^[a-zA-Z]+$/.test(str);
}

function onlyNumbers (str) {
  return /^[0-9]+$/.test(str);
}


function validateDate(dtValue) {
  var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
  return dtRegex.test(dtValue);
}
