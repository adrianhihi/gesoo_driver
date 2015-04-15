$(function() {
  $("#finalsubmit").click( function() {
    if ($('#finalChecked').is(':checked')) {
      if (onlyNumbers($('#ssn').val())) {
        if (page1Status == true) {
          if (page2Status[0] == 0) {
            //actual submit prosess here
            /*
            $.ajax({
                type: 'POST',
                url: './test.php',
                data: '{"countryId":"84","productId":"1","status":"0","opId":"134"}',
                success: function(data) { alert('data: ' + data); },
                contentType: "application/json",
                dataType: 'json'
            }); */
            var str = $( ".form1_1" ).serialize();
            var res = str.split("&"); 
            
            $.post("./test.php",
              {
                firstname: (res[0].split("="))[1],
                lastname: (res[1].split("="))[1],
                email: (res[2].split("="))[1].replace('%40','@'),
                password: (res[3].split("="))[1],
                zipcode: (res[4].split("="))[1],
                invitecode: (res[5].split("="))[1],
                year: $("#car_year option:selected").text(),
                make: $("#car_make option:selected").text(),
                model: $("#car_model option:selected").text(),
                registerdate: $("#registrationdate").val(),
                ssn: $("#ssn").val()
              },
              function(data, status){
                  alert(data);
              });
          }
          else {
            alert("Please Check Vehicle Information.");
          }
        }
        else {
          alert("Please Check Register/Log in Page.");
        }
      }
      else {
        alert("SSN Format Error.");
      }
    }
    else {
      alert("Please Check the Agreenment.");
    }
  });
});