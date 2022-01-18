# Nodejs Modules 规范对比 [#50](https://github.com/vhxubo/blog/issues/50)

[Node.js](https://github.com/vhxubo/blog/issues?q=label:Node.js)

这个问题困扰了我好长时间，在`module.exports` `exports` `export`中迷惑不已

只有在`type="module"`时才可以使用到`export`和`import`

## Node Modules
分为 CommonJS 和 ESM

还有 UMD 和 AMD

**默认导出不能和后面的 {} 类型导出在一起, 否则会被 {} 导出覆盖**

## 配对使用

## `const xx = require()` /  `const { xx } = require()`

- `module.exports`
- `exports`

```js
// 默认导出
module.exports = var/function
// 导出一个
module.exports.a = a
// 导出多个, 注意在 ES5 中没有结构
module.exports = {
  a: a,
  b: b
}
```

## `import xx from ''` / `import { xx } from ''`

- `export`
- `export default`

```js
// 默认导出
export default var/function
// 导出一个
export a
// 导出多个
export { a, b }
```

## 参考

- [Module 的语法 - ECMAScript 6入门](https://es6.ruanyifeng.com/#docs/module)
- [JS模块规范：AMD、UMD、CMD、commonJS、ES6 module - SegmentFault 思否](https://segmentfault.com/a/1190000012419990)
- [What are CJS, AMD, UMD, and ESM in Javascript? - DEV Community 👩‍💻👨‍💻](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)
- [Node Modules at War: Why CommonJS and ES Modules Can’t Get Along | by Dan Fabulich | Code Red](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)
- [javascript - "Uncaught SyntaxError: Cannot use import statement outside a module" when importing ECMAScript 6 - Stack Overflow](https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import)
- [The difference between module.exports and exports
](https://blog.tableflip.io/the-difference-between-module-exports-and-exports/)
- [javascript - module.exports vs exports in Node.js - Stack Overflow](https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js)
- [CommonJS、AMD、CMD以及ES6的模块系统](https://juejin.cn/post/6977992616411562020)