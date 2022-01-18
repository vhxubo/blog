# manjaro 配置 [#6](https://github.com/vhxubo/blog/issues/6)

[配置](https://github.com/vhxubo/blog/issues?q=label:配置)

## 双系统时间同步

- [如何解决 Windows 和 Manjaro 双系统时间差8小时的问题_哈哈餐馆的博客-CSDN博客_manjaro 时区](https://blog.csdn.net/aaazz47/article/details/78696899)

- [同步 Linux 双系统的时间](https://mogeko.me/2019/062/)

## 键映射

- [Linux中将capslock键映射成ctrl键_craneyuan-CSDN博客](https://blog.csdn.net/u014717036/article/details/57082204)

也可以在系统设置里面直接设置，硬件 输入设备 键盘

## “ Visual Studio Code无法监视此大工作空间中的文件更改”

> [在Linux上运行Visual Studio代码](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)
[[Arch Linux] [Manjaro] How to avoid "Visual Studio Code is unable to watch for file changes in this large workspace" (error ENOSPC)](https://gist.github.com/tbjgolden/c53ca37f3bc2fab8c930183310918c8c)

To avoid this error, we need to _increase the inotify watcher limit_.

The way to do this is different on Arch based distributions than other Linux distributions.

### Instructions for Arch Linux/Manjaro

Check for an already existing inotify config file
(recent versions of Manjaro include one)

```sh
ls /etc/sysctl.d/*-max_user_watches.conf
```

#### a) If no output

```sh
echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system
```

#### b) If the command outputs a file

_(in the rare case where it outputs multiple files, continue using the **last** one in the list)_

```sh
# replace `/etc/sysctl.d/50-max-user-watches.conf` with the file returned from the previous `ls` command
echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/50-max_user_watches.conf && sudo sysctl --system
```

### Check it's working

```sh
cat /proc/sys/fs/inotify/max_user_watches
```

Expected output: `524288`

## 清理缓存

> [给你的Arch Linux 清理空间腾出地方 | guqing's blog](https://guqing.xyz/archives/clean-archlinux)

### 清理安装包缓存

```
$ sudo pacman -Scc
```

### 清理孤立的软件包

```
$ sudo pacman -Rns $(pacman -Qtdq)
```

### 清理日志

```
$ journalctl --vacuum-size=50M
```

## 安装 .deb

[How To Convert DEB Packages Into Arch Linux Packages - OSTechNix](https://ostechnix.com/convert-deb-packages-arch-linux-packages/)

## 滚轮慢

- https://wiki.archlinux.org/index.php/IMWheel