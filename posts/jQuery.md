# jQuery [#44](https://github.com/vhxubo/blog/issues/44)

2021.04.17
今天心血来潮，想着用jQuery来做一个浏览器插件吧，结果差点掉坑里出不来了

jQuery在一定程度上原生舒服多了，很方便的，不懂得为什么很多人不喜欢他，可能做的都是大一点的项目吧

总结一下今天用到的几个API

## 加载

```js
// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});
```

## 添加元素

```js
$('#labels').append('<p>label</p>'); //可以是数组
```

- [.append() | jQuery API Documentation](https://api.jquery.com/append/)

## Ajax

`$.ajax()` 记得后面的`.`

### 解决400错误

在处理提交data时，`data:JSON.stringify({username:'xxx'})`，再将dataType设置为json

- [Getting 400 bad request error in Jquery Ajax POST - Stack Overflow](https://stackoverflow.com/questions/16017081/getting-400-bad-request-error-in-jquery-ajax-post)
- [jQuery.ajax returns 400 Bad Request - Stack Overflow](https://stackoverflow.com/questions/4156991/jquery-ajax-returns-400-bad-request/4157064)

### 设置Header

直接写入
```js
header:{Accept:''}
```

- [jquery ajax设置header的两种方式_G_wendy的博客-CSDN博客](https://blog.csdn.net/G_wendy/article/details/80679197)

