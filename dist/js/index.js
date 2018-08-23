console.log('index')
define(['startMove','jquery','jquery-cookie'],function(startMovea,$){
	var main = function(){
		$(function(){
	//获取导航菜单
	$.ajax({
			url: "data/1.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`
						<li class='li_${i}'>
							<a href="#">${arr[i].title}</a>
							<i></i>
						</li>
						`).appendTo($('#header'));
				}
				$(`<div id='div1'>
					<dl></dl>
					</div1>`).appendTo($('.li_1'))
				var children = arr[1].child
				for(var j = 0; j < children.length; j++){
					$(`
						<dd>
							<a href="#">
								<img src="${children[j].img}" alt="">
								<p>${children[j].title}</p>
								<h3>${children[j].price}</h3>
							</a>
						</dd>
					`).appendTo($('#div1 dl'));
				}
				
			}
		})
	//鼠标滑动导航栏
	$('#header').on('mouseenter','.li_1',function(){
		$('#div1').stop().animate({
            'height': '425',
            'opacity': '100',
            'display': 'block'
        })
	})
	$('#header').on('mouseleave','.li_1',function(){
		$('#div1').stop().animate({
            'height': '0',
            'opacity': '0',
            'display': 'none'
        },300)
	})
	//鼠标滑过购物车
	$('#top .nav-aside a:nth-child(3)').mouseenter(function(){
		$('.none').css('display','block')
	})
	$('#top .nav-aside a:nth-child(3)').mouseleave(function(){
		$('.none').css('display','none')
	})
	$.ajax({
		url:'data/2.json',
		success:function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`
					<li style = 'opacity: 1;'><a href="#"><img src="${arr[i].img}" alt="广告${i}" /></a></li>
					`).appendTo($('#banner ul'));
				$(`
					<li class='active${i}'></li>
					`).appendTo($('#banner ol'))
			}
			$(`
				<li style = 'opacity: 1;'><a href="#"><img src="${arr[0].img}" alt="广告${0}" /></a></li>
				`).appendTo($('#banner ul'));
			var aBtns = $("#banner").find("ol").find("li");
			var aLis = $('#banner ul li')
			aBtns.click(function(){
				aBtns.attr("class", "");
				$(this).attr("class", 'active');
				var index = $(this).index()
				aLis.stop().animate({opacity: 0}).eq(index).stop().animate({opacity: 1})
			})
			var iNow = 0;
			function tab(){
					//既要切换按钮，还要切换图片
					aBtns.attr('class', '');
					aBtns.eq(iNow).attr("class", 'active');
					aLis.stop().animate({opacity: 0}).eq(iNow).stop().animate({opacity: 1}),function(){
						if(iNow == aBtns.size()){
							aLis[0].css('opacity',1)
							iNow = 0;
						}
					};
			}
			function timerFunc(){
					iNow++;
					document.title = iNow;
					tab();
					//对当前iNow的值进行判断
					if(iNow == aBtns.size()){
						aBtns.eq(0).attr('class', 'active');
						iNow = 0;
					}
			}
			timer = setInterval(timerFunc, 2000);
		}
	})
	$.ajax({
		url:'data/3search.json',
		success:function(arr){
			$(`
				<dl class='dl1'></dl>
				`).appendTo($('.form'))
			for(var i = 0; i < arr.length; i++){
				$(`
					<dd><a href="#">${arr[i].title}</a></dd>
					`).appendTo($('.dl1'));
			}
			$("input").focus(function(){
			  $(".dl1").css("display","block");
			  $('form span').css("display","none");
			});
			$("input").blur(function(){
			  $(".dl1").css("display","none");
			  $('form span').css("display","block");
			});

		}
	})
	$.ajax({
		url:'data/4广告.json',
		success:function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`
					<li>
						<a href="#"><img src="${arr[i].img}" alt=""></a>
					</li>
					`).appendTo($('#adv ul'))
			}
		}
	})
	//滑动热们li
	$('.hot-b li').mouseenter(function(){
		$(this).find('p').css('display','none')
		$(this).find('b').css('display','block')
		$(this).find('span').css('display','none')
		$(this).find('div').css('display','block')
	})
	$('.hot-b li').mouseleave(function(){
		$(this).find('p').css('display','block')
		$(this).find('b').css('display','none')
		$(this).find('span').css('display','block')
		$(this).find('div').css('display','none')
	})
	//热门的上方左右箭头
	$('.hot-t span i:nth-child(1)').click(function(){
			$('.hot-b ul').stop().animate({left: 0}, 500)
			$('.hot-t span i:nth-child(2)').attr('class','')
			$(this).attr('class','click')
	});	
	$('.hot-t span i:nth-child(2)').click(function(){
		$('.hot-b ul').stop().animate({left: -1224}, 500)
		$('.hot-t span i:nth-child(1)').attr('class','')
		$(this).attr('class','click')
	});

	$(function(){
		var nav=$("header"); //得到导航对象
		var win=$(window); //得到窗口对象
		var sc=$(document);//得到document文档对象。
		win.scroll(function(){
		  if(sc.scrollTop()>=101){
		    nav.addClass("fixednav"); 
		  }else{
		   nav.removeClass("fixednav");
		  }
		})  
		})
	滑过热门的小圆圈
	// $('.hot-b li dl dd').mouseenter(function(){
	// 	console.log('111')
	// 	$(this).closest('dl').find('dd').attr('class','')
	// 	$(this).attr('class','active')
	// })
	// window.onload = function(){
	// 			var oLis1 = document.getElementById('li_1')
	// 			var oDiv = oLis1.getElementsByTagName('div');
	// 			oLis1.onmouseover = function(){
	// 					var oDiv = oLis1.getElementsByTagName('div')[0];
	// 					startMove(oDiv, {
	// 						height: 425,
	// 						opacity: 100
	// 					})
	// 				}
	// 				oLis1.onmouseout = function(){
	// 					var oDiv = oLis1.getElementsByTagName('div')[0];
	// 					startMove(oDiv, {
	// 						height: 0,
	// 						opacity: 0
	// 					})

	// 				}
	// 		}
})
	}
	return{
		main:main
	}
})
