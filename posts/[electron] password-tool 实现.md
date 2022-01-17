# password-tool 实现 [#3](https://github.com/vhxubo/blog/issues/3)

[electron](https://github.com/vhxubo/blog/issues?q=label:electron)

> https://github.com/vhxubo/password-tool

## 开源项目

- [vuetify](https://github.com/vuetifyjs/vuetify)
- [lowdb](https://github.com/typicode/lowdb)

## 白屏优化

## 图标显示问题

## 页面美化

## 实现文件拖放

```html
<v-data-table
  :headers="headers"
  :items="desserts"
  :search="search"
  @dragstart.native.prevent
  @dragover.native.prevent="getDraggedFile"
  @dragleave.native.prevent
  @drop.native.prevent="getDroppedFile"
></v-data-table>
```

```javascript
methods: {
  getDroppedFile(event) {
    console.log(event.dataTransfer.files[0]);
  },
  getDraggedFile(event) {
    console.log(event.dataTransfer.items[0]);
  }
}
```

## 解决 Vue 列表数据渲染不能及时更新的问题

> https://cn.vuejs.org/v2/guide/list.html
> https://cn.vuejs.org/v2/guide/reactivity.html

### 方案一

清空数组，使用 concat 触发

```
this.desserts = []
this.desserts = this.desserts.concat(db.get('items').value())
```

### 方案二
使用 concat 触发并引入 lodash 进行数据去重

```
const _ = require('lodash')
this.desserts = _.uniq(this.desserts.concat(db.get('items').value()))
```

## Edit 直接影响到表格数据

> [javascript对象的浅拷贝、深拷贝和Object.assign方法浅析_贝贝的前端 - SegmentFault 思否](https://segmentfault.com/a/1190000014107100)

### 原因分析
使用了数据的浅拷贝（直接赋值），应当使用深拷贝解决

浅拷贝直接引用的地址

```
this.item = item
```

### 解决方案
使用数据的深拷贝对数据进行转移

```
this.item = Object.assign({}, item)
```

## 去除默认应用菜单

```
import { app, protocol, BrowserWindow, Menu } from 'electron'
...
Menu.setApplicationMenu(null)
```