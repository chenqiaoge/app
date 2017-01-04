//更进一步的路由的实现
//采用js模块化开发的手段进行项目的路由设计

//模块化开发，首先你要确定模块，对你项目功能进行抽象

//因为我们项目中，有4个不同的页面，在我眼中 就会有4个不同的模块，面向对象的方式
/*
searchObj 地址搜索页面对象

rlistObj 商家列表页对象

detailObj 餐厅详情页对象

citylistObj 城市选择页对象


关键性的难题？  模块与模块之间怎么联系在一起？*/


//创建一个hash值 与模块 映射关系表
var hashMap = {
	'address': searchObj,
	'rlist': rlistObj,
	'detail': detailObj,
	'citylist': citylistObj
}

//hashMap.address  //searchObj
//hashMap['address'] //searchObj

var prevModule = null; //前一个模块
var curModule = null;  //当前模块

function routeController(hash){
	//路由控制方法  hash = address  hash = citylist
	var module = hashMap[hash] || hashMap['address']; // 得到对应hash值的对应的模块对象
	//module = searchObj module = citylistObj
	
	//接着我们需要维护好前一个与当前模块的关系？
	prevModule = curModule; //prevModule = null  prevModule = searchObj
	curModule = module; // curModule = searchObj  curModule = citylistObj
	if(prevModule) {
		prevModule.leave(); //searchObj.leave()
	}
	curModule.enter();

}

if(location.hash) {
	var hash = location.hash.slice(1); //#address
	routeController(hash);
}else {
	routeController('address');
}
window.onhashchange = function(){
	var hash = location.hash.slice(1); //#address
	routeController(hash) 	
}