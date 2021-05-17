# JavaScript [#31](https://github.com/vhxubo/blog/issues/31)

- [js 文件里，匿名函数开头有个 ；! 意义是什么？_happydecai的博客-CSDN博客](https://blog.csdn.net/happydecai/article/details/79289223)

      js 文件结束 处是 没有 分号的。若几个 js 连在一起时，2个 js 连接处 会发生语法上的混淆。
      开头加 ;  用于分隔， 可以避免多文件 压缩 在一起时 引起的 错误。
      分号和分号放在一起也没问题，相当于 “空语句”。
      加号。相当于加了一层小括号。例如：
      +function(){}();
      相当于：
      (function() { console.log("Foo!"); })();  
      // 或相当于  
      (function() { console.log("Foo!"); }());  
      如果没有这个加号的话，解析器会认为function是一个函数声明的开始，而后面（）将会导致语法错误。在function前面加上+号时，
      就变成了一个函数表达式，而函数表达式后面又添加了一个()就变成了一个立即执行的函数了。

- [读Zepto源码 · reading-zepto](https://yeyuqiudeng.gitbooks.io/reading-zepto/content/)
- [zepto对象思想与源码分析 · 看云](https://www.kancloud.cn/wangfupeng/zepto-design-srouce)
- [Introduction · 函数式编程指北](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)