//page1_1
function check_register () {
  
  var str = $( ".form1_1" ).serialize();
  var res = str.split("&");
  
  page1Status = true;
  
  for(i = 0; i < res.length; i++) {
    var content = res[i].split("=");

    //(1 is realy content, 0 is field name)
    if (isEmpty(content[1]) && i!=5 ) { // check empty string
      //alert('Need to provide us your ' + content[0]);
      page1Status = false;
    }

    else if (i == 0 || i == 1) { //check first name and last name
      if (!onlyLetters(content[1])) {
        //alert('name must be character ' + content[0]);
        page1Status = false;
      }
    }

    else if (i == 2) { // email check
      if (!validateEmail(content[1])) {
        //alert("wrong email format.");
        page1Status = false;
      }
    }

    else if (i == 4) { // zipcode check
      if (!onlyNumbers(content[1])) {
        //alert("only numbers allows in zipcode field.");
        page1Status = false;
      }
      if (content[1].length != 5) {
        //alert("zipcode need 5 numbers.");
        page1Status = false;
      }
    }

    else {
      //page1Status = true;
    } 
  }
}

//page1_2
function check_login() {
  var str = $( ".form1_2" ).serialize();
  var res = str.split("&");
  
  page1Status = true;
  
  for(i = 0; i < res.length; i++) {
    var content = res[i].split("=");
    
    //(1 is realy content, 0 is field name)
    if (isEmpty(content[1]) && i!=3 ) { // check empty string
      //alert('Need to provide us your ' + content[0]);
      page1Status = false;
    }
    else if (i == 0) { // email check
      if (!validateEmail(content[1])) {
        //alert("wrong email format.");
        page1Status = false;
      }
    }
    else if (i == 2) { // zipcode check
      if (!onlyNumbers(content[1])) {
        //alert("only numbers allows in zipcode field.");
        page1Status = false;
      }
      if (content[1].length != 5) {
        //alert("zipcode need 5 numbers.");
        page1Status = false;
      }
    }
    else {
      //page1Status = true;
    } 
  }
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