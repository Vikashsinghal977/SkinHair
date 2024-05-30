<?php

$username = filter_input(INPUT_POST, 'username');
$userphone = filter_input(INPUT_POST, 'userphone');
$userdob = filter_input(INPUT_POST, 'userdob');

if (!empty($username)){
    if (!empty($userphone)){
        if (!empty($userdob)){
            $host= "localhost";
            $dbusername = "root";
            $dbpassword = "";
            $dbname = "skinheair";

            $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
            if (mysqli_connect_error()){
                die('connection Error('.mysqli_connect_errno().')'.mysqli_connect_error());
            }
            else{
                $sql = "INSERT INTO persone VALUE('$username', '$userphone', '$userdob')";
                if ($conn->query($sql)){
                    header("Location: ThankYou.html");
                }
                else{
                    echo("Error :");
                }
                
                $conn->close();
            }
        }
    }
}

?>