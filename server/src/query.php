<?php

session_start();
require('db_config.php');

$myArray = array();
if ($result = $mysqli->query("SELECT * FROM entries")) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($myArray);
}

$result->close();
$mysqli->close();
?>