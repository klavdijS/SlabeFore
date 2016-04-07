<?php

$server = "localhost";
$username = "root";
$password = "root";
$db = "slabefore";

$link = mysqli_connect($server,$username,$password,$db);

mysqli_set_charset($link,"utf8");


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
        /*$row_array['id'] = $row['id'];
        $row_array['besedilo'] = $row['besedilo'];
        $row_array['rating'] = $row['rating'];
        $row_array['avtor'] = $row ['avtor'];
        $row_array['datum'] = $row['datum'];
        $row_array['sort'] = $row['sort'];*/
        $encode [] = $row;
    }
}
//$json = json_encode($encode);
echo json_encode($encode);



$link -> close();

?>