<?php
	header("Content-type: text/html; charset=UTF-8");
	session_start();
	$userName = $_POST['username'];
	$passWord = $_POST['password'];
	$con=mysql_connect('localhost','root','123456');
	if(!$con){
	    die('error:'.mysql_error());
	}
	mysql_select_db('chuizi');
	$result=mysql_query("select * from cz_user where username='$userName'");
    if($row=mysql_fetch_assoc($result)){
        echo 1;//用户已存在
    }else{//注册成功
        mysql_query("insert into `cz_user` (`username`,`password`) values ('$userName','$passWord')");
        echo 2;
    }
?>