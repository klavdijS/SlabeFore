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

//$link ->close();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>SlabeFore</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link href="bootstrap-3.3.6-dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Arvo:400,400italic,700,700italic' rel='stylesheet' type='text/css'>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="container">

    <div class="page-header">
        <h1 id="title">SlabeFore.Si</h1>
        <nav class="navbar navbar-default" role="navigation">
            <div class="navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="index.php">Slabe fore</a></li>
                    <li><a href="novefore.php">Nove fore</a></li>
                    <li><a href="objavi.php">Objavi</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </nav>
    </div>

    <div class="content">
        <center>
            <div style="margin-top: 150px">
                <h2>Tvoja fora je bila objavljena.<br>Hvala!</h2>
            </div>

        </center>
    </div>
</div>

</div><!-- /.container -->

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
<script src="script.js"></script>
<script src="rate.js"></script>
<script src="touchmouse.js"></script>
<script type="text/javascript">
    $(document).ready(function () {

        window.setTimeout(function () {
            location.href = "index.php";
        }, 2300);
    });

</script>

</body>
</html>
