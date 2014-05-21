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
        <style>
            .error {
                color: red;
            }
        </style>
        
         <?php
        // define variables and set to empty variables
        $namErr=$emailErr=$genderErr="";
        
        if ($_SERVER["REQUEST_METHOD"]=="POST")
        {
            if(empty($_POST["name"])){
               $namErr="Please enter name. " ;
            }else{
                $namErr=$_POST["name"];
            }
            
            if(empty($_POST["email"])){
                $emailErr="Please enter Email address.";
            }else{
                $emailErr=$_POST["email"];
            }
            
            if(empty($_POST["gender"])){
                $genderErr="Gender is required.";
            }else{
                $genderErr=$_POST["gender"];
            }
        }
        
        ?>
        <form method="post" action="<?php echo $_SERVER[PHP_SELF] ?>">
            Name: <input type="text" name="name">
            <span class="error">* <?php echo $namErr; ?></span>
            <br><br>
            Email: <input type="text" name="email">
            <span class="error">* <?php echo $emailErr; ?></span>
            <br><br>
            Gender:
            <input type="radio" name="gender" value="female">Female
            <input type="radio" name="gender" value="male">Male
            <span class="error">* <?php echo $genderErr; ?></span> 
            <br><br>
            Comment: <textarea name="comment" rows="5" cols="40"></textarea>
            <br>
            <button type="submit" name="submit" value="Submit">Submit</button>
             
        </form>
        <div>
            Name: <?php echo $_POST["name"]; ?>
            <br>
            Email: <?php echo $_POST["email"]; ?>
            <br>
            Gender: <?php echo $_POST["gender"]; ?>
            
        </div>
    </body>
</html>
