# template vs Component [#65](https://github.com/vhxubo/blog/issues/65)

[微信小程序](https://github.com/vhxubo/blog/issues?q=label:微信小程序)

在使用 Component 时, 我们会发现, 在渲染出来的的 wxml 中, 拥有很多的 template

## 区别

两者的区别还是很大的, 或者说不能直接用来比较, 下面主要讲一下用法区别

Component 拥有完整的事件机制, 而 template 只留了 name 属性作为 template 的标识符, data 属性用来传输数据

*模板拥有自己的作用域，只能使用 data 传入的数据以及模板定义文件中定义的 `<wxs />` 模块。*

在使用时, Component 需要在 json 文件中引用, 而 template 可以直接写在 wxml 中, 或者使用 import/include 引用, 使用 is 指明使用的 template

template 其实就相当于 整个 wxml 文件外套了一层 <template> , 在<template> 中还可以包含 <wxs>

**在小程序的 Mustache 中, `<template is="" data={{title: 'test', body: 'hello'}}></template>`中的对象需要进行解耦**

## 参考链接

- [模板 | 微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/template.html)
- [Component(Object object) | 微信开放文档 ](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html)