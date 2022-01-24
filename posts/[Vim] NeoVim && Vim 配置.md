# NeoVim && Vim 配置 [#62](https://github.com/vhxubo/blog/issues/62)

[Vim](https://github.com/vhxubo/blog/issues?q=label:Vim)

- [Vimrc Configuration Guide - How to Customize Your Vim Code Editor with Mappings, Vimscript, Status Line, and More](https://www.freecodecamp.org/news/vimrc-configuration-guide-customize-your-vim-editor/)
- [Top 50 Vim Configuration Options - ShortcutFoo Blog](https://www.shortcutfoo.com/blog/top-50-vim-configuration-options/)


```shell
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```
```bash
" ~/.config/nvim/init.vim
call plug#begin()
    Plug 'iamcco/markdown-preview.nvim', { 'do': 'cd app && yarn install'  }
    Plug 'preservim/nerdtree'
    Plug 'mhinz/vim-startify'
    Plug 'tpope/vim-commentary'
    Plug 'tpope/vim-surround'
    Plug 'dracula/vim'
    Plug 'vim-airline/vim-airline'
call plug#end()

colorscheme dracula
let g:airline_theme='dracula'

set cursorline

let mapleader=','
map <leader>n :NERDTreeToggle<CR>

set clipboard+=unnamedplus
set nu
set rnu
set scrolloff=5

" 设置tab缩进
set tabstop=4
set softtabstop=4
set shiftwidth=4
set smarttab
set expandtab


function! CleverTab()
        if strpart( getline('.'), 0, col('.')-1 ) =~ '^\s*$'
                return "\<Tab>"
        else
                return "\<C-N>"
        endif
endfunction
inoremap <Tab> <C-R>=CleverTab()<CR>

" 复制后高亮
augroup highlight_yank
    autocmd!
    au TextYankPost * silent! lua vim.highlight.on_yank()
augroup END
```

## Manjaro 下设置剪贴板

> https://blog.csdn.net/weixin_43704946/article/details/106421747
安装一个用于管理系统剪贴板的工具：sudo pacman -S xsel
然后在.vimrc中添加一句：set clipboard+=unnamedplus即可

> 如何将 Vim 剪贴板里面的东西粘贴到 Vim 之外的地方？ - bingo的回答 - 知乎
https://www.zhihu.com/question/19863631/answer/145592576
此外, 从外部的剪贴板数据, 可以通过 `Shift + Insert` 粘贴到 vim/neovim 中

> [Windows/Mac/Linux 如何将内容输出到剪贴板 - SegmentFault 思否](https://segmentfault.com/a/1190000024579429)
```shell
// 将输出复制至剪贴板
$ echo "hello linux" | xsel -b

// 将文件中的内容全部复制至剪贴板
$ xsel < remade.md
```