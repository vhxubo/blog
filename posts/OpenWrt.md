# OpenWrt [#60](https://github.com/vhxubo/blog/issues/60)

## 不同文件名的区别
> https://unix.stackexchange.com/questions/385863/wrt-openwrt-lede-initramfs

在下载openwrt系统时，经常能看到initramfs-kernel.bin，squashfs-factory.bin，squashfs-sysupgrade.bin等结尾的文件，factory适用于从原厂系统刷到openwrt，sysupgrade则是从openwrt刷到openwrt（已经是openwrt系统，在openwrt系统中更新自己），squashfs则是一种文件系统，适用于嵌入式设备。那么initramfs-kernel又是什么呢。

initramfs是放在内存RAM中的rootfs 映像文件，跟kernel放在一起。一般来说用不到initramfs-kernel.bin来刷机，因为启动后，所有的配置在路由器重启后都不能保留（毕竟ram文件系统，所有文件放在ram中，断电就没了）。但也有用到initramfs-kernel.bin的时候，就是在移植openwrt系统的时候，没有设备上的flash闪存的驱动的时候。

以 红米AC2100 为例, 生成的固件位于 `bin/targets/ramips/mt7621` 目录下

其中包含四个主要的文件:
- openwrt-ramips-mt7621-xiaomi_redmi-router-ac2100-initramfs-kernel.bin: 俗称的底包
- openwrt-ramips-mt7621-xiaomi_redmi-router-ac2100-squashfs-kernel1.bin
- openwrt-ramips-mt7621-xiaomi_redmi-router-ac2100-squashfs-rootfs0.bin
- openwrt-ramips-mt7621-xiaomi_redmi-router-ac2100-squashfs-sysupgrade.bin: 完整的刷入包

## Manjaro 编译
> https://github.com/coolsnowwolf/lede/issues/2309

安装 `openwrt-devel`

## 浏览器状态监控推送插件

https://github.com/zzsj0928/luci-app-pushbot

安装

- luci-app-pushbot
- luci-app-wrtbwmon

### 配置 luci-app-wrtbwmon

通过 https://github.com/brvphoenix/wrtbwmon/releases 下载上传到后台进行安装 wrtbwmon

通过在线软件包或者 https://github.com/brvphoenix/luci-app-wrtbwmon/releases 安装 luci-app-wrtbwmon