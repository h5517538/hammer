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
	mysql_select_db('qfqd1803');

	//5、准备sql语句
	$sql = "select * from qf_users";

	//6、发送sql语句
	$res = mysql_query($sql);

	echo "<a href = 'insert.html'>添加</a>";
	// var_dump($res);
	echo "<table width = '600' border = '1'>";
	echo "<tr><th>编号</th><th>用户名</th><th>密码</th><th>创建时间</th><th>操作</th></tr>";
	//7、处理结果集
	while($row = mysql_fetch_assoc($res)){
		echo '<tr>';
		echo "<td>{$row['id']}</td>";
		echo "<td>{$row['username']}</td>";
		echo "<td>{$row['password']}</td>";
		echo "<td>{$row['create_time']}</td>";
		echo "<td><a href = 'delete.php?id={$row['id']}'>删除</a>/ <a href = 'update.php?id={$row['id']}'>修改</a></td>";
		echo '</tr>';
	}
	echo "</table>";
	

	//8、关闭数据库
	mysql_close();
 ?>