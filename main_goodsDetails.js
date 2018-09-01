console.log('jiazai');
require.config({
	paths:{
		'jquery':'jquery-1.10.1.min',
		'jquery-cookie':'jquery.cookie',
		'goodsDetails':'goodsDetails',
		'goodsDetails1':'goodsDetails1',
		'startMove':'startMove'
	},
	//设置模块之间依赖关系
	shim:{
		'jquery-cookie':['jquery'],
		//定义不追崇AMD规范
		'startMove':{
			exports:'_'
		},
		'goodsDetails1':{
			exports:'_'
		}
	}
})

require(['goodsDetails'],function(goodsDetails){
	goodsDetails.main();
})







