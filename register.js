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
		})
	}
	return{
		main:main
	}
})
