
<?php 


$username = "root";
$password = "root";
$dbname  = "movieonrent";
$name = $_GET["firstname"];
$email = $_GET["email"];
$pass = $_GET["pass"];
$con = mysqli_connect(localhost,$username,$password,$dbname);

//Check connection
if (mysqli_connect_errno()){
    echo "Failed to connect to Mysql".mysqli_error();
}

$sql = "INSERT INTO moviedata values ('','$name','$pass','$email')";

if(!mysqli_query($con, $sql)){
    die('Error: ' .mysqli_error($con));
}
echo $name; 
?> 

 