<?php
	// local
	$server   = "localhost";
	$username = "root";
	$password = "";
	$database = "sisterdb";
	mysql_connect($server,$username,$password) or die("Koneksi gagal");
	mysql_select_db($database) or die("Database tidak bisa dibuka");
?>