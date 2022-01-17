# Electron 解决方案 [#2](https://github.com/vhxubo/blog/issues/2)

[`electron`](https://github.com/vhxubo/blog/issues?q=label:electron)

## 安装缓慢

```
$ yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/ -g
```

## Vue CLI Plugin Electron Builder 引入 electron 白屏

> https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration

> https://github.com/electron/electron/issues/24005#issuecomment-643705734

在`vue.config.js`新增
```
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
}
```
