<?php 
  ob_start(); 
  
  // conf      
  //$server = "mysql16.000webhost.com";
  //$server = "server45.000webhost.com";
  $server = "mysql16.000webhost.com";
  $dbuser = "a5594340_test";
  $dbpass = "test123";
  $db = "a5594340_test";
  $tbl_name = "user"; 
  //connect
  $conn = mysql_connect($server, $dbuser, $dbpass);
  mysql_select_db($db, $conn);
  // Define $myusername and $mypassword 
  $myusername = $_POST['username']; 
  $mypassword = $_POST['password']; 
   
  // To protect MySQL injection (more detail about MySQL injection) 
  $myusername = stripslashes($myusername); 
  $mypassword = stripslashes($mypassword); 
  $myusername = mysql_real_escape_string($myusername); 
  $mypassword = mysql_real_escape_string($mypassword); 
   
  //$mypassword = md5($mypassword); // this is an encrypting the password 
   
  $sql = "SELECT * FROM $tbl_name WHERE username='$myusername' and password='$mypassword'"; 
  //echo ($sql);
  $result = mysql_query($sql); 
   
  // Mysql_num_row is counting table row 
  
  $count = mysql_num_rows($result); 
  // If result matched $myusername and $mypassword, table row must be 1 row 
   
  if ($count == 1) { 
     echo "success"; 
  } else { 
      echo "failed"; 
  } 
   
  ob_end_flush(); 
?>