console.log('jiazai');
require.config({
	paths:{
		'jquery':'jquery-1.10.1.min',
		'jquery-cookie':'jquery.cookie',
		'index':'index',
		'startMove':'startMove'
	},
	//设置模块之间依赖关系
	shim:{
		'jquery-cookie':['jquery'],
		//定义不追崇AMD规范
		'startMove':{
			exports:'_'
		}
	}
})

require(['index'],function(index){
	index.main();
})







