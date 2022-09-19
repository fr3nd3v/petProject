<?php 
  
   $json = file_get_contents('../js/newUser.json');
   $json = json_decode($json, true);
   var_dump($json);
    $newJsonString = json_encode($json);
    
?>