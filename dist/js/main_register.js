console.log('jiazai');
require.config({
	paths:{
		'jquery':'jquery-1.10.1.min',
		'jquery-cookie':'jquery.cookie',
		'register':'register',
		'register1':'register1',
	},
	//设置模块之间依赖关系
	shim:{
		'jquery-cookie':['jquery'],
		'register1':{
			exports:'_'
		}
	}
})

require(['register'],function(register){
	register.main();
})







