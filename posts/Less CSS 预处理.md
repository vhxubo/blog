# Less CSS 预处理 [#64](https://github.com/vhxubo/blog/issues/64)

最开始的时候, 选择学习了 SCSS, 主要是它与 CSS 语法很相似

但是学过之后, 后面就再也没有用到过它, 毕竟自己的项目没有那么大, 配置它的时间可能就能写不少的业务代码了

最近在研究小程序组件开发时, 发现越来越多的前端组件库使用 Less 作为自己的 CSS 预处理, 而且与最开始不同的是, Less 和 CSS 也好像...

后来发现是历史遗留问题, SASS/SCSS 的环境不好配置(确实), 所以团队协作用 Less 的就比较多了

[Less To CSS Playground](https://lesscss.org/less-preview/)

# Variables

声明变量: `@` 标识, 值无需引号, 使用分号结尾

需要使用 `@{}` 的情况:

- 使用变量名拼接类名/字符串
- 使用变量作为 *key*

```less
@width-base: 10%;
@prefix: t;
#@{prefix}-app {
  width: @width-base + 12px;
}
// 编译结果
#t-app {
  width: 22%;
}
```

## Operations
变量可以进行运算, 单位**按照第一次出现的单位计算**
```less
// numbers are converted into the same units
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // result is 4px

// example with variables
@base: 5%;
@filler: @base * 2; // result is 10%
@other: @base + @filler; // result is 15%

@color: #224488 / 2; //results in #112244
background-color: #112244 + #111; // result is #223355
```

## Mixins

Less 支持创建可复用的 Mixins, 建议一直使用带有括号的做法

**不带括号的做法会将 Mixins 编译成 CSS, 而带括号的只会渲染到调用 Mixins 的地方**

两种前缀: `.` `#`

两种声明/使用方式: `.border` `.border()`



##  Nesting

### &

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


## 参考链接

- [学习Less-看这篇就够了 - 掘金](https://juejin.cn/post/6844903520441729037)
- [Getting started | Less.js](https://lesscss.org/)