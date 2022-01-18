# Vue 3 [#30](https://github.com/vhxubo/blog/issues/30)

[Vue](https://github.com/vhxubo/blog/issues?q=label:Vue)

## Vue Devtools 不支持 Vue3 Vuex

通过使用 vuex 提供的 `createLogger` 插件，在 console 中查看

- [Vuex 4 devtools integration · Issue #1942 · vuejs/vuex](https://github.com/vuejs/vuex/issues/1942)
- [vuex/index.js at 4.0 · vuejs/vuex](https://github.com/vuejs/vuex/blob/4.0/examples/composition/chat/store/index.js)


## Vue Router 页面跳转数据不更新

我的解决方案:`location.href='/room/xxxx'`

官方解决方案
- [v4.x | 带参数的动态路由匹配 | Vue Router](https://next.router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96)
- [v3.x | 动态路由匹配 | Vue Router](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96)
- [Vue Router 10 条高级技巧 - SegmentFault 思否](https://segmentfault.com/a/1190000039921701)
- [vue路由跳转不刷新 - SegmentFault 思否](https://segmentfault.com/q/1010000015992883)


## 数据绑定`v-model`
> v-model默认绑定的是**value**，针对表单数据的。如果是自定义组件，记得修改监听

在Vue3中提供了`modelValue`和`update:modelValue`，对应`v-model`的使用
自定义组件使用数据流双向绑定时，需要设置为其他的，否则还是单向的数据

**在使用props作为响应式时一定是用`toRefs()`解耦操作**
> [介绍|watch 响应式更改 | Vue.js](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#watch-%E5%93%8D%E5%BA%94%E5%BC%8F%E6%9B%B4%E6%94%B9)

- [自定义事件 | Vue.js](https://v3.cn.vuejs.org/guide/component-custom-events.html#v-model-%E5%8F%82%E6%95%B0)
- [Vue父子组件如何双向绑定传值](https://juejin.cn/post/6844903648527384583)

### 实现对任意父子组件数据的双向绑定

子组件
```vue
<template>
  {{ jsonRef }}
  <button @click="addJson">add</button>
</template>
<script>
import { ref, watch,toRefs } from 'vue'
export default {
  props: ['json'],
  emits: ['update:json'],
  setup(props, context) {
    // 这样是不行的，怎么说呢，就是这个数据太深入了监听不到
    // const jsonRef = ref(props.json)
    //应该是这样的***********
    const { json: jsonRef } = toRefs(props)
    const addJson = () => {
      jsonRef.value += 1
    }
//自定义事件中可以进行watch对数据进行更新
    watch(jsonRef, () => {
      context.emit('update:json', jsonRef.value)
    })
    return { jsonRef, addJson }
  },
}
</script>
```

父组件
```vue

<template>
  <div class="home">This is the home page</div>
  <Test v-model:json="json" />
</template>

<script>
import Test from '@/components/Test.vue'
import { ref, watch } from 'vue'
export default {
  name: 'Home',
  components: { Test },
  setup() {
    const json = ref('hello emit')
// 父组件监听数据
    watch(json, () => console.log(json.value))

    return { json }
  },
}
</script>
```

## 响应式遇到的问题

- 在使用 ref 时记得 return
- 使用 ref 时记得加`.value`
- 使用 reactive 传输数据时可以使用`toRaw`还原数据
- 数据响应式可能会延迟，使用`watch`对数据进行监听


## 生命周期

除了beforecate和created(它们被setup方法本身所取代)，我们可以在setup方法中访问的API生命周期钩子有9个选项:

- onBeforeMount – 在挂载开始之前被调用：相关的 render 函数首次被调用。
- onMounted – 组件挂载时调用
- onBeforeUpdate – 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
- onUpdated – 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
- onBeforeUnmount – 在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。
- onUnmounted – 卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。
- onActivated – 被 keep-alive 缓存的组件激活时调用。
- onDeactivated – 被 keep-alive 缓存的组件停用时调用。
- onErrorCaptured – 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。

[Vue 3 生命周期完整指南 - SegmentFault 思否](https://segmentfault.com/a/1190000039680245)


## 在 Vue 中如何在模板中使用其他库函数
 
> 在 setup 中写新的函数调用库函数

模板调用
```
{{ dateTimeFormat(datetime) }}
```

函数设定
```javascript
    const dateTimeFormat = datetime =>
      dayjs(datetime).format("YYYY-MM-DD HH:mm:ss");
```

## computed 也需要使用 .value

## 参考链接

- [模板语言中使用函数](https://segmentfault.com/q/1010000016970850/a-1020000016975332)