<?php 
	header('Content-type:text/html;charset=utf-8');
	$link = mysql_connect('localhost','root','123456');
	if(!$link){
		echo '失败'
		exit;
	}else{
		echo 'success'
	}
 ?>