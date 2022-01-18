# VSCode 自定义主题样式 [#51](https://github.com/vhxubo/blog/issues/51)

[配置](https://github.com/vhxubo/blog/issues?q=label:配置)

在别的视频中看到别人的`className`显示很好看，于是想尽方法去寻找那个字体

最后，当我放弃的时候，发现[CSS Modules and React | CSS-Tricks](https://css-tricks.com/css-modules-part-3-react/)中使用到该字体：**Operator Mono Ssm**，但是对于我想要的那个好看的样式，需要在 italic 模式下

于是乎，在搜索 Operator Mono 字体时，发现[beichensky/Font: FiraCode 和 Operator Mono 字体](https://github.com/beichensky/Font)中的设置文章

```json
"editor.fontFamily": "Operator Mono",
"editor.fontLigatures": true, 
"editor.tokenColorCustomizations": {
    "textMateRules": [
        {
            "name": "italic font",
            "scope": [
                "comment",
                "keyword",
                 "storage"
            ],
            "settings": {
                "fontStyle": "italic"
            }
        },
    ]
}
```

但是，这里面的 scope 覆盖的太多，通过 `> inspectTMScopes` 便可以知道指定的文本在哪个范围下

最终的配置文件如下

```json
"editor.fontSize": 20,
"editor.renderControlCharacters": true,
"editor.fontFamily": "Operator Mono Lig",
"editor.fontLigatures": true,
"editor.fontWeight": 500,
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "italic font",
      "scope": ["comment", "entity.other.attribute-name.js"],
      "settings": {
        "fontStyle": "italic"
       }
    }
  ]
}
```


## 参考

- [为VSCode 设置好看的字体：Operator Mono_浮沉半生的博客-CSDN博客](https://blog.csdn.net/zgd826237710/article/details/94137781#_19)
- [Adding Custom Syntax Highlighting to a Theme in VSCode | egghead.io](https://egghead.io/lessons/vs-code-adding-custom-syntax-highlighting-to-a-theme-in-vscode)
