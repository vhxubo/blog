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

## oh-my-zsh 配置

```sh
# 2021年 08月 17日 星期二 14:49:39 CST
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

- 安装 zsh-autosuggestions
    > https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh
```
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

## 终端

安装 `https://github.com/dracula/dracula-theme`
zsh 主题: `ys`

## 启动窗口居中

> https://forum.ubuntu.org.cn/viewtopic.php?t=389223
全局设置在：控制中心--窗口行为--窗口行为--高级--放置策略--居中