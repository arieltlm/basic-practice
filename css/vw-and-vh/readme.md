## 学习小记：
test.html和test2.html均是根据此篇文章所做的练习。[纯CSS3使用vw和vh视口单位实现自适应](http://caibaojian.com/vw-vh.html)
* test.html是使用vw和vh，做的，但是在做的过程中，我发现有时候百分比也是极其容易实现这个的。或者说要严格随视窗大小变化，那么需要字体大小也用vw表示。辨不来好坏了。。。后面再研究

* test2.html是使用rem做的移动端适配，此时根目录用vw来表示，同时给出了最大宽度和最小宽度。也算一个进展。

在张鑫旭的文章[视区相关单位vw, vh..简介以及可实际应用场景](http://www.zhangxinxu.com/wordpress/2012/09/new-viewport-relative-units-vw-vh-vm-vmin/)中，又进一步学习和验证；
* 可以做遮罩层。
* Office Word效果实现。

>补充于2016年8月8日

>vw可用来解决滚动条出现页面晃动的问题；
>可以实现等比例图形；
>配合font-size可以实现基于vw的自动缩放式网页布局

这块有待再研究。



再进行代码测试的话：
```
npm install 安装sass编译依赖

gulp启动
```

否则直接打开页面。