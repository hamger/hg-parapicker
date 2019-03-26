/**
 * Created by Hanger on 2018/4/11.
 */
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : (global.ParaPicker = factory());
})(this, function() {
  /**
   * 生成 UUID (Universally Unique IDentifier, 通用唯一标识符)
   */
  function generateUUID() {
    var d = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
      c
    ) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x7) | 0x8).toString(16);
    });
    return uuid;
  }

  /**
   * 以 id 获取 DOM
   */
  function $id(id) {
    return document.getElementById(id);
  }

  /**
   * 设置子元素样式
   */
  function setChildStyle(parent, key, val) {
    var children = parent.children;
    for (var i = 0; i < children.length; i++) {
      children[i].style[key] = val;
    }
  }

  /**
   * 创建选择器构造函数
   */
  function ParaPicker(config) {
    this.inputId = config.inputId; // 目标DOM元素ID，选填
    this.data = config.data; // json 数据，必填
    this.valueKey = config.valueKey || "value"; // 需要展示的数据的键名，选填
    this.childKey = config.childKey || "child"; // 子数据的键名，选填
    this.success = config.success; // 确定按钮回调函数，必填
    this.cancel = config.cancel || null; // 取消按钮回调函数，选填
    this.beforeShow = config.beforeShow || null; // 规定呼起选择器前的逻辑，选填
    this.title = config.title || ""; // 选择器标题，选填
    this.sureText = config.sureText || "确定"; // 确定按钮文本，选填
    this.cancelText = config.cancelText || "取消"; // 取消按钮文本，选填
    this.a = config.a || 0.001; // 惯性滚动加速度（正数, 单位 px/(ms * ms)），选填，默认 0.001
    this.style = config.style; // 选择器样式, 选填
    this.initTab(); // 初始化标签
    this.initUI(); // 初始化UI
    this.initEvent(); // 初始化事件
  }

  /**
   * 定义构造函数的原型
   */
  ParaPicker.prototype = {
    // 明确构造器指向
    constructor: ParaPicker,
    /**
     * 定义初始化标签函数
     */
    initTab: function() {
      // 如果没有传入 inputId 使用 uuid 代替
      this.wrapId = generateUUID() + "-wrap"; // 选择器外包裹元素ID
      this.paraIndex = []; // 存放每列地址的索引
      this.ulCount = this.data.length; // 当前展示的列数
      this.liNum = []; // 每个ul有多少个可选li
      for (var i = 0; i < this.ulCount; i++) {
        this.liNum[i] = this.data[i].length;
      }
      this.liHeight =
        this.style && this.style.liHeight ? this.style.liHeight : 40; // 每个li的高度
      this.btnHeight =
        this.style && this.style.btnHeight ? this.style.btnHeight : 44; // 按钮的高度
      this.paraUl = []; // 每个ul元素
      this.curDis = []; // 每个ul当前偏离的距离
      this.curPos = []; // 记录 touchstart 时每个ul的竖向距离
      this.startY = 0; // touchstart的位置
      this.startTime = 0; // touchstart的时间
      this.endTime = 0; // touchend的时间
      this.moveY = 0; // touchmove的位置
      this.moveTime = 0; // touchmove的时间
      this.moveNumber = 1; // touchmove规定时间间隔下的次数
      this.moveSpeed = []; // touchmove规定时间间隔下的平均速度
      this.abled = true; // 标识滚动是否进行中
      this.containerId = this.wrapId + "-container"; // 选择器容器ID
      this.boxId = this.wrapId + "-box"; // 选择器按钮区域ID
      this.contentId = this.wrapId + "-content"; // 选择器选择区域ID
      this.abolishId = this.wrapId + "-abolish"; // 选择器取消按钮ID
      this.sureId = this.wrapId + "-sure"; // 选择器确定按钮ID
      this.titleId = this.wrapId + "-title"; // 选择器确定按钮ID
      this.isCanSelect = true; // 是否呼起选择框
    },
    /**
     * 定义初始化 UI 函数
     */
    initUI: function() {
      // 创建选择器的外包裹元素
      this.createContainer();
      // 初始化选择器内容
      this.renderContent();
    },
    /**
     * 定义初始化事件函数
     */
    initEvent: function() {
      var that = this;
      that.container = $id(that.containerId);
      // 点击需绑定点击事件的元素显示选择器
      if (that.inputId) {
        $id(that.inputId).addEventListener("click", function() {
          that.beforeShow && that.beforeShow();
          that.show();
        });
      }
      // 点击确定按钮隐藏选择器并输出结果
      $id(that.sure).addEventListener("click", function() {
        that.success(that.getResult());
        that.hide();
      });
      // 点击取消隐藏选择器
      $id(that.abolish).addEventListener("click", function() {
        that.cancel && that.cancel();
        that.hide();
      });
      // 点击背景隐藏选择器
      that.wrap.addEventListener("click", function(e) {
        if (
          e.target.id === that.wrapId &&
          that.wrap.classList.contains("hg-picker-bg-show")
        ) {
          that.cancel && that.cancel();
          that.hide();
        }
      });
    },
    /**
     * 创建选择器外包裹元素
     */
    createContainer: function() {
      var div = document.createElement("div");
      div.id = this.wrapId;
      document.body.appendChild(div);
      this.wrap = $id(this.wrapId);
      this.wrap.classList.add("hg-picker-bg");
    },
    /**
     * 获取需要被展示的数据
     * Return : Array
     * Explain : @arr 需要被取值的数组
     */
    getValue: function(arr) {
      var tempArr = [];
      for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") tempArr.push(arr[i][this.valueKey]);
        else tempArr.push(arr[i]);
      }
      return tempArr;
    },
    /**
     * 渲染并列选择器的内容
     */
    renderContent: function() {
      var btnHTML =
        '<div class="hg-picker-btn-box" id="' +
        this.box +
        '">' +
        '<div class="hg-picker-btn" id="' +
        this.abolishId +
        '">' +
        this.cancelText +
        "</div>" +
        '<div class="hg-picker-btn" id="' +
        this.sureId +
        '">' +
        this.sureText +
        "</div>" +
        '<span id="' +
        this.titleId +
        '" >' +
        this.title +
        "</span> " +
        "</div>";

      var contentHtml =
        '<div class="hg-picker-content" id="' +
        this.contentId +
        '">' +
        '<div class="hg-picker-up-shadow"></div>' +
        '<div class="hg-picker-down-shadow"></div>' +
        '<div class="hg-picker-line"></div>' +
        "</div>";

      // 设置按钮位置
      if (this.style && this.style.btnLocation === "bottom") {
        var html =
          '<div  class="hg-picker-container" id="' +
          this.containerId +
          '">' +
          contentHtml +
          btnHTML +
          "</div>";
      } else {
        var html =
          '<div  class="hg-picker-container" id="' +
          this.containerId +
          '">' +
          btnHTML +
          contentHtml +
          "</div>";
      }
      this.wrap.innerHTML = html;
      for (var i = 0; i < this.ulCount; i++) {
        this.renderUl(i);
        this.paraIndex[i] = 0;
        this.curDis[i] = 0 * this.liHeight;
        this.bindRoll(i);
      }
      this.setStyle();
      this.setUlWidth();
    },
    /**
     * 设置选择器样式
     */
    setStyle: function() {
      if (!this.style) return;
      var obj = this.style;
      var container = $id(this.containerId);
      var content = $id(this.contentId);
      var box = $id(this.box);
      var sureBtn = $id(this.sureId);
      var cancelBtn = $id(this.abolishId);
      var len = content.children.length;
      // 设置高度
      if (obj.liHeight !== 40) {
        for (var i = 0; i < this.ulCount; i++) {
          setChildStyle(content.children[i], "height", this.liHeight + "px");
        }
        content.children[len - 3].style.height = this.liHeight * 2 + "px";
        content.children[len - 2].style.height = this.liHeight * 2 + "px";
        content.children[len - 1].style.height = this.liHeight + "px";
        content.children[len - 1].style.top = this.liHeight * 2 + "px";
        content.style.height = this.liHeight * 5 + "px";
        content.style.lineHeight = this.liHeight + "px";
      }
      if (obj.btnHeight !== 44) {
        box.style.height = this.btnHeight + "px";
        box.style.lineHeight = this.btnHeight + "px";
      }
      if (obj.btnOffset) {
        sureBtn.style.marginRight = obj.btnOffset;
        cancelBtn.style.marginLeft = obj.btnOffset;
      }
      if (obj.liHeight !== 40 || obj.btnHeight !== 44)
        container.style.height = this.liHeight * 5 + this.btnHeight + "px";
      // 设置配色
      if (obj.titleColor) box.style.color = obj.titleColor;
      if (obj.sureColor) sureBtn.style.color = obj.sureColor;
      if (obj.cancelColor) cancelBtn.style.color = obj.cancelColor;
      if (obj.btnBgColor) box.style.backgroundColor = obj.btnBgColor;
      if (obj.contentColor) content.style.color = obj.contentColor;
      if (obj.contentBgColor)
        content.style.backgroundColor = obj.contentBgColor;
      if (obj.upShadowColor)
        content.children[len - 3].style.backgroundImage = obj.upShadowColor;
      if (obj.downShadowColor)
        content.children[len - 2].style.backgroundImage = obj.downShadowColor;
      if (obj.lineColor)
        content.children[len - 1].style.borderColor = obj.lineColor;
    },
    /**
     * 渲染 ul 元素
     * Explain : @i 需要处理的列的索引
     */
    renderUl: function(i) {
      var parentNode = $id(this.contentId);
      var newUl = document.createElement("ul");
      newUl.setAttribute("id", this.wrapId + "-ul-" + i);
      parentNode.insertBefore(
        newUl,
        parentNode.children[parentNode.children.length - 3]
      );
      this.paraUl[i] = $id(this.wrapId + "-ul-" + i);
      this.renderLi(i);
    },
    /**
     * 渲染 li 元素
     * Explain : @i 需要处理的列的索引
     */
    renderLi: function(i) {
      this.paraUl[i].innerHTML = "";
      var lis = "<li></li><li></li>";
      this.getValue(this.data[i]).forEach(function(val, index) {
        lis += "<li>" + val + "</li>";
      });
      lis += "<li></li><li></li>";
      this.paraUl[i].innerHTML = lis;
      if (this.liHeight !== 40)
        setChildStyle(this.paraUl[i], "height", this.liHeight + "px");
    },
    /**
     * 设置 ul 元素宽度
     */
    setUlWidth: function() {
      for (var i = 0; i < this.ulCount; i++) {
        this.paraUl[i].style.width = (100 / this.ulCount).toFixed(2) + "%";
      }
    },
    /**
     * 绑定滑动事件
     * Explain : @i 需要处理的列的索引
     */
    bindRoll: function(i) {
      var that = this;
      that.paraUl[i].addEventListener(
        "touchstart",
        function() {
          that.touch(i);
        },
        false
      );
      that.paraUl[i].addEventListener(
        "touchmove",
        function() {
          that.touch(i);
        },
        false
      );
      that.paraUl[i].addEventListener(
        "touchend",
        function() {
          that.touch(i);
        },
        true
      );
    },
    /**
     * 控制列表的滚动
     * Explain : @i 需要处理的列的索引
     * @time 滚动持续时间
     */
    roll: function(i, time) {
      if (this.curDis[i] || this.curDis[i] === 0) {
        this.paraUl[i].style.transform =
          "translate3d(0, " + this.curDis[i] + "px, 0)";
        this.paraUl[i].style.webkitTransform =
          "translate3d(0, " + this.curDis[i] + "px, 0)";
        if (time) {
          this.paraUl[i].style.transition = "transform " + time + "s ease-out";
          this.paraUl[i].style.webkitTransition =
            "-webkit-transform " + time + "s ease-out";
        }
      }
    },
    /**
     * 并列选择器触摸事件
     * Explain : @i 需要处理的列的索引
     */
    touch: function(i) {
      var event = event || window.event;
      event.preventDefault();
      switch (event.type) {
        case "touchstart":
          this.startTime = new Date();
          // 列表滚动中禁止二次操作
          if (this.startTime - this.endTime < 200) {
            this.abled = false;
            return;
          } else this.abled = true;
          this.startY = event.touches[0].clientY;
          this.curPos[i] = this.curDis[i]; // 记录当前位置
          this.moveNumber = 1;
          this.moveSpeed = [];
          break;
        case "touchmove":
          if (!this.abled) return;
          event.preventDefault();
          this.moveY = event.touches[0].clientY;
          var offset = this.startY - this.moveY; // 向上为正数，向下为负数
          this.curDis[i] = this.curPos[i] - offset;
          if (this.curDis[i] >= 1.5 * this.liHeight)
            this.curDis[i] = 1.5 * this.liHeight;
          if (this.curDis[i] <= -1 * (this.liNum[i] - 1 + 1.5) * this.liHeight)
            this.curDis[i] = -1 * (this.liNum[i] - 1 + 1.5) * this.liHeight;
          this.roll(i);
          // 每运动 130 毫秒，记录一次速度
          if (this.moveTime - this.startTime >= 130 * this.moveNumber) {
            this.moveNumber++;
            this.moveSpeed.push(offset / (this.moveTime - this.startTime));
          }
          break;
        case "touchend":
          if (!this.abled) return;
          this.endTime = Date.now();
          if (this.moveNumber === 1) {
            var speed =
              (this.startY - event.changedTouches[0].clientY) /
              (this.endTime - this.startTime);
          } else {
            var speed = this.moveSpeed[this.moveSpeed.length - 1];
          }
          this.curDis[i] = this.curDis[i] - this.calculateBuffer(speed, this.a);
          this.fixate(i);
          break;
      }
    },
    /**
     * 计算滚动缓冲距离
     * Return : Number
     * Explain : @v 速度（正负表示运动方向, 单位 px/ms）
     * @a 加速度（正数, 单位 px/(ms * ms)）
     */
    calculateBuffer: function(v, a) {
      if (Math.abs(v) < 0.25) return 0;
      else return (v / Math.abs(v)) * ((0.5 * v * v) / a);
    },
    /**
     * 固定 ul 最终的位置、更新视图
     * Explain : @i 需要处理的列的索引
     */
    fixate: function(i) {
      this.getPosition(i);
      this.roll(i, 0.2);
    },
    /**
     * 获取定位数据
     * Explain : @i 需要处理的列的索引
     */
    getPosition: function(i) {
      if (this.curDis[i] <= -1 * (this.liNum[i] - 1) * this.liHeight)
        this.paraIndex[i] = this.liNum[i] - 1;
      else if (this.curDis[i] >= 0) this.paraIndex[i] = 0;
      else this.paraIndex[i] = -1 * Math.round(this.curDis[i] / this.liHeight);
      this.curDis[i] = -1 * this.liHeight * this.paraIndex[i];
    },
    /**
     * 获取结果的数组
     */
    getResult: function() {
      var arr = [];
      for (var i = 0; i < this.ulCount; i++) {
        arr.push(this.data[i][this.paraIndex[i]]);
      }
      return arr;
    },
    /**
     * 显示选择器
     */
    show: function() {
      if (this.isCanSelect) return
      this.wrap.classList.add("hg-picker-bg-show");
      this.container.classList.add("hg-picker-container-up");
    },
    /**
     * 隐藏选择器
     */
    hide: function() {
      this.wrap.classList.remove("hg-picker-bg-show");
      this.container.classList.remove("hg-picker-container-up");
    },
    /**
     * 是否禁止呼起选择框
     */
    forbidSelect: function(status) {
      this.isCanSelect = !status;
    },
    /**
     * 设置选择器标题
     */
    setTitle: function(text) {
      $id(this.titleId).innerHTML = text;
    }
  };

  return ParaPicker;
});
