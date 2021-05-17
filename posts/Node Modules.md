# Node Modules [#50](https://github.com/vhxubo/blog/issues/50)

这个问题困扰了我好长时间，在`module.exports` `exports` `export`中迷惑不已

只有在`type="module"`时才可以使用到`export`和`import`

## Node Modules
分为 CommonJS 和 ESM

还有 UMD 和 AMD

## 配对使用

## `const xx = require()`

- `module.exports`
- `exports`

## `import { xx } from ''`

- `export`
- `export default`


## 参考

- [JS模块规范：AMD、UMD、CMD、commonJS、ES6 module - SegmentFault 思否](https://segmentfault.com/a/1190000012419990)
- [What are CJS, AMD, UMD, and ESM in Javascript? - DEV Community 👩‍💻👨‍💻](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)
- [Node Modules at War: Why CommonJS and ES Modules Can’t Get Along | by Dan Fabulich | Code Red](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)
- [javascript - "Uncaught SyntaxError: Cannot use import statement outside a module" when importing ECMAScript 6 - Stack Overflow](https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import)
- [The difference between module.exports and exports
](https://blog.tableflip.io/the-difference-between-module-exports-and-exports/)
- [javascript - module.exports vs exports in Node.js - Stack Overflow](https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js)