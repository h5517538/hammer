// alert('123')
var oUser = document.getElementById('userName')
var iUser = oUser.getElementsByTagName('input')[0]
var iLook = document.getElementById('look')
var oBtn = document.getElementById('btn')
var oPwd = document.getElementById('passWord')
var iPwd = oPwd.getElementsByTagName('input')[0]
iUser.onblur = function(){
	var oValue = iUser.value.replace(/ /g,"");
	iUser.value = oValue;
	if(oValue!=''){
		if(!/^1\d{10}$/.test(oValue) && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(oValue)){
			oUser.style.borderColor = '#d16d62'
			oUser.classList.add('red')
			iLook.style.display = 'block'
			iLook.innerHTML = '手机号/邮箱格式错误';
		}else{
			oUser.classList.add('green')
		}
	}
	iUser.oninput = function(){
		iLook.style.display = 'none'
		iLook.innerHTML = '';
		oUser.style.borderColor = '#dbdcdc'
		oUser.classList.remove('red')
	}

}



