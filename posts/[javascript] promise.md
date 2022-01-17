# promise [#15](https://github.com/vhxubo/blog/issues/15)

[javascript](https://github.com/vhxubo/blog/issues?q=label:javascript)

## promise
- 订阅模式
- callback

### 使用方法

```javascript
const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('pro1 done')
  }, 1000)
})
pro1.then(value => console.log(value))

// result: pro1 done
```

```javascript
function con (msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg)
    }, time)
  })
}

con('hello', 1000).then(value => console.log(value))
```

### 解析

> 三种状态，两个内置函数；一旦承诺，无法从外部终止；多个promise不会 ~堵塞~

#### 三种状态
1. pending（进行中）
2. fulfilled（已成功）
3. rejected（已失败）

#### 内置函数
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

resolve(value) — 如果任务成功完成并带有结果 value。
reject(error) — 如果出现了 error，error 即为 error 对象。

state — 最初是 "pending"，然后在 resolve 被调用时变为 "fulfilled"，或者在 reject 被调用时变为 "rejected"。
result — 最初是 undefined，然后在 resolve(value) 被调用时变为 value，或者在 reject(error) 被调用时变为 error。

## Promise.all

`Promise.all`会等待耗时最长的promise,如果遇到失败，则全部失败。成功返回value数组。

以下代码将在5000ms后直接报错。

```javascript
const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('pro1 done')
  }, 1000)
})

const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('pro2 done')
  }, 2000)
})

const proerror = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('fuck'))
  }, 5000)
})

Promise.all([pro1, pro2, proerror]).then(values => console.log(values))

```

### 参考链接

- [Promise](https://zh.javascript.info/promise-basics)
- [Promise 对象 - ECMAScript 6入门](https://es6.ruanyifeng.com/#docs/promise)
- [Promise - 高级一点的例子 - code sample](https://mdn.mozillademos.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise$samples/%E9%AB%98%E7%BA%A7%E4%B8%80%E7%82%B9%E7%9A%84%E4%BE%8B%E5%AD%90?revision=1652811)
