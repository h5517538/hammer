console.log('index')
define(['startMove','jquery','jquery-cookie'],function(startMovea,$){
	var main = function(){
		$(function(){
			sc_car();

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
		url:'data/9商品列表.json',
		success:function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`
					<li id = "${arr[i].id}">
						<a href="#">
							<div class='div${i}'></div>
							<h3>${arr[i].title}</h3>
							<p>${arr[i].describe}</p>
							<b>${arr[i].addition}</b>
							<dl class='dl${i}'>
							</dl>
							<span>${arr[i].price}</span>
							<button class='btn1' id = "${arr[i].id}">查看详情</button>
							<button class='btn2' id = "${arr[i].id}">加入购物车</button>
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
	//跳转详情
	$('.hot-b ul').on('click','li',function(){
			var id = this.id;
			var first = $.cookie('goods') == null? true : false;
			if(first){
				$.cookie('details', `[{id:${id},num:0}]`, {expires: 7});
			}else{
			var str = $.cookie('goods');
			var arr = eval(str);
			var same = false; //假设没有相同的数据
			for(var i = 0; i < arr.length; i++){
				if(arr[i].id == id){
					var cookieStr = JSON.stringify(arr);
					$.cookie('details',cookieStr, {expires: 7});
					same = true;
					break;
				}
			}
			if(!same){
				//之前没添加过
				var obj = {id: id, num: 0};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie('details', cookieStr, {expires: 7});
			}
		}
		window.location.href='goodsDetails.html'
	})
	//点击加入购物车
	$('.hot-b ul').on('click','.btn2',function(){
		var id = this.id;
		alert(id)
		var first = $.cookie('goods') == null? true : false;

		if(first){
				$.cookie('goods', `[{id:${id},num:1}]`, {expires: 7});
			}else{
				//2、判断之前是否添加过该商品
				var str = $.cookie('goods');
				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7});
						same = true;
						break;
					}
				}

				if(!same){
					//之前没添加过
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr, {expires: 7});
				}
			}
			sc_car();
			return false
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


	//滑动热们li
	$('.hot-b ul').on('mouseenter','li',function(){
		$(this).find('p').css('display','none')
		$(this).find('b').css('display','block')
		$(this).find('span').css('display','none')
		$(this).find('button').css('display','inline-block')
	})
	$('.hot-b ul').on('mouseleave','li',function(){
		$(this).find('p').css('display','block')
		$(this).find('b').css('display','none')
		$(this).find('span').css('display','block')
		$(this).find('button').css('display','none')
	})
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

	//滑过热门的小圆圈
	$('.hot-b ul').on('mouseenter','dd',function(){
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
