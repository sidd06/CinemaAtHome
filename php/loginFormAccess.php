<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$username = "root";
$password = "root";
$dbname  = "movieonrent";
$loginemail = $_GET["loginemail"];
$loginpass = $_GET["loginpass"];
$con = mysqli_connect(localhost,$username,$password,$dbname);
if (mysqli_connect_errno()){
    echo "Failed to connect to Mysql".mysqli_error();
}

$sql = "SELECT * FROM moviedata WHERE Email='$loginemail' AND Password='$loginpass'";
$result=mysqli_query($con, $sql);
$row=  mysqli_fetch_array($result);
if(! $result){
    echo "Login and Password mismatch";
}else
{echo $row['FirstName'];}
 
?>
