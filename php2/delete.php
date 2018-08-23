<?php 
	// 设置编码方式
	header("Content-type:text/html;charset=utf-8");
	//我要删除谁
	$id = $_GET['id'];
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

	//准备sql语句去进行删除
	$sql = "delete from qf_users where id = {$id}";
	// echo $sql;
	$res = mysql_query($sql);
	// var_dump($res);
	if($res){
		echo "删除成功<a href = 'userlish.php'>返回首页</a>";
	}else{
		echo '删除失败';
	}
	mysql_close($link);

 ?>