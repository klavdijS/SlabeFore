<?php
/**
 * Created by PhpStorm.
 * User: Klavdij
 * Date: 11. 04. 2016
 * Time: 23:02
 */
require 'config.php';

if (isset($_POST["post_submit"])){

    $avtor = $_POST['user'];
    $besedilo = $_POST['comment'];

    $query = "INSERT INTO postslabefore (id,besedilo,rating,avtor,datum,sort)VALUES(NULL, '$besedilo', 0, '$avtor', CURRENT_TIMESTAMP,0)";
    
    mysqli_query($link,$query);


}

$link ->close();

?>