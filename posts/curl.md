# curl

[#43](https://github.com/vhxubo/blog/issues/43)

## Tip

在Windows中需要对特殊符号进行转义，如`"`需要用`\"`替代，某些特殊符号需要使用`^`

## -X

设置请求方式，默认为 GET

```shell
$ curl -X POST http://localhost:3000/login
```

## -c

将cookies写入到文件

```shell
$ curl -c cookies.txt https://github.com
$ cat cookies.txt
```

## -H

设置Header

```shell
$ curl -H "content-type:application/json" https://github.com
```

## -d

> 如果传输的数据为json，记得设置header， "content-type:application/json" 

设置POST数据请求体

```shell
$ curl -X POST http://localhost:3000/login -d '{"username":"vhxubo","password":"*****"}'
```

## -b

设置cookies

```shell
$ curl -b 'foo1=bar' -b 'foo2=baz' https://taobao.com
# 上面命令发送两个 Cookie。

$ curl -b cookies.txt https://www.taobao.com
# 上面命令读取本地文件 cookies.txt，里面是服务器设置的 Cookie（参见-c参数），将其发送到服务器。
```

## 参考

- [curl 的用法指南 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html)
- [curl 命令，Linux curl 命令详解：利用URL规则在命令行下工作的文件传输工具 - Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/curl.html)