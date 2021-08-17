# Linux 配置 [#61](https://github.com/vhxubo/blog/issues/61)

## 底端配置

- 安装 zsh
- 安装 oh-my-zsh
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
- 安装 zsh-autosuggestions
    > https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh
```
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
```
# ~/.zshrc
plugins=( 
    # other plugins...
    zsh-autosuggestions
)
```

## 终端

安装 `https://github.com/dracula/dracula-theme`
zsh 主题: `ys`

## 启动窗口居中

> https://forum.ubuntu.org.cn/viewtopic.php?t=389223
全局设置在：控制中心--窗口行为--窗口行为--高级--放置策略--居中