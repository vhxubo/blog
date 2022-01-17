# IdeaVim 配置 [#58](https://github.com/vhxubo/blog/issues/58)

[vim](https://github.com/vhxubo/blog/issues?q=label:vim)

> ["set" commands · JetBrains/ideavim Wiki](https://github.com/JetBrains/ideavim/wiki/%22set%22-commands)

File -> Settings -> Plugins 搜索安装 **IdeaVim** 和 **IdeaVimExtension** 以及 **IdeaVim-EasyMotion**(依赖 AceJump)

~/.ideavimrc
```
set keep-english-in-normal-and-restore-in-insert

let mapleader=" "
set clipboard^=unnamed,unnamedplus

set commentary
set easymotion
set surround
" 将参数作为a对象
set argtextobj
" 高亮复制的数据
set highlightedyank

" Don't use Ex mode, use Q for formatting.
map Q gq

""" Plugin settings -------------------------
let g:argtextobj_pairs="[:],(:),<:>"

""" Common settings -------------------------
set showmode
set scrolloff=5

set incsearch
set hlsearch
" :noh
set smartcase
set ignorecase

set number
set relativenumber

""" Idea specific settings ------------------
set ideajoin
set ideastatusicon=gray
set idearefactormode=keep

""" Mappings --------------------------------
map <leader>f <Plug>(easymotion-s)
map <leader>e <Plug>(easymotion-f)

map <leader>d <Action>(Debug)
map <leader>r <Action>(RenameElement)
map <leader>c <Action>(Stop)
map <leader>z <Action>(ToggleDistractionFreeMode)

map <leader>s <Action>(SelectInProjectView)
map <leader>a <Action>(Annotate)
map <leader>h <Action>(Vcs.ShowTabbedFileHistory)
map <S-Space> <Action>(GotoNextError)

map <leader>b <Action>(ToggleLineBreakpoint)
map <leader>o <Action>(FileStructurePopup)

```

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

## 使用键盘创建文件

> [[idea] 如何脱离鼠标快速新建文件_朱同学的博客-CSDN博客_idea新建文件快捷键](https://blog.csdn.net/a755199443/article/details/89488549)

`Alt` + `Insert`