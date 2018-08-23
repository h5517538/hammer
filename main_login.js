console.log('jiazai');
require.config({
	paths:{
		'jquery':'jquery-1.10.1.min',
		'jquery-cookie':'jquery.cookie',
		'login':'login',
		'login1':'login1',
	},
	//设置模块之间依赖关系
	shim:{
		'jquery-cookie':['jquery'],
		'login1':{
			exports:'_'
		}
	}
})

require(['login'],function(login){
	login.main();
})







