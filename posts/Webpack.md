# Webpack

[#32](https://github.com/vhxubo/blog/issues/32)

Webpack是一个前端打包工具，只能用于采用模块化开发的项目。

Webpack最主要的就是各种loader和plugin

v5与v4差别较大，在使用时以官网文档为准。

对于学习还是需要用到再去学比较好呀，笼统的全学了太难为人了

## html-webpack-pulgin

## css-loader,style-loader

## mini-css-extract-plugin

## 清理dist目录

通常比较推荐的做法是，在每次构建前清理 /dist 文件夹，这样只会生成用到的文件。让我们使用 output.clean 配置项实现这个需求。

```js
 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
    clean: true,  //like this
   },
 };
```

## 参考

- [「吐血整理」再来一打Webpack面试题](https://juejin.cn/post/6844904094281236487)
- [webpack](https://webpack.docschina.org/)
- [深入浅出 Webpack · 深入浅出 Webpack](http://webpack.wuhaolin.cn/)
- [Babel · The compiler for next generation JavaScript](https://babeljs.io/setup#installation)
- [管理输出 | webpack 中文文档](https://webpack.docschina.org/guides/output-management/#preparation)
- [资源模块 | webpack 中文文档](https://webpack.docschina.org/guides/asset-modules/)
- [简析 webpack 的打包优化 - SegmentFault 思否](https://segmentfault.com/a/1190000039757986)
- [javascript - Managing jQuery plugin dependency in webpack - Stack Overflow](https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack)
- [webpack常用插件，走起~](https://juejin.cn/post/6844903918862860301#heading-1)
- [webpack入门学习笔记05 —— 使用webpack打包编译css文件](https://juejin.cn/post/6844903873295941645#heading-4)
- [webpack入门学习笔记06 —— 使用babel打包编译js文件](https://juejin.cn/post/6844903877167284232)
- [深入源码理解webpack是如何保证plugins的执行顺序的](https://juejin.cn/post/6858505844397768718)