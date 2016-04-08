<?php

require 'config.php';


$query = "SELECT * FROM postslabefore";

$result = mysqli_query($link,$query);


if (!$link) {

    die("connection failed :" . mysqli_connect_error());
}

$encode = array();
$row_array = array();
$json = array();

if ($result ->num_rows > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $encode [] = $row;
    }
}

echo json_encode($encode);



$link -> close();

?>