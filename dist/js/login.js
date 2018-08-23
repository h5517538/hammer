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
		})
	}
	return{
		main:main
	}
})
