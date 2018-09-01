console.log('index')
define(['startMove','jquery','jquery-cookie'],function(startMovea,$){
	var main = function(){
		$(function(){
			sc_car()
	//获取导航菜单
	$.ajax({
			url: "data/1.json",
			success: function(arr){
				for(var i = 1; i < arr.length; i++){
					$(`
						<li class='li_${i}'>
							<a href="goodsList.html">${arr[i].title}</a>
							<i></i>
						</li>
						`).appendTo($('#header'));
				}
				$(`
					<li class='li_${0}'>
						<a href="index.html">${arr[0].title}</a>
						<i></i>
					</li>
						`).prependTo($('#header'));
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
		$('#div1').css({'display':'block'})
		$('#div1').stop().animate({
            'height': '425',
            'opacity': '1'
        })
	})
	$('#header').on('mouseleave','.li_1',function(){
		$('#div1').stop().animate({
            'height': '0',
            'opacity': '0'
        },function(){
        	$(this).css({'display':'none'})
        })
	})
	//鼠标滑过购物车
	$('#top .nav-aside a:nth-child(3)').mouseenter(function(){
		$('.havecar').css('display','block')
		sc_msg();
		return false
	})
	$('#top .nav-aside a:nth-child(3)').mouseleave(function(){
		$('.havecar').css('display','none')
		$('.none').css('display','none')
		return false
	})
	//滑过商品
	$('.havecar .dlt').on('mouseenter','dd',function(){
		$(this).find('.dd-r').css('display','block')
		$(this).css('background','#fcfcfc')
		return false
	})
	$('.havecar .dlt').on('mouseleave','dd',function(){
		$('.dd-r').css('display','none')
		$(this).css('background','#fff')
		return false
	})
	//滑过商品的X号
	$('.havecar .dlt').on('mouseenter','dd .dd-r',function(){
		$(this).css('backgroundPosition','-25px')
		return false
	})
	$('.havecar .dlt').on('mouseleave','dd .dd-r',function(){
		$(this).css('backgroundPosition','0')
		return false
	})
	//点击当前X
	$('.havecar .dlt').on('click','dd .dd-r',function(){
		var id = this.id;
		// alert(id)
		sc_msg()
		sc_car()
		4
		var del_arr = eval($.cookie('goods'));
		for (var i = 0; i < del_arr.length; i++) {
			if(del_arr[i].id == id){
				del_arr.splice(i, 1);
				var cookieStr = JSON.stringify(del_arr);
				$.cookie('goods', cookieStr, {expires: 7});
			}
		}
		sc_car()
	})
	//鼠标滑过锤子应用
	$('.use-b ul').on('mouseenter','li',function(){
		$(this).find('.show').css('display','none')
		$(this).find('.hide').css('display','block')
	})
	$('.use-b ul').on('mouseleave','li',function(){
		$(this).find('.show').css('display','block')
		$(this).find('.hide').css('display','none')
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
				<dl class='dld'></dl>
				`).appendTo($('.form'))
			for(var i = 0; i < arr.length; i++){
				$(`
					<dd><a href="#">${arr[i].title}</a></dd>
					`).appendTo($('.dld'));
			}
			$("input").focus(function(){
			  $(".dld").css("display","block");
			  $('form span').css("display","none");
			});
			$("input").blur(function(){
			  $(".dld").css("display","none");
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
	$.ajax({
		url:'data/5热门商品.json',
		success:function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`
					<li>
						<a href="goodsDetails.html">
							<div class='div${i}'></div>
							<h3>${arr[i].title}</h3>
							<p>${arr[i].describe}</p>
							<b>${arr[i].addition}</b>
							<dl class='dl${i}'>
							</dl>
							<span>${arr[i].price}</span>
							<button>查看详情</button>
						</a>
					</li>	
					`).appendTo($('.hot-b ul'));
				var item = arr[i];
				for(var j = 0; j < item.size.length; j++){
					$(`
						<img src='${item.size[j].picture}' class="img${j}" alt="">
						`).appendTo($(`.div${i}`))
					$(`
						<dd class="active${j}"><img src="${item.size[j].color}" alt=""></dd>
						`).appendTo($(`.dl${i}`))
				}
			}
			
		}
	})
	//循环五块
	$.ajax({
		url:'data/6五块.json',
		success:function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`
					<section id='main${i+1}' class="margin">
						<div class="main-t">
							<h3>${arr[i].title}</h3>
						</div>
						<div class="main-b">
							<ul>

							</ul
						</div>
					</section>
					`).appendTo($('#main'));
				$(`
					<li>
						<a href="#">
							<img src="${arr[i].list[0].img}" alt="">
						</a>
					</li>
					`).prependTo($(`#main${i+1} ul`))
				var item = arr[i];
				for(var j = 1; j < item.list.length; j++){
					$(`
						<li>
							<a href="goodsDetails.html">
								<div class='mdiv${i}${j}'></div>
								<h3>${item.list[j].title}</h3>
								<p>${item.list[j].describe}</p>
								<b>${item.list[j].addition}</b>
								<dl class='mdl${i}${j}'>
								</dl>
								<span>${item.list[j].price}</span>
								<button>查看详情</button>
							</a>
						</li>
						`).appendTo($(`#main${i+1} ul`))
					var ipex = item.list[j];
					for(var k = 0; k < ipex.size.length; k++){
						$(`
							<img src='${ipex.size[k].picture}' class="mimg${k}" alt="">
						`).appendTo($(`.mdiv${i}${j}`))
						$(`
							<dd class="active${k}"><img src="${ipex.size[k].color}" alt=""></dd>
						`).appendTo($(`.mdl${i}${j}`))
					}
				}

			}
			
		}
	})
	//循环应用
	$.ajax({
		url:'data/7应用.json',
		success:function(arr){
			$(`
					<li>
						<a href="#">
							<div class="show">
								<i style='background: url(${arr[0].img}) no-repeat;
								margin:35px auto 28px auto;width:96px;height:96px;display: block;'></i>
								<h3>${arr[0].title}</h3>
								<p>${arr[0].describe}</p>
								<img src="images/${arr[0].picture}" alt="">
							</div>
							<div class="hide">
								<h4>${arr[0].windows}</h4>
								<h4>${arr[0].mac}</h4>
								<b>${arr[0].know}r</b>
							</div>
						</a>
					</li>
					`).prependTo($('.use-b ul'))
			for(var i = 1; i < arr.length; i++){
				$(`
					<li>
						<a href="#">
							<div class="show">
								<i class='i${i}';style='background: url(${arr[i].img}) no-repeat;
								margin:35px auto 28px auto;width:96px;height:96px;display: block;'></i>
								<h3>${arr[i].title}</h3>
								<p>${arr[i].describe}</p>
								<img src="images/${arr[i].picture}" alt="">
							</div>
							<div class="hide">
								<em style='width:120px;height: 120px;background: url(${arr[i].qr}) no-repeat center;
								display: block;margin:64px auto 40px auto;'></em>
								<p>${arr[i].scan}</p>
								<b>${arr[i].know}</b>
							</div>
						</a>
					</li>
					`).appendTo($('.use-b ul'))
			}
		}
	})
	$.ajax({
		url:'data/8论坛精选.json',
		success:function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`
					<li>
						<a href="#">
							<img src='${arr[i].img}'alt="">
							<h3>${arr[i].title}</h3>
							<p>${arr[i].describe}</p>
							<span>${arr[i].know}</span>
						</a>
					</li>
					`).appendTo($('.forum-b ul'))
			}
		}
	})
	// 购物车数字
		function sc_car(){
			var str = $.cookie("goods");
			if(str){
				var arr = eval(str);
				var sum = 0;
				for(var i = 0; i < arr.length; i++){
					sum += arr[i].num;
				}
				// alert(sum)
				$(".sc_num").html(sum);
				$(".emn").html(sum);
			}
		}
	//显示购物车内商品
		function sc_msg(){
			$.ajax({
				url:'data/9商品列表.json',
				success: function(arr){
					$(".havecar .dlt").html("");
					var aPrice = 0
					var cookie_arr = eval($.cookie('goods'));
					if(cookie_arr != null){
						for(var i = 0; i < cookie_arr.length; i++){
						$(`<dd>
							<div class='dd-l'>
								<img src="${arr[cookie_arr[i].id].size[0].picture}" alt="">
							</div>
							<div class="dd-c">
								<h3>${arr[cookie_arr[i].id].title}</h3>
								<h4>绿色</h4>
								<p>${arr[cookie_arr[i].id].price}<em>x${cookie_arr[i].num}</em></p>
							</div>
							<div class="dd-r" id='${cookie_arr[i].id}'>
								
							</div>
						</dd>`).prependTo($(".havecar .dlt"));
						var num=arr[cookie_arr[i].id].price
						var nums= num.replace(/[^0-9]/ig,"")/100;
						aPrice+=nums*(cookie_arr[i].num)
					}
					$(".emm").html(aPrice);
					if(aPrice==0){
						$('.none').css({'display':'block'})
						sc_car()
					}
				}else{
					$('.none').css({'display':'block'})
				}
				}
			})
		}
	//滑动热们li
	$('.hot-b ul').on('mouseenter','li',function(){
		$(this).find('p').css('display','none')
		$(this).find('b').css('display','block')
		$(this).find('span').css('display','none')
		$(this).find('button').css('display','block')
	})
	$('.hot-b ul').on('mouseleave','li',function(){
		$(this).find('p').css('display','block')
		$(this).find('b').css('display','none')
		$(this).find('span').css('display','block')
		$(this).find('button').css('display','none')
	})
	//滑动循环了5次的li
	$('#main').on('mouseenter','li',function(){
		$(this).find('p').css('display','none')
		$(this).find('b').css('display','block')
		$(this).find('span').css('display','none')
		$(this).find('button').css('display','block')
	})
	$('#main').on('mouseleave','li',function(){
		$(this).find('p').css('display','block')
		$(this).find('b').css('display','none')
		$(this).find('span').css('display','block')
		$(this).find('button').css('display','none')
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

	//滑过热门的小圆圈
	$('.hot-b ul').on('mouseenter','dd',function(){
		$(this).closest('dl').find('dd').attr('class','')
		$(this).attr('class','active0')
		var index = $(this).index()
		$(this).closest('li').find('div img').css('display','none')
		$(this).closest('li').find('div img').eq(index).css('display','block')
	})
	$('#main').on('mouseenter','dd',function(){
		$(this).closest('dl').find('dd').attr('class','')
		$(this).attr('class','active0')
		var index = $(this).index()
		$(this).closest('li').find('div img').css('display','none')
		$(this).closest('li').find('div img').eq(index).css('display','block')
	})
		
})
	}
	return{
		main:main
	}
})
