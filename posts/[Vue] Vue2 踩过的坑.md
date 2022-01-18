# Vue2 踩过的坑 [#41](https://github.com/vhxubo/blog/issues/41)

[Vue](https://github.com/vhxubo/blog/issues?q=label:Vue)

- data不能使用()=>
- 响应式不能监听到数组的变动，需要使用`vm.$set`对数组数据进行更新
- 在刷新页面时可以使用`location.reload()`对页面进行强制刷新
- `confrim()`可以获取到返回值，确定为`true`，否则反之

## 参考

- [javascript 强制刷新页面的实现代码_水中月-CSDN博客](https://blog.csdn.net/qq_37677519/article/details/78111121)
- [HTML DOM confirm() 方法](https://www.w3school.com.cn/htmldom/met_win_confirm.asp)
- [JavaScript 弹出框](https://www.w3school.com.cn/js/js_popup.asp)
- [js 刷新当前页面 | 菜鸟教程](https://www.runoob.com/w3cnote/js-refresh-current-page.html)