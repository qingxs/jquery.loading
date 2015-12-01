##jquery.loading
**version:1.0 beta**

##jquery.loading是什么?
一个基于jQuery的loading样式插件，需要jQuery1.9以上版本支持，不支持IE9以下浏览器

## 该如何使用jquery.loading?
>1.在`head`区域引入依赖样式文件`loading.css`
>
>2.在`body`尾部(推荐)引入主体文件`jquery.loading.js`或`jquery.loading.min.js`

```javascript
  var opts = {
    name: 'QXSLoading' // loading图层的名称，一般无需指定
    , style: '2' // loading动画风格，支持1-7，默认为2
    , zIndex: '99999' //loading图层的z-index，默认为99999
    , bgColor: 'rgba(0,0,0,0.3)' //支持 rgb,rgba 和16进制颜色(如#FFFFFF)表示
    , refreshRate: 150  //监听元素大小改变的频率，一般无需指定
    , onShow: null // 调用'show'方法时绑定的函数
    , onHide: null // 调用'hide'方法时绑定的函数
    };
  var loading = $('demo-div').loading(opts);//初始化loading
  loading.show(); //显示loading
  loading.hide();//隐藏loading
```

##jquery.loading有什么特点？

* 可以为指定的元素（如body,div）区域显示一个loading图层，它将完全覆盖所指定的元素

* 它不会溢出所作用的元素

* 内置多种CSS3的loading风格

* 各个区域的loading互不干扰

* 支持绑定`onHide`和`onShow`事件

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(fiii#qq.com, 把#换成@)
* QQ: 17166673

##关于授权
本插件遵循MIT授权协议。您可以自由的使用和修改它。
