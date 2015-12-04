/**********************
 jquery plugin 'loading'
 version: 1.0 beta
 https://github.com/qingxs

 Copyright:2015 重庆－蜗牛 QQ:17166673
 License: MIT
 ***********************/
+function ($) {
  var timer, old = $.fn.loading;

  var QXSLoading = function QXSLoading(element) {
    this._ = $(element);
    this._.opts = element.opts;
    this._.$load = element[0].firstElementChild;


    if (this._.$load && this._.$load.className.split(/\s+/).indexOf(this._.opts.name) >= 0) {
      this._.$load = $(this._.$load);
      return this;
    }
    //custom style
    var styles = {
        '1': '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
        ,
        '2': '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>'
        ,
        '3': '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>'
        ,
        '4': '<div class="fl spinner4"></div>'
        ,
        '5': '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>'
        ,
        '6': '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'
        ,
        '7': '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'
      }
      ;
    //search the value of border radius style
    var $load, _ = this._
      , _r = _.css('-webkit-border-radius') || _.css('-moz-border-radius') || _.css('border-radius') || 0;

    _.$load = $load = $('<div></div>');
    $load.addClass(_.opts.name);

    //init style
    var InitStyle = {
      'position': 'absolute'
      , 'display': 'none'
      , '-webkit-border-radius': _r
      , '-moz-border-radius': _r
      , 'border-radius': _r
      , 'z-index': _.opts.zIndex
      , 'background-color': _.opts.bgColor
    };

    $load.css(InitStyle);
    $load.append(styles[_.opts.style] ? styles[_.opts.style] : styles[_.defaults.style]);
    _.prepend($load);
    if (_.opts.onHide instanceof Function) {
      $load.on('hide', _.opts.onHide);
    }
    if (_.opts.onShow instanceof Function) {
      $load.on('show', _.opts.onShow);
    }
    return this;
  };

  QXSLoading.prototype = {
    constructor: QXSLoading,
    show: function show() {
      resize(this);
      var $load = this._.$load;
      $load.fadeIn('fast', function () {
        $load.trigger('show', $load);
      });
      return this;
    },
    hide: function hide() {
      clearTimeout(timer);
      var $load = this._.$load;
      $load.fadeOut('fast', function () {
        $load.trigger('hide', $load);
      });
      return this;
    }
  };

  var resize = function (element) {
    var $this = element
      , _ = $this._
      , $load = _.$load
      , $fl = $load.find('.fl')
      , _w = _.width()
      , _h = _.height()
      , _fW = $fl.outerWidth()
      , _fH = $fl.outerHeight()
      , newWH = {'width': _w, 'height': _h}
      ;
    $fl.css({
      'position': 'absolute',
      'left': _w / 2 - _fW / 2,
      'top': _h / 2 - _fH / 2
    });
    $load.css(newWH);
    timer = setTimeout(function () {
      resize(element);
    }, _.opts.refreshRate);
  };

  $.fn.loading = function (opts) {
    this.opts = $.extend({}, $.fn.loading.defaults, opts);
    return new QXSLoading(this);
  };

  $.fn.loading.defaults = {
    name: 'QXSLoading'
    , style: '2' // The loading animation style,this value is 1 to 7
    , zIndex: '99999'
    , bgColor: 'rgba(0,0,0,0.3)' //supports rgb,rgba and #FFFFFF
    , refreshRate: 150  //Listening to the element size changes, the unit milliseconds
    , onShow: null // The function to execute when the method 'show' is called
    , onHide: null // The function to execute when the method 'hide' is called
  };

  $.fn.loading.Constructor = QXSLoading;
  $.fn.loading.noConflict = function () {
    $.fn.loading = old;
    return this;
  }

}(window.jQuery);
