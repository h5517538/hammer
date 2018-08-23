<?php 
	header("Content-type:text/html;charset=utf-8");
	//通过post获取数据
	$id = $_POST['id'];
	$username = $_POST['username'];
	$password = $_POST['password'];
	$time = time();

	//1、链接数据库
	$link = mysql_connect('localhost', 'root', '123456');
	//2、判断是否链接成功
	if(!$link){
		echo '数据库链接失败';
		exit; //退出
	}

	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择用哪个数据库
	mysql_select_db('qfqd1803');

	//5、准备sql
	$sql = "update qf_users set username='{$username}',password='{$password}',create_time={$time} where id={$id}";
	// echo $sql;
	$res = mysql_query($sql);

	if($res){
		echo "修改成功<a href = 'userlish.php'>返回首页</a>";
	}else{
		echo '修改失败';
		exit;
	}
	mysql_close($link);
 ?>