<?php 
  //header("Content-Type: application/json", true);
  $dataArray = $_POST['firstname'].'_'. $_POST['lastname'].'_'.$_POST['email'].'_'.$_POST['password'].'_'.$_POST['zipcode'].'_'.$_POST['invitecode'].'_'.$_POST['year'].'_'.$_POST['make'].'_'.$_POST['model'].'_'.$_POST['registrationdate'].'_'.$_POST['ssn'];
  //$data = $_POST['firstname'];
  //$data = json_decode($data);
  //$data = json_decode($data, true);
  echo $dataArray;
?>