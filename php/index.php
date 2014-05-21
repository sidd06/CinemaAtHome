<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        
        echo "hellowolrd";
        <form>
Name: <input type="text" name="fname">
<input type="submit">
</form>

<?php 
$name = $_REQUEST['fname']; 
echo $name; 

        ?>
    </body>
</html>
