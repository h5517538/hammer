<?php 
	// 设置编码方式
	header("Content-type:text/html;charset=utf-8");
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

	$sql = "select * from qf_users where id = {$id}";

	$res = mysql_query($sql);

	$row = mysql_fetch_assoc($res);
	// var_dump($row);

 ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<form action="doupdate.php" method = 'post' enctype = 'application/x-www-form-urlencoded'>
			<!-- 通过隐藏表单的方式去传某一些数据 -->
			<input type="hidden" name = 'id' value = "<?php echo $row['id'] ?>">
			username: <input type="text" name = 'username' value = "<?php echo $row['username'] ?>" /><br/>
			password: <input type="text" name = 'password' value = "<?php echo $row['password'] ?>" /><br/>
			<input type="submit" value = '提交'/>
		</form>
	</body>
</html>