//每个模块（对象）它们都有自己属性以及方法
var searchObj = {
	name: '地址搜索页',
	dom: $('#address'),
	init: function(){
		//模块初始化的方法
		this.bindEvent();  //绑定它自己应该绑定的事件	
	},
	bindEvent: function(){
		console.log('绑定事件');	 	
	},
	enter: function(){
		//进入该模块
		console.log('我要进行360度旋转进入');
		this.dom.show();
	},
	leave: function(){
		//离开该模块
		this.dom.hide(); 	
	}
}