# vue去哪儿移动端页面

> Vue开发移动端旅游网站项目整体流程与记录。

### 克隆并运行本项目
```
git clone https://github.com/huyaocode/vue-travel.git
cd vue-travel
npm install
npm run serve
```

## 项目涉及到技术栈：
Vue、Vue-router、Vuex
插件：vue-awesome-swiper、better-scroll、axios
CSS的预处理框架：stylus
代码管理工具：git
代码托管平台：github

## 项目展示
### 首页部分


### 城市选择页部分


### 详情页部分


# 项目开发流程

## 项目初始化配置

### 插件安装
安装vue-cli 3，创建项目
安装vuex、vue-router、stylus

### 移动端项目需要注意的4个问题

#### 手机显示配适
阻止用户手滑放大或缩小页面，需要在public/index.html中添加修改meta元素。
```HTML
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

#### CSS样式统一问题
我们需要重置页面样式，因为在不同的手机浏览器上，默认的css样式不是统一的。
**解决方法**：使用reset.css重置所有元素的默认样式

#### 一像素边框问题
有的手机分辨率比较高，是2倍屏或3倍屏，手机上的浏览器就会把CSS中的1像素值展示为2个或3个物理宽度
**解决方法**： 添加一个border.css库，将利用scroll缩放的原理将边框重置。当我们需要使用一像素边框时只需要在标签上添加对应类名，如设置底部一像素边框就在标签上加入"border-bottom"的class名

#### 300毫秒点击延迟问题
在移动端开发中，某些机型上使用click事件会延迟300ms才执行，这样影响了用户体验。
**解决方法**： 引入fastclick.js库
安装fastclick
```
npm install fastclick --save
```
在项目中（src/main.js）使用：
```javascript
import fastClick from 'fastclick' 
fastClick.attach(document.body)
```

### 配置并使用stylus
在安装好stylus后，我们要创建一个文件夹管理一些公用的stylus变量与stylus函数
在 src/assets 文件夹下创建styles文件夹。这里将用于公用样式的存放。

比如背景色就是一个各个页面都会用到的一个统一的css参数，我们可以在src/assets/styles/varibles.styl中定义 $bgcolor = #00bcd4 
而后在样式里引入这个styl文件即可
```CSS
@import '../../../assets/styles/varibles.styl';
background-color $bgcolor
```
但是@import文件引入的前缀非常长，在可以配置别名alias解决此问题

### vue-cli3搭建的项目中配置别名
vue-cli 3.+版本，安装完成之后也找不到config、build等目录。查看官方文档，发现已经被简化成使用vue.config.js来配置项目，可以使用了webpack-chain链式API的调用方式，简化了对webpack配置的修改。以下是vue.config.js的配置
```
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('styles',resolve('src/assets/styles'))
    }
}
```
注意：在使用src的时候 要在别名前面再多加一个**~**符号，例如：
```javascript
@import '~styles/varibles.styl'
```
