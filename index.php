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
                    <li><a href="#">Slabe fore</a></li>
                    <li><a href="novefore.php">Nove fore</a></li>
                    <li><a href="objavi.php">Objavi</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </nav>
    </div>

    <div class="content">
        <div class="post" id = "glasujBtn1">
            <div class="text">
                <p id="test12">Lorem ipsum11 dolor sit amet, </p>
            </div>   
            <div class="rating">
                <div class="glasovanje">
                    <div class= "glasuj" id = "glasujBtn">Glasuj</div>
                </div>
                <div class="score" id= "1fora">
                    <p>-129</p>
                </div>
            </div>
            <div class="avtor">
                <p >-Klemen, 12.4.2016</p>

            </div>
        </div>

        <div class="post" id = "glasujBtn2" style ="display:none;">
            <div class="text">
                <p id="glasT">Lorem ipsum11 dolor sit amet, </p>
            </div>   
        <!--
            <div class="rating">
                <div class="glasovanje">
                    <div class= "glasuj" id = "glasujBtn">Glasuj</div>
                </div>
                <div class="score" id= "glasS">
                    <p>-129</p>
                </div>
            </div>
        -->
        </div>

        <div class="space"></div>

        <div class="post">
            <div class="text">
                <p id="test22" >Lorem ipsum dolor sit amet, Lorem ipsum dolor sit </p>
            </div>   
            <div class="rating">
                <div class="glasovanje">
                    <a class="button">
                        <i class="material-icons">remove</i>
                    </a>
                     <div class="spaceBtn"></div>
                     <a class="button">
                        <i class="material-icons">add</i>
                    </a>
                </div>
                <div class="score">
                    <p >-120</p>
                </div>
            </div>
            <div class="avtor">
                <p >-Klemen, 12.4.2016</p>

            </div>
        </div>

        <div class="space"></div>

        <div class="post">
            <div class="text">
                <p id="test32" >Lorem ipsum dolor sit amet, Lorrem ipsum dolor sem ipsum dolor sit ametrem ipsum dolor s,</p>
            </div>   
            <div class="rating">
                <div class="glasovanje">
                    <a class="button">
                        <i class="material-icons">remove</i>
                    </a>
                     <div class="spaceBtn"></div>
                     <a class="button">
                        <i class="material-icons">add</i>
                    </a>
                </div>
                <div class="score">
                    <p >-120</p>
                </div>
            </div>
            <div class="avtor">
                <p >-Klemen, 12.4.2016</p>

            </div>
        </div>
        <div class="space"></div>
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

</body>
</html>
