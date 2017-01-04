
var rlistObj = Object.create(searchObj); //原型继承
//$.extend 进行对象与对象的合并
rlistObj  = $.extend(rlistObj, {
	name: '餐厅列表页',
	dom: $('#rlist')
})
