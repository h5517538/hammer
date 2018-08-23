<?php 
	// php链接数据库，总结为天龙八部
	// 设置编码方式
	header("Content-type:text/html;charset=utf-8");
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
	mysql_select_db('chuizi');

	//5、准备sql语句
	$sql = "select * from cz_user";

	//6、发送sql语句
	$res = mysql_query($sql);

	// var_dump($res);
	//7、处理结果集
	while($result = mysql_fetch_assoc($res)){
		var_dump($result);
	}
	// $result = mysql_fetch_assoc($res);
	// $result = mysql_fetch_assoc($res);

	// var_dump($result);

	//8、关闭数据库
	mysql_close();
 ?>