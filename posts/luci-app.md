# luci-app

[#22](https://github.com/vhxubo/blog/issues/22)

## MVC 框架开发

- M: `/usr/lib/lua/luci/model/cbi`
- V: ``
- C: `/usr/lib/lua/luci/controller`

配置文件 `/etc/config`

文件权限 `/usr/share/rpcd/acl.d`

## 开发调试

在开发调试的时候，需要删除 `/tmp` 下形如 `luci-indexcache...lua`和`luci-indexcache..json`的文件以及`luci-modulecache`目录，然后刷新页面，并且只有关闭页面才可以删除

## 参考链接

- [OpenWRT 之LuCI 入门开发_u013131156的专栏-CSDN博客](https://blog.csdn.net/u013131156/article/details/45824203)
- [开发OpenWrt路由器上LuCI的模块 - 大魔王mAysWINd - 博客园](https://www.cnblogs.com/mayswind/p/3468124.html)
- [权限不足，无法读取UCI配置。的解决方法 - OPENWRT专版 - 恩山无线论坛 - Powered by Discuz!](https://www.right.com.cn/forum/thread-4033034-1-1.html)