# Less CSS 预处理 [#64](https://github.com/vhxubo/blog/issues/64)

最开始的时候, 选择学习了 SCSS, 主要是它与 CSS 语法很相似

但是学过之后, 后面就再也没有用到过它, 毕竟自己的项目没有那么大, 配置它的时间可能就能写不少的业务代码了

最近在研究小程序组件开发时, 发现越来越多的前端组件库使用 Less 作为自己的 CSS 预处理, 而且与最开始不同的是, Less 和 CSS 也好像...

后来发现是历史遗留问题, SASS/SCSS 的环境不好配置(确实), 所有团队协作用 Less 的就比较多了

## 变量

Less 变量使用 `@` 标识

```less
@bg-color: #fafafa;

body {
    background-color: @bg-color;
}

//  编译结果
body {
  background-color: #fafafa;
}
```

## &

需要注意 &. 和 . 是不同的, 前者是联合选择器, 后面是父子选择器

```less
.button {
  &-size__large {
    color: red;
  }
  &-content {
    color: blue;
  }
  &.primary {
    color: green;
  }
  .others {
    color: black;
  }
}
// 编译结果
.button-size__large {
  color: red;
}
.button-content {
  color: blue;
}
.button.primary {
  color: green;
}
.button .others {
  color: black;
}
```


