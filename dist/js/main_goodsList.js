console.log('jiazai');
require.config({
	paths:{
		'jquery':'jquery-1.10.1.min',
		'jquery-cookie':'jquery.cookie',
		'goodsList':'goodsList',
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

require(['goodsList'],function(goodsList){
	goodsList.main();
})







