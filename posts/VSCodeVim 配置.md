# VSCodeVim 配置 [#55](https://github.com/vhxubo/blog/issues/55)

## 配置输入法切换

Windows

- 安装英文(美国)输入法
- 下载 [im-select](https://github.com/daipeihust/im-select)
```
  "vim.autoSwitchInputMethod.enable": true,
  "vim.autoSwitchInputMethod.defaultIM": "1033",
  "vim.autoSwitchInputMethod.obtainIMCmd": "C:\\tools\\im-select.exe",
  "vim.autoSwitchInputMethod.switchIMCmd": "C:\\tools\\im-select.exe {im}",
```