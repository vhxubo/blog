# 监听滚动事件 [#14](https://github.com/vhxubo/blog/issues/14)

[`javascript`](https://github.com/vhxubo/blog/issues?q=label:javascript)

## 监听滚动事件

> 实现针对 Issue 的进度提醒

有的文章下面有很多的评论，而浏览器的滚动条是全局的进度，对阅读很不友好。阮一峰的ES6教程中就实现了文章进度条的功能，很舒服。

### 思路

- 获取到第一条 Issue 的高度，相当于它同一层级的下个元素距离顶端的距离a，到这个部分就是阅读结束的位置。
- 获取到全局滚动条距离顶部的距离b
- b/a就是阅读第一条的进度
- 全局增加 scroll 监听事件
- 在界面中加入进度数据元素

### 实现

使用油猴脚本实现：

```
// ==UserScript==
// @name         GitHub Issue Read Process
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  GitHub Issue 阅读进度
// @author       Vhxubo
// @match        https://github.com/*/*/issues/*
// @run-at document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var element = document.querySelector('.js-issue-timeline-container');
    if (element){
        var processEle = document.createElement('div');
        var processStr = document.createTextNode('0%');
        processEle.style.cssText = 'position:fixed;bottom:0px;left:0px;z-index:9999;font-height:800;font-size:2rem;color:#d1d5da;user-select:none';
        processEle.appendChild(processStr);
        document.body.appendChild(processEle);

        window.addEventListener('scroll',function(){
            var process = Number.parseInt((document.documentElement.scrollTop/(element.offsetTop-window.innerHeight))*100);
            if (process >= 0 && process <= 100)
            {
                processEle.innerText = process+'%';
            }else{
                processEle.innerText = '100%';
            }
        })
    }
})();
```

### bug

打开新页面无法完美处理，只能刷新解决

### 参考链接

- [原生js监听页面滚动事件_养只猫的博客-CSDN博客_js监听滚动事件](https://blog.csdn.net/qq_40816649/article/details/86512538)
- [js获取滚动条位置：绝对有效_加菲猫的快乐生活--我的理想-CSDN博客_js判断滚动条位置](https://blog.csdn.net/gimsoft/article/details/4424781)
- [JS 获取屏幕、浏览器、页面的高度宽度_流水账 - SegmentFault 思否](https://segmentfault.com/a/1190000010443608)
- [javascript createElement(), style problem - Stack Overflow](https://stackoverflow.com/questions/5927012/javascript-createelement-style-problem)
- [JavaScript動態載入DOM元素. 前陣子公司的行銷跟新的媒體合作，說是要我們做一個 banner… | by Mike | I am Mike | Medium](https://medium.com/i-am-mike/javascript%E5%8B%95%E6%85%8B%E8%BC%89%E5%85%A5dom%E5%85%83%E7%B4%A0-de051d8b0ff2)


