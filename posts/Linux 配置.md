# Linux 配置 [#61](https://github.com/vhxubo/blog/issues/61)

## 底端配置

- 安装 zsh
- 安装 oh-my-zsh
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
- 安装 fzf
```
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```
- 安装 tldr
```
npm install -g tldr
```
~/.tldrrc 
```
{
  "themes": {
    "ocean": {
      "commandName": "bold, cyan",
      "mainDescription": "",
      "exampleDescription": "green",
      "exampleCode": "cyan",
      "exampleToken": "dim"
    }
  },
  "theme": "ocean"
}

```

## oh-my-zsh 配置

```sh
# 2021年 08月 17日 星期二 14:49:39 CST
# ~/.zshrc

export PATH=$HOME/bin:/usr/local/bin:$PATH
export ZSH="/home/vhxubo/.oh-my-zsh"
ZSH_THEME="ys"
plugins=(
    z
    cp
    git
    sudo
    extract
    colored-man-pages
    git-open
    zsh-autosuggestions
    zsh-syntax-highlighting
    )
source $ZSH/oh-my-zsh.sh
export EDITOR='nvim'
export BROWSER='/usr/bin/google-chrome-stable'
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

```

### 自带插件

- z 在目录中跳转, 命令 `z`
- cp 提供带有进程的复制命令 `cpv` 
- git 提供 git 相关 alias
- sudo 连按两次 `Esc` 自动添加 sudo
- extract 便捷的解压命令 `x`
- colored-man-pages 高亮 man 帮助

### 额外安装

- git-open 提供快捷打开远程仓库命令, 127 错误时, 需注意配置 `$BROWSER`
```
git clone https://github.com/paulirish/git-open.git $ZSH_CUSTOM/plugins/git-open
```
- zsh-autosuggestions 提供灰色的提示, `Ctrl + e` 或者 `→` 补全
```
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
- zsh-syntax-highlighting 提供命令高亮, 正确为绿色, 错误为红色
```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

## 终端

安装 `https://github.com/dracula/dracula-theme`
zsh 主题: `ys`

## 启动窗口居中

> https://forum.ubuntu.org.cn/viewtopic.php?t=389223
全局设置在：控制中心--窗口行为--窗口行为--高级--放置策略--居中