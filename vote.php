<?php
require 'config.php';
	echo $_POST['id'];
	$expire = 24*3600; // 1 day
	mysqli_query($link,'UPDATE postslabefore SET rating = rating+'.$_POST['value'].' WHERE id='.$_POST['id'].'');
?>