# VSCodeVim 配置 [#55](https://github.com/vhxubo/blog/issues/55)

[vim](https://github.com/vhxubo/blog/issues?q=label:vim)

## 配置输入法切换

Windows

- 安装英文(美国)输入法
- 微软拼音调整为使用老版本
- 下载 [im-select](https://github.com/daipeihust/im-select)
```
  "vim.autoSwitchInputMethod.enable": true,
  "vim.autoSwitchInputMethod.defaultIM": "1033",
  "vim.autoSwitchInputMethod.obtainIMCmd": "C:\\tools\\im-select.exe",
  "vim.autoSwitchInputMethod.switchIMCmd": "C:\\tools\\im-select.exe {im}",
```

## 保存退出插入模式

- 安装VSCode插件: [macros - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=geddski.macros)
- 添加配置
```json
  "macros": {
    "saveAndEscapeVim": ["workbench.action.files.save", "extension.vim_escape"]
  },
```
- 添加键映射
```json
  {
    "key": "ctrl+s",
    "command": "macros.saveAndEscapeVim",
    "when": "editorTextFocus && vim.active && !inDebugRepl"
  }
```