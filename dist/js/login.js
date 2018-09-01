console.log('index')
define(['login1','jquery','jquery-cookie'],function(login1,$){
	var main = function(){
		$(function(){
			$('.margin div').click(function(){
				$(this).siblings('div').css('borderColor','#dbdcdc')
				$(this).css('borderColor','#6b93f1')
				$('.red').css('borderColor','#d16d62')
				return false
			})
			$(document).click(function(){
				$('.margin div').css('borderColor','#dbdcdc')
				$('.red').css('borderColor','#d16d62')
			})
			var isYes = true
			$('#main .check .check-l i').click(function(){
				if(isYes==false){
					$('#main .check .check-l i').css('background-position','0 2px')
					isYes = true
				}else{
					$('#main .check .check-l i').css('background-position','0 -18px')
					isYes = false
				}
			})
			$('.margin div').mouseenter(function(){
				$(this).stop().animate({
					'opacity': '1',
				})
			})
			$('.margin div').mouseleave(function(){
				$(this).stop().animate({
					'opacity': '0.618',
				})
			})
			$('#btn').click(function(){
				if($('#userName').attr('class') == 'red'){
					alert("请检查您输入的账号！");
				}else{
				var username=$('#userName input').val();
				var password=$("#passWord input").val();
				if(username!=""&&password!=""){
					$.ajax({
						type:"POST",
						url:"php/mysql.php",
						dataType:"JSON",
						data:{
							"username":username,
							"password":password
						},
						success:function(data){
							alert(data)
							switch(data){
								case 0://success
									alert("登陆成功");
									window.location.assign('index.html')
									break;
								case 1://密码错误
									alert("密码错误！");
									break;
								case 2://用户不存在
									alert("该用户不存在！");
									break;
								
								default:
								alert(data)
							}
							
						},
						error:function(data){
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
