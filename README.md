# hg-parapicker
![build passed](https://img.shields.io/badge/build-passed-brightgreen.svg)
![licence MIT](https://img.shields.io/badge/licence-MIT-orange.svg)

## 简介
使用原生 JavaScript 制作的移动端的并列选择器，适用于选择并列的数据，附有 demo 和使用说明文档，支持多个配置项，已在多个线上项目中使用，可通过`npm install hg-parapicker`下载。

## Demo
![hg-parapicker png](http://olislpb6q.bkt.clouddn.com/hg-parapicker.png)

[点击这里可跳转到演示页面](https://hamger.github.io/demo/parapicker/parapicker.html)，请在移动端打开或者使用浏览器移动端调试工具打开。

## 下载插件
* Github下载：[下载地址](https://github.com/hamger/hg-parapicker)
* npm下载：`npm i hg-parapicker`

## 快速使用
首先引入文件
```html
<link rel="stylesheet" type="text/css" href="./picker.min.css" />
<script src="./parapicker.min.js"></script>
```
实例化并列选择器`new ParaPicker(option)`
```js
new ParaPicker({
    inputId: 'para-input', // 触发选择的元素ID
    data: data, // 符合格式的数组
    success: function(arr) { // 回调函数
        console.log(arr);
    }
});
```

如果你使用构建工具，可以这样引入
```js
import 'hg-parapicker/dist/picker.min.css';
import ParaPicker from 'hg-parapicker';
```
在`vue`中实例化插件，如果数据是请求来的，实例化写在请求成功后的回调中
```
mounted () {
    this.$nextTick(() => {
        new ParaPicker({
            inputId: 'para-input',
            data: data,
            success: function(arr) {
                console.log(arr);
            }
        });
    });
}
```
`data`选项接受一个二维数组，数据格式如下
```js
var data = [
    ['平民', '狼人', '预言家', '女巫', '猎人', '白痴'],
    ['存活', '死亡', '吃刀', '票出', '吃毒', '中枪']
]
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
```
[{value: '预言家', description: '每晚可查验一名玩家'}, '存活']
```

## 地区选择器配置项
`option`是一个配置项的对象，可以接受如下选项：

key | value | description
--------|------|-----
inputId | String | 目标DOM元素ID，必填
data | Array\<Array\> | 符合格式的二维数组，必填
valueKey | String | 需要展示的数据的键名，默认`value`
success | Function  |  确定后的回调函数，返回一个结果数组，必填
cancel | Function  |  点击取消按钮或者背景后的回调函数，选填
title | String | 选择器标题，默认为空
sureText | String | 确定按钮文本，默认为“确定”
cancelText | String | 取消按钮文本，默认为“取消”
a | Number | 惯性滚动加速度（正数, 单位 px/(ms * ms)），规定滚动阻力，加速度越小缓冲距离越长，默认 `0.001`
style | Object | 包含样式配置的对象

`style`对象可以接受如下选项：

key | value | description
--------|------|-----
liHeight | Number | 每一个选择栏的高度（px），默认 `40`
btnHeight | Number | 按钮栏的高度（px），默认 `44`
btnOffset | String | 按钮离边框的距离，默认 `20px`
titleColor | String | 选择器标题的字体颜色
sureColor | String | 选择器确定按钮的字体颜色
cancelColor | String | 选择器取消按钮的字体颜色
btnBgColor | String | 选择器按钮栏的背景颜色
contentColor | String | 选择器选择区域的文字颜色
contentBgColor | String | 选择器选择区域的背景颜色
upShadowColor | String | 选择器顶部朦层颜色
downShadowColor | String | 选择器底部朦层颜色
lineColor | String | 选择器分隔线颜色

## Changelog
### 2018.4.11
> v1.0.0 * 创建并列选择器
