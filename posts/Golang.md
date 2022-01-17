# Golang [#9](https://github.com/vhxubo/blog/issues/9)

## VSCode 插件安装失败
> [Goproxy 中国](https://goproxy.cn/)

### Go 1.13 及以上（推荐）
打开你的终端并执行

```
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```
完成。

### macOS 或 Linux

打开你的终端并执行

```
$ export GO111MODULE=on
$ export GOPROXY=https://goproxy.cn
```
或者

```
$ echo "export GO111MODULE=on" >> ~/.profile
$ echo "export GOPROXY=https://goproxy.cn" >> ~/.profile
$ source ~/.profile
```
完成。

### Windows

打开你的 PowerShell 并执行

```
C:\> $env:GO111MODULE = "on"
C:\> $env:GOPROXY = "https://goproxy.cn"
```