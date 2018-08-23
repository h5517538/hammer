var iPhone = document.getElementById('iphone')
var Phone = document.getElementById('phone')
var iLook = document.getElementById('look')
var iLookp = document.getElementById('lookp')
var iLookps = document.getElementById('lookps')
var iPassWord = document.getElementById('passWord')
var iPassWords = document.getElementById('passWords')
var iMainb = document.getElementById('main-b')
var oMessage = document.getElementById('message')
var oPwd = document.getElementById('pwd')
var oPwds = document.getElementById('pwds')
var oH4 = document.getElementsByTagName('h4')[0]
var oH5 = document.getElementsByTagName('h5')[0]
iPhone.onblur = function(){
	var oValue = iPhone.value.replace(/ /g,"");
	iPhone.value = oValue;
	if(oValue!=''){
		if(!/^1\d{10}$/.test(oValue)){
			Phone.style.borderColor = '#d16d62'
			Phone.classList.add('red')
			iLook.style.display = 'block'
			iLook.innerHTML = '手机号格式错误';
		}
	}
}
iPhone.oninput = function(){
	iLook.style.display = 'none'
	iLook.innerHTML = '';
	Phone.style.borderColor = '#dbdcdc'
	Phone.classList.remove('red')
}
oPwd.oninput = function(){
	oH4.style.display = 'none'
	oH4.innerHTML = '';
	iPassWord.style.borderColor = '#dbdcdc'
	iLookp.style.display = 'none'
	iLookp.innerHTML = '';
	iPassWord.classList.remove('red')
}
oPwds.oninput = function(){
	oH5.style.display = 'none'
	oH5.innerHTML = '';
	iPassWords.style.borderColor = '#dbdcdc'
	iLookps.style.display = 'none'
	iLookps.innerHTML = '';
	iPassWords.classList.remove('red')
}
oPwd.onblur = function(){
	var oValue = oPwd.value
	if(oValue!=''){
		if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/.test(oValue)){
			iLookp.style.display = 'block'
			iLookp.innerHTML = '密码格式错误';
			iPassWord.style.borderColor = '#d16d62'
			iPassWord.classList.add('red')
			oH4.innerHTML = '密码长度 6~16 位，数字、字母和符号至少包含两种';
			oH4.style.display = 'block'
		}
	}
}
oPwds.onblur = function(){
	var oValue = oPwds.value
	if(oValue != oPwd.value){
		iPassWords.style.borderColor = '#d16d62'
		oH5.innerHTML = '密码长度 6~16 位，数字、字母和符号至少包含两种';
		oH5.style.display = 'block'
		iPassWords.classList.add('red')
	}
}
		//判断一个字符是否是数字、字母和下划线
