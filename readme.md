##jquery.loading
**version:1.0 beta**

##jquery.loading��ʲô?
һ������jQuery��loading��ʽ�������ҪjQuery1.9���ϰ汾֧�֣���֧��IE9���������

## �����ʹ��jquery.loading?
>1.��`head`��������������ʽ�ļ�`loading.css`
>
>2.��`body`β��(�Ƽ�)���������ļ�`jquery.loading.js`��`jquery.loading.min.js`

```javascript
  var opts = {
    name: 'QXSLoading' // loadingͼ������ƣ�һ������ָ��
    , style: '2' // loading�������֧��1-7��Ĭ��Ϊ2
    , zIndex: '99999' //loadingͼ���z-index��Ĭ��Ϊ99999
    , bgColor: 'rgba(0,0,0,0.3)' //֧�� rgb,rgba ��16������ɫ(��#FFFFFF)��ʾ
    , refreshRate: 150  //����Ԫ�ش�С�ı��Ƶ�ʣ�һ������ָ��
    , onShow: null // ����'show'����ʱ�󶨵ĺ���
    , onHide: null // ����'hide'����ʱ�󶨵ĺ���
    };
  var loading = $('demo-div').loading(opts);//��ʼ��loading
  loading.show(); //��ʾloading
  loading.hide();//����loading
```

##jquery.loading��ʲô�ص㣿

* ����Ϊָ����Ԫ�أ���body,div��������ʾһ��loadingͼ�㣬������ȫ������ָ����Ԫ��

* ��������������õ�Ԫ��

* ���ö���CSS3��loading���

* ���������loading��������

* ֧�ְ�`onHide`��`onShow`�¼�

##�����ⷴ��
��ʹ�������κ����⣬��ӭ�������ң�������������ϵ��ʽ���ҽ���

* �ʼ�(fiii#qq.com, ��#����@)
* QQ: 17166673

##������Ȩ
�������ѭMIT��ȨЭ�顣���������ɵ�ʹ�ú��޸�����
