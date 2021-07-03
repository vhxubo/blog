# IdeaVim 配置 [#58](https://github.com/vhxubo/blog/issues/58)

File -> Settings -> Plugins 搜索安装 **IdeaVim** 和 **IdeaVimExtension** 以及 **IdeaVim-EasyMotion**(依赖 AceJump)

## 配置 IdeaVimExtension
> 将set keep-english-in-normal[-and-restore-in-insert]加入到~/.ideavimrc文件中并重启IDE来启用插件功能
在macOS中,normal模式的输入法可以通过变量keep_input_source_in_normal来设置,仅支持在~/.ideavimrc中使用.例如let keep_input_source_in_normal="com.apple.keylayout.ABC" [hadix-lin/ideavim_extension: IdeaVIM插件的扩展插件](https://github.com/hadix-lin/ideavim_extension)

~/.ideavimrc
```
set keep-english-in-normal-and-restore-in-insert
```

## 配置 IdeaVim-EasyMotion

~/.ideavimrc
```
let mapleader = "\<Space>"
set easymotion
```
