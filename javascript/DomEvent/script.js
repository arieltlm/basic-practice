window.onload=function(){
	var go=document.getElementById('go'),
		box=document.getElementById('box');

		eventUtil.addHandler(box,'click',function(){
			alert('我是整个盒子');
		});

		eventUtil.addHandler(go,'click',function(e){
			e=eventUtil.getEvent(e);
			// e=e || window.e;
			alert(eventUtil.getElement(e));//弹出来源
			eventUtil.preventDefault(e);//阻止来源
			eventUtil.stopPropagation(e);//取消冒泡
		});
}