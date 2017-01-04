//每个模块（对象）它们都有自己属性以及方法
/*var citylistObj = {
	name: '城市选择页',
	dom: $('#citylist'),
	init: function(){
		//模块初始化的方法
		this.bindEvent();  //绑定它自己应该绑定的事件	
	},
	bindEvent: function(){
		console.log('绑定事件');	 	
	},
	enter: function(){
		//进入该模块
		this.dom.show();
	},
	leave: function(){
		//离开该模块
		this.dom.hide(); 	
	}
}*/
//这个时候我们使用对象的继承？因为结构非常的一样，所以说需要继承

//什么是继承？当一个对象想要拥有另外一个对象属性和方法的时候，就是继承
//var citylistObj = searchObj;

//这种方法的继承它是行不通的？因为对象它是引用类型, 这样会导致
//对象与对象之间在继承的时候，无法保存互相的独立


var citylistObj = Object.create(searchObj); //原型继承

/*
citylistObj.name = '城市选择页';
citylistObj.dom = $('#citylist');

*/
citylistObj  = $.extend(citylistObj, {
	name: '城市选择页',
	dom: $('#citylist')
})
/*
function Create(obj){
	function t(){
			 	
	}
	t.prototype = obj;
	var m = new t();
	return m; //原型继承


	//m.name  --> 地址搜索页
	m.name = '5678';
	console.log(m.name); //5678
	delete m.name; // 
}*/