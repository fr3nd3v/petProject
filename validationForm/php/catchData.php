<?php 
   $obj = json_decode($_POST['jsonstr']);
   $test = $_POST['test'];
   $str_json = json_decode(file_get_contents("php://input"));
  
   $json = file_get_contents('../js/newUser.json');
   $json = json_decode($json, true);
   $json =  $str_json ;
    
    $newJsonString = json_encode($json);
    file_put_contents('../js/newUser.json', $newJsonString);
    $json1 = file_get_contents('../js/newUser.json');
    
   
?>