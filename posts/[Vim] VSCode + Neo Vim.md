# VSCode + Neo Vim [#38](https://github.com/vhxubo/blog/issues/38)

[Vim](https://github.com/vhxubo/blog/issues?q=label:Vim)

最开始的时候接触到vim，学习了好长时间，改了键位等等，但是最后还是死在了对vim的配置上面。

后来在VSCode里面使用vim键位，用了一段时间之后，发现打开文件的速度也太慢了，就放弃了vim。

想着不如直接学好VSCode自带的快捷键好了，于是乎开始深入学习VSCode，参照极客学院的VSCode教程。

直到现在，换上了VSCode的Neo Vim插件[Neo Vim - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim)，打开速度可以接受，操作方法在Insert模式下与VSCode相互兼容，是一个很不错的选择。

# init.vim

> updatetime: 2021年7月9日
path: C:\Users\vhxubo\AppData\Local\nvim\init.vim

```
" 配置插件
call plug#begin('~/AppData/Local/nvim/plugged')

Plug 'tpope/vim-surround'
Plug 'asvetliakov/vim-easymotion'
Plug 'vim-scripts/argtextobj.vim'

call plug#end()

" 配置输入法切换的能力
autocmd InsertLeave * :silent :!C:\\tools\\im-select.exe 1033 && C:\\tools\\im-select.exe 2052

" 公用剪贴板
set clipboard^=unnamed,unnamedplus

" 配置leader
let mapleader = "\<Space>"

" 取消双leader
" map <Leader> <Plug>(easymotion-prefix)

" 配置快速修复
nnoremap <Leader>. <Cmd>call VSCodeNotify('editor.action.quickFix')<CR>

" VSCode侧边栏
nnoremap <Leader>b <Cmd>call VSCodeNotify('workbench.action.toggleSidebarVisibility')<CR>

" 复制后高亮
augroup highlight_yank
    autocmd!
    au TextYankPost * silent! lua vim.highlight.on_yank()
augroup END
```

## 配置`Ctrl+S`保存文件并退出insert模式

- 安装VSCode插件: [macros - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=geddski.macros)
- 添加配置
```json
  "macros": {
    "saveAndEscapeNeovim": [
      "workbench.action.files.save",
      "vscode-neovim.escape"
    ]
  }
```
- 添加键映射
```json
  {
    "key": "ctrl+s",
    "command": "macros.saveAndEscapeNeovim",
    "when": "editorTextFocus && neovim.mode == insert"
  }
```

- [visual studio code - How to bind one key to multiple commands in VSCode - Stack Overflow](https://stackoverflow.com/questions/49177014/how-to-bind-one-key-to-multiple-commands-in-vscode)
- [odd default <Esc> key binding · Issue #74 · asvetliakov/vscode-neovim](https://github.com/asvetliakov/vscode-neovim/issues/74)
- [在VSCode中，在保存时退出Vim插入模式 - Thinbug](https://www.thinbug.com/q/49050087)
## 列选择

`CTRL + V` 列选择

- [vim的列编辑操作 - 小望 - 博客园](https://www.cnblogs.com/xiaowant/articles/1992923.html)
- [Vim 列编辑功能详细讲解 - FreeBlues的个人空间 - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/freeblues/blog/689397)


## 替换一个文本（从寄存器里面读）
> [Vim 寄存器完全手册 | Harttle Land](https://harttle.land/2016/07/25/vim-registers.html#header-2)

```
y yaw
daw
"0p
```


## 取消搜索之后的高亮
> [在vim中取消搜索的高亮_What the Fuck-CSDN博客_vim取消搜索](https://blog.csdn.net/k7arm/article/details/77370181)

```
:nohlsearch
:noh
```

## 配置语言切换能力

- 将win10输入法设置为旧版模式
- 安装英文语言
- 下载im-select，放在`C:\tools`目录下
- `C:\Users\vhxubo\AppData\Local\nvim\init.vim`添加如下配置

```
autocmd InsertLeave * :silent :!C:\\tools\\im-select.exe 1033 && C:\\tools\\im-select.exe 2052
```

## 配置剪贴板

> [Copy paste not working in neovim : neovim](https://www.reddit.com/r/neovim/comments/cegt9j/copy_paste_not_working_in_neovim/)

```
set clipboard^=unnamed,unnamedplus
```

## 代码折叠方案

使用VSCode的折叠快捷键，配合`gj` `gk`替代jk防止展开
`Ctrl + Shift + [` 折叠代码
`Ctrl + Shift + ]` 展开代码

## 配置`vim-easymotion`

- vim-easymotion默认为双leader，取消了比较方便
```
" 配置leader为空格
let mapleader = "\<Space>"

" 取消双leader
map <Leader> <Plug>(easymotion-prefix)
```

`<leader>-fw` 寻找w
`<leader>-w` 对文本增加字符跳转前缀

    Default Mapping      | Details
    ---------------------|----------------------------------------------
    <Leader>f{char}      | Find {char} to the right. See |f|.
    <Leader>F{char}      | Find {char} to the left. See |F|.
    <Leader>t{char}      | Till before the {char} to the right. See |t|.
    <Leader>T{char}      | Till after the {char} to the left. See |T|.
    <Leader>w            | Beginning of word forward. See |w|.
    <Leader>W            | Beginning of WORD forward. See |W|.
    <Leader>b            | Beginning of word backward. See |b|.
    <Leader>B            | Beginning of WORD backward. See |B|.
    <Leader>e            | End of word forward. See |e|.
    <Leader>E            | End of WORD forward. See |E|.
    <Leader>ge           | End of word backward. See |ge|.
    <Leader>gE           | End of WORD backward. See |gE|.
    <Leader>j            | Line downward. See |j|.
    <Leader>k            | Line upward. See |k|.
    <Leader>n            | Jump to latest "/" or "?" forward. See |n|.
    <Leader>N            | Jump to latest "/" or "?" backward. See |N|.
    <Leader>s            | Find(Search) {char} forward and backward.
                         | See |f| and |F|.

## Neo Vim

- 切换大小写: `gu`小写
- `gU` 大写 
```
The gu, gU, and ~ are case operators.

To lowercase, uppercase, or toggle-case:

- the whole line: guu, gUU, g~~
- a word: guw, gUw, g~w
- a word object: guiw, gUiw, g~iw
- the character under cursor: vu, vU, ~
```
- 替换文本 `:s/test/boo/g` 替换此行中的test为boo
- `:%s/test/bool/g` 替换所有行的
- `:5,12s/foo/bar/g` 替换5到12行
- [Search and replace | Vim Tips Wiki | Fandom](https://vim.fandom.com/wiki/Search_and_replace)
- `<C-p>` 在代码补全窗口下等同于 `Up`
- `<C-n>` 在代码补全窗口下等同于 `Down`
- 删除`d` `dd` `dnw`
- 复制`y` `yy` `ynw`
- 修改 `s` `S`修改整行
- 撤回 `u` `U`
- 重做上一个操作 `ctrl + r` 
- 重复 `.`
- 切换tab：`gt`向后 `gT`向前
- 查看定义：`gh`
- 粘贴`p` `P`
- 添加新行 `o` `O`
- 全选`gg -> v -> G`
- 格式化代码`=` `==`
- 多行操作`V -> mi/ma` 可以进行多行注释
- 向上翻页  `Ctrl+f` `Ctrl+e`
- 向下翻页 `Ctrl+b` `Ctrl+y`
- 替换模式 `r` 替换一个词替换完之后立马恢复 `R` 替换多个词不自动返回
- 删除并插入 `s` 修改几个 `S` 修改整行
- 下一个单词 `w` `W`
- 上一个单词 `b` `B`
- 词尾 `e` `E`
- 当前行居中 `zz` 置顶`zt` 置底`zb`
- 缩进 `<` `>`
- 屏幕内顶行 `H` 底行 `L`

![image](https://user-images.githubusercontent.com/17352372/114885759-8ebce280-9e39-11eb-8f40-ad52df169621.png)

## 插件

### 安装

在Windows下，nvim的配置文件在`~/AppData/Local/nvim/init.vim`下，默认不存在，需要自己创建

- 安装[junegunn/vim-plug](https://github.com/junegunn/vim-plug)
- 将`plug.vim`放到`~/AppData/Local/nvim/autoload/`下
- 修改`init.vim`
```
call plug#begin('~/AppData/Local/nvim/plugged')

Plug 'tpope/vim-surround'

call plug#end()
```
- 在nvim窗口下，执行`:PlugInstall`


### [tpope/vim-surround](https://github.com/tpope/vim-surround)

删除一个配对符号 (delete a surrounding) `ds`
更改一个配对符号 (change a surrounding) `cs`
增加一个配对符号 (yank a surrounding) `ys`
在新的行增加一个配对符号并进行缩进 `yS`
在整行增加一个配对符号 `yss`
在整行增加一个配对符号，配对符号单独成行并进行缩进 `ySs` `Yss`
在行选择中，`S<div>`

![691e0c29gy1frp69jz0x6g20ic0ds779](https://user-images.githubusercontent.com/17352372/114965057-73d28880-9ea2-11eb-9c7d-78af02113699.gif)

## 参考

- [vscode 集成 Neovim - 简书](https://www.jianshu.com/p/ac739c6ea541)
- [Windows 10 系统下 Neovim 安装与配置 - jdhao's blog](https://jdhao.github.io/2018/11/16/neovim_configuration_windows-zh/)
- [Vim插件推荐--surround安装方法介绍与使用方法 | vim教程网](https://vimjc.com/vim-surround-plugin.html)
- [Neovim Setting up the basics | Chris@Machine](https://www.chrisatmachine.com/Neovim/02-vim-general-settings/)
- [Highlight Yanked Region in Nvim/Vim - jdhao's blog](https://jdhao.github.io/2020/05/22/highlight_yank_region_nvim/)