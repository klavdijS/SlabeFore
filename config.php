    <?php

		$server = "localhost";
		$username = "root";
		$password = "root";
		$db = "slabefore";

		$link = mysqli_connect($server,$username,$password,$db);

		if (!$link) {
			die('Could not connect: ' .mysql_error());
		}
		mysqli_set_charset($link,"utf8"); 
	?>