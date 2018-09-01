// var oMark1 = document.querySelectorAll(".mark1");
// //console.log(oMark1);
// var oFloat = document.querySelectorAll(".float");
// var oIntro = document.getElementById("intro-c");

// var oBigpic = document.getElementById("big_pic"); 
// // var oBigimg = oBigpic.getElementsByTagName("img");


// //给遮罩添加移入移出的事件
// for(var i = 0; i < oMark1.length; i++){

// 	oMark1[i].index = i;
// 	oMark1[i].onmouseenter = function(){
// 		var oBigpic = document.getElementById("big_pic"); 
// 		this.style.zIndex = "2";
// 		oFloat[this.index].style.display = "block";
// 		oBigpic.style.display = "block";

// 	}
// 	oMark1[i].onmouseleave = function(){
// 		var oBigpic = document.getElementById("big_pic"); 
// 		oFloat[this.index].style.display = "none";
// 		oBigpic.style.display = "none";

// 	}
// 	//给遮罩添加移动事件。给float做鼠标跟随的效果和边界
// 	oMark1[i].onmousemove = function(event){
// 		console.log(this.index)
// 		var e = event || window.event;
// 		//做ofloat的跟随事件
// 		var oIntro = document.getElementById("intro-c");
// 		var left = e.pageX - oIntro.offsetLeft  - oFloat[this.index].offsetWidth/2;
// 		var top = e.pageY - oIntro.offsetTop  - oFloat[this.index].offsetHeight/2;
// 		console.log(oIntro.offsetLeft)
// 		//设置左边界
// 		if(left < 0){
// 			left = 0;
// 		}else if(left > oMark1[this.index].offsetWidth - oFloat[this.index].offsetWidth){
// 			left = oMark1[this.index].offsetWidth - oFloat[this.index].offsetWidth;
// 		}
// 		//设置上下的边界
// 		if(top < 0){
// 			top = 0;
// 		}else if(top > oMark1[this.index].offsetHeight - oFloat[this.index].offsetHeight){
// 			top = oMark1[this.index].offsetHeight - oFloat[this.index].offsetHeight;
// 		}
// 		//设置float的left和top的值
// 		oFloat[this.index].style.left = left + "px";
// 		oFloat[this.index].style.top = top + "px";
// 		//设置滑块在小图中的比列
// 		var pX = left / (oMark1[this.index].offsetWidth - oFloat[this.index].offsetWidth);
// 		var pY = top / (oMark1[this.index].offsetHeight - oFloat[this.index].offsetHeight);
// 		//console.log(pX,pY);
// 		//设置大图的移动范围（两个的比列要相同，因为图是比框要大的，图要往左移动）
// 		var oShoww = document.getElementById("showw"); 
// 		var oBigpic = document.getElementById("big_pic"); 
// 			oShoww.style.left = -pX *(oShoww.offsetWidth - oBigpic.offsetWidth) + "px";
// 			oShoww.style.top = -pY * (oShoww.offsetHeight - oBigpic.offsetHeight) + "px";
// 	}
// }