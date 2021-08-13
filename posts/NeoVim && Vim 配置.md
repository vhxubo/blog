# NeoVim && Vim 配置 [#62](https://github.com/vhxubo/blog/issues/62)

- [Vimrc Configuration Guide - How to Customize Your Vim Code Editor with Mappings, Vimscript, Status Line, and More](https://www.freecodecamp.org/news/vimrc-configuration-guide-customize-your-vim-editor/)
- [Top 50 Vim Configuration Options - ShortcutFoo Blog](https://www.shortcutfoo.com/blog/top-50-vim-configuration-options/)

```
# ~/.config/nvim/init.vim

set number
set rnu

```

## Manjaro 下设置剪贴板

> https://blog.csdn.net/weixin_43704946/article/details/106421747
安装一个用于管理系统剪贴板的工具：sudo pacman -S xsel
然后在.vimrc中添加一句：set clipboard+=unnamedplus即可

> 如何将 Vim 剪贴板里面的东西粘贴到 Vim 之外的地方？ - bingo的回答 - 知乎
https://www.zhihu.com/question/19863631/answer/145592576
此外, 从外部的剪贴板数据, 可以通过 `Shift + Insert` 粘贴到 vim/neovim 中