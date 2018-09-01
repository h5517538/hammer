console.log('index')
define(['register1','jquery','jquery-cookie'],function(register1,$){
	var main = function(){
		$(function(){
			$('#main-b div').click(function(){
				$(this).siblings('div').css('borderColor','#dbdcdc')
				$(this).css('borderColor','#6b93f1')
				$('.red').css('borderColor','#d16d62')
				return false
			})
			$('#pwd').focus(function(){
				$('h4').html('密码长度 6~16 位，数字、字母和符号至少包含两种');
				$('h4').css('display','block')
			})
			$('#pwds').focus(function(){
				$('h5').html('密码长度 6~16 位，数字、字母和符号至少包含两种');
				$('h5').css('display','block')
			})
			$(document).click(function(){
				$('#main-b div').css('borderColor','#dbdcdc')
				$('.red').css('borderColor','#d16d62')
			})
			$('#main-b div').mouseenter(function(){
				$(this).stop().animate({
					'opacity': '1',
				})
			})
			$('#main-b div').mouseleave(function(){
				$(this).stop().animate({
					'opacity': '0.618',
				})
			})
			var isYes = true
			$('.check .check-l i').click(function(){
				if(isYes==false){
					$('.check .check-l i').css('background-position','0 2px')
					isYes = true
				}else{
					$('.check .check-l i').css('background-position','0 -18px')
					isYes = false
				}
			})
			$('#btn').click(function(){
				alert('111')
				if($('#phone').attr('class') == 'red' || $('#passWord').attr('class') == 'red' || $('#passWords').attr('class') == 'red' ){
					alert("请检查您输入的信息！");
				}else if(isYes==false){
					alert("您不同意");
				}else{
				var username=$('#iphone').val();
				var password=$("#pwd").val();
				if(username!=""&&password!=""){
					$.ajax({
						type:"POST",
						url:"php/doinsert.php",
						dataType:"JSON",
						data:{
							"username":username,
							"password":password
						},
						success:function(data){
							switch(data){
								case 1://用户已存在
									alert("该用户已存在！请换一个用户名注册。")
									break;
								case 2://注册成功
									alert("注册成功！");
									window.location.assign('login.html')
									break;
							}
						},
						error:function(data){
							alert('123')
							alert(data)
						}
					})
				}else{
					alert("请检查您的输入！");
				}
			}
			})
		})
	}
	return{
		main:main
	}
})
