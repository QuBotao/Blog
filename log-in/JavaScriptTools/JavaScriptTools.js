var tools  = {
  //获取元素样式
  getStyle:function (obj, styleProp) {
      if(obj.currentStyle) {
          return obj.currentStyle[styleProp];
      }else{
          return window.getComputedStyle(obj, null)[styleProp];
      }
  },
  //圣杯模型
  inherit: function (father,son) {
      function T() {};
      T.prototype = father.prototype;
      son.prototype = new T();
      son.prototype.constructor = son;
      son.uber = father.prototype;   
  },
  //浅层克隆
  clone:function (parent,child) {
    var child = child || {};
    for(var proto in parent) {
      if(parent.hasOwnProperty(proto)){
        child[proto] = parent[proto];
      }
    }
    return child;
  },
  //深层次克隆
  cloneDeep:function (parent,child) {
    var strTypeof = '[Object Array]';
    var toStr = Object.prototype.toString;
    var child = child || {};

    for(var proto in parent) {
      if(parent.hasOwnProperty(proto)){
        if(typrof(parent[proto] == 'object')) {
          child[proto] = (toStr.call(parent[proto]) == strTyprof) ? [] : {};
          cloneDeep(parent[proto], child[proto]);
        }else{
          child[proto] = parent[proto];
        }
      }
    }
  },
  //打印某节点的子节点
  retChild:function (node) {
    var child = node.childNodes;
    var len = child.lenght;
    for(var i = 0; i < len; i ++) {
      if(child.nodeType === 1) {
        console.log(child[i]);
        child.hasChildNodes && retChild(child[i]);
      }
    }
  },
  //封装insertAfter方法
  insertAfter:function (insertNode,afterNode) {
    var node = afterNode.nextElementSibling;
    if(node) {
      this.insertBefore(insertNode,node);
    }else {
      this.appendChild(insertNode);
    }
  },
  //获取元素尺寸
  getElementOffset:function (ele) {
      var box = ele.getBoundingClientRect();
      var w = box.width || (box.right - box.left);
      var h = box.height || (box.bottom - box.top);
      return {
          w : w,
          h : h
      }
  },
  //封装兼容性方法，求滚动轮滚动距离
  getScrollOffset:function () {
    if (window.pageXOffset){
       return {
           x : window.pageXOffset,
           y : window.pageYOffset
        }
    }
    return {
        x : document.body.scrollLeft + document.documentElement.scrollLeft,
        y : document.body.scrollTop + document.documentElement.scrollTop
    
    }
  },
  //查看视口的尺寸
  getElementOffset:function (){
    if(window.innerWidth){
        return{
            w : window.innerWidth,
            h : window.innerHeight
        }

      if(document.compatMode == 'CSS1Compat'){
          return {
              w : document.documentElement.clientWidth,
              h : document.documentElement.clientHeight
          }
        }else if (document.compatMode == 'BackCompat') 
          return {
            w : document.body.clientWidth,
            h : document.body.clientHeigh
        }
    }
  },
  //查看元素位置
  getElmentPosition:function (ele) {
    var x = 0,
        y = 0;

    while (ele != document.body) {
      x += ele.offsetLeft;
      y += ele.offsetTop;
      ele = ele.offsetParent;
    }

    return {
      x : x,
      y : y
    }
  },
  //封装兼容性的监听事件
  addEvent:function  (elem,type,handle) {
      if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
      }else if (elem.attachEvent) {
        elem['temp' + type + handle] = handle;
        elem[type + handle] = function () {
           elem['temp' + type + handle].call(elem);
        }
        elem.attachEvent('on' + type ,elem[type + handle]);
      }else {
        elem['on' + type] = handle;
      }
   },
  //移除点击事件
  removeEvent:function (elem,type,handle) {
      if(elem.addEventListener) {
          elem.removeEventListener(type,handle,false);
      }else if(elem.attachEvent) {
          elem.detachEvent('on' + type,handle);
      }else{
          elem['on' + type] =null;
      }
  },
  //封装取消冒泡的函数
  stopBubble:function (event) {
     var event = event || window.event;
     if(event.stopPropagation) {
        event.stopPropagation();
     }else{
        event.cancelBubble = true;
      }
  },
  //封装阻止默认事件的函数
  cancelHandler:function (event) {
    var event = event || window.event;
    if(event.preventDefault) {
      event.preventDefault();
    }else{
      event.returnValue = false;
    }
  },
  //IE6.0：fix定位        
  fixed:function  (elem) {
    var originLeft = parseInt(getStyle(elem, 'left')),
        originTop = parseInt(getStyle(elem, 'top'));

    addEvent(window, 'scroll', function (e){
      elem.style.left = originLeft + getScrollOffset().x + 'px';
      elem.style.top = originTop + getScrollOffset().y + 'px';
    });
  },

  //封装一个方法removeChild可以删除自身的子节点
//   Element.prototype.remove = function () {
//     this.parentNode.removeChild(this);
//   }
}
module.exports = tools;