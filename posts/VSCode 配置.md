# VSCode 配置 [#54](https://github.com/vhxubo/blog/issues/54)

## 保存时死循环

- 关闭 `Editor: Format On Save`
- 设置 `Editor: Code Actions On Save`
```json
  "editor.codeActionsOnSave":{
     "source.fixAll": true
  }
```
    
