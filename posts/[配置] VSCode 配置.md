# VSCode 配置 [#54](https://github.com/vhxubo/blog/issues/54)

[配置](https://github.com/vhxubo/blog/issues?q=label:配置)

## 保存时死循环

- 关闭 `Editor: Format On Save`
- 设置 `Editor: Code Actions On Save`
```json
  "editor.codeActionsOnSave":{
     "source.fixAll": true
  }
```
    
## 外部使用 Windows Terminal

> https://stackoverflow.com/questions/62894666/path-and-name-of-exe-file-of-windows-terminal-preview

快捷键: `Ctrl + Shift + C`
配置项
```
"terminal.external.windowsExec": "%LocalAppData%\\Microsoft\\WindowsApps\\wt.exe"
```