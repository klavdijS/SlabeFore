    <?php

		$server = "localhost";
		$username = "root";
		$password = "root";
		$db = "slabefore";

		$link = mysqli_connect($server,$username,$password,$db);

		mysqli_set_charset($link,"utf8");
    ?>