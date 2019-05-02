# hg-parapicker

![build](https://travis-ci.org/hamger/hg-parapicker.svg?branch=master)
[![codecov](https://codecov.io/gh/hamger/hg-parapicker/branch/master/graph/badge.svg)](https://codecov.io/gh/hamger/hg-parapicker)
![NPM](https://img.shields.io/npm/l/hg-parapicker.svg?color=orange)
[![npm](https://img.shields.io/npm/v/hg-parapicker.svg?color=blue)](https://www.npmjs.com/package/hg-parapicker)

移动端的并列选择器，适用于选择并列类型的数据。

> 这里是 2.x 的文档，1.x 文档请点击[这里](https://github.com/hamger/hg-parapicker/tree/v1.3.3)。

## Demo

[点击这里跳转到演示页面](https://hamger.github.io/hg-parapicker/)，请在移动端打开或者使用浏览器移动端调试工具打开。

## Install

- yarn 下载：`yarn add hg-parapicker`
- npm 下载：`npm install --save hg-parapicker`
- CND 地址：
  - js：`https://unpkg.com/hg-parapicker/dist/hg-parapicker.js`
  - css：`https://unpkg.com/hg-parapicker/picker.css`

## Usage

首先引入文件

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/hg-parapicker/picker.css"
/>
<script src="https://unpkg.com/hg-parapicker/dist/hg-parapicker.js"></script>
```

实例化并列选择器`new ParaPicker(configuration)`

```js
var paraPicker = new ParaPicker({
  data: data, // 符合格式的数组
  success: function(arr) {
    // 回调函数
    console.log(arr);
  }
});
```

如果你使用构建工具，这样引入

```js
import "hg-parapicker/picker.css";
import ParaPicker from "hg-parapicker";
```

`data`选项接受一个二维数组，数据格式如下

```js
var data = [
  ["平民", "狼人", "预言家", "女巫", "猎人", "白痴"],
  ["存活", "死亡", "吃刀", "票出", "吃毒", "中枪"]
];
```

如果你需要包含更多的信息，可以将数组的每项转化为对象的形势

```js
var data = [
    [
        {value: '预言家', description: '每晚可查验一名玩家'},
        {value: '狼人', description: '每晚可击杀一名玩家'},
        ...
    ],
    ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪']
]
```

其中的键名`value`和可以根据实际需要通过配置项`valueKey`设置。例如你选择了`预言家-存活`，成功的回调函数中会接收如下形式的数组

```js
[{ value: "预言家", description: "每晚可查验一名玩家" }, "存活"];
```

调用实例方法 show 就可以呼起选择器，以下是完整调用：

```html
<head>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/hg-parapicker/picker.css" />
</head>
<body>
    <article class="wraper">
        <div>
            <h3 class="title">1号玩家</h3>
            <div onclick="select(1)" class="inputDiv" id="para-input1"/>选择身份和状态</div>
        </div>
        <div>
            <h3 class="title">2号玩家</h3>
            <div onclick="select(2)" class="inputDiv" id="para-input2"/>选择身份和状态</div>
        </div>
    </article>
    <script src="https://unpkg.com/hg-parapicker/dist/hg-parapicker.js"></script>
    <script>
      var picker = new ParaPicker({
        data: [
          ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'],
          ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪'],
        ],
        title: '玩家属性',
        cancel() {
          console.log('取消选择');
        },
        success(arr) {
          console.log(arr);
          document.getElementById('para-input' + this.playerNumber).innerHTML = arr;
        },
      });

      function select(number) {
        picker.playerNumber = number;
        picker.setTitle(`${number}号玩家`);
        picker.show();
      };
    </script>
</body>
```

## 配置项

`configuration`是一个配置项的对象，可以接受如下选项：

| key        | value          | description                                                                                    |
| ---------- | -------------- | ---------------------------------------------------------------------------------------------- |
| data       | Array\<Array\> | 符合格式的二维数组，必填                                                                       |
| success    | Function       | 确定后的回调函数，返回一个结果数组，必填                                                       |
| valueKey   | String         | 需要展示的数据的键名，默认`value`                                                              |
| cancel     | Function       | 点击取消按钮或者背景后的回调函数，选填                                                         |
| title      | String         | 选择器标题，默认为空                                                                           |
| sureText   | String         | 确定按钮文本，默认为“确定”                                                                     |
| cancelText | String         | 取消按钮文本，默认为“取消”                                                                     |
| a          | Number         | 惯性滚动加速度（正数, 单位 px/(ms \* ms)），规定滚动阻力，加速度越小缓冲距离越长，默认 `0.001` |
| style      | Object         | 包含样式配置的对象                                                                             |

`style`对象可以接受如下选项：

| key             | value  | description                         |
| --------------- | ------ | ----------------------------------- |
| liHeight        | Number | 每一个选择栏的高度（px），默认 `40` |
| btnHeight       | Number | 按钮栏的高度（px），默认 `44`       |
| btnOffset       | String | 按钮离边框的距离，默认 `20px`       |
| titleColor      | String | 选择器标题的字体颜色                |
| sureColor       | String | 选择器确定按钮的字体颜色            |
| cancelColor     | String | 选择器取消按钮的字体颜色            |
| btnBgColor      | String | 选择器按钮栏的背景颜色              |
| contentColor    | String | 选择器选择区域的文字颜色            |
| contentBgColor  | String | 选择器选择区域的背景颜色            |
| upShadowColor   | String | 选择器顶部朦层颜色                  |
| downShadowColor | String | 选择器底部朦层颜色                  |
| lineColor       | String | 选择器分隔线颜色                    |

## 实例方法

| function       | param          | description                        |
| -------------- | -------------- | ---------------------------------- |
| show()         | `--`           | 呼起选择框（受 forbidSelect 限制） |
| hide()         | `--`           | 关闭选择框                         |
| setTitle(text) | text: `String` | 修改标题内容                       |

## Change Log

### 2019.4.11

> v2.0.0 使用 ES6 重构项目
