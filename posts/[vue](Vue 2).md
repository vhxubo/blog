# Vue 2 [#63](https://github.com/vhxubo/blog/issues/63)

[`vue`](https://github.com/vhxubo/blog/issues?q=label:vue)

## 解决 Vue 变量未渲染前代码显示问题
> https://cn.vuejs.org/v2/api/index.html?#v-cloak

```css
[v-cloak] {
  display: none;
}
```
```html
<div v-cloak>
  {{ message }}
</div>
```