<?php
require 'config.php';
	echo $_POST['id'];

	mysqli_query($link,'UPDATE postslabefore SET rating = rating+'.$_POST['value'].' WHERE id='.$_POST['id'].'');
?>