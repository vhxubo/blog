# Windows  究极配置 [#5](https://github.com/vhxubo/blog/issues/5)

[配置](https://github.com/vhxubo/blog/issues?q=label:配置)

## 快速设置小鹤双拼

> https://ifttl.com/add-flypy-to-win10-microsoft-pinyin-and-other-configuration/

首先打开注册表，找到这个路径

```
计算机\HKEY_CURRENT_USER\Software\Microsoft\InputMethod\Settings\CHS
```
然后新建一个名为 `UserDefinedDoublePinyinScheme0` 的字符串值，数值数据为

```
小鹤双拼*2*^*iuvdjhcwfg^xmlnpbksqszxkrltvyovt
```


## 设置开机是否开启 Hyper-V

> 如果使用 Windows PowerShell，必须使用引号将启动项标识符引起来，例如：“{49916baf-0e08-11db-9af4-000bdbd316a0}”或“{current}” 。[^1]

```
bcdedit /copy "{default}" /d "Windows 11 With Off Hyper-V"
bcdedit /set "{f40847d6-13a4-11ec-a306-00155d9d7c47}" hypervisorlaunchtype Off
```
`f40847d6-13a4-11ec-a306-00155d9d7c47` 来自上一条命令


## 全局配置

- 修改_文档_和_下载_的目录，右键属性设置并应用
- [win10的pagefile.sys是什么文件？pagefile.sys文件太大如何移动到D盘中？_xrinosvip的博客-CSDN博客_pagefile.sys](https://blog.csdn.net/xrinosvip/article/details/81352823)

小软件/不方便更新的软件使用 Chocolatey 安装

## 软件

- [Fndroid/clash_for_windows_pkg: A Windows/macOS GUI based on Clash](https://github.com/Fndroid/clash_for_windows_pkg)

- [火绒安全](https://huorong.cn/)

- [Microsoft Edge 浏览器 | Microsoft](https://www.microsoft.com/zh-cn/edge)

- [Chocolatey Software | Chocolatey - The package manager for Windows](https://chocolatey.org/)

- [Releases · PowerShell/PowerShell](https://github.com/PowerShell/PowerShell/releases)

### Chocolatey

#### 安装

> [Chocolatey Software | Installing Chocolatey](https://chocolatey.org/install)

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

#### 应用

> [[Win]使用Chocolatey管理你的小软件们 - 知乎](https://zhuanlan.zhihu.com/p/42441423)

```
choco install listary
# choco install 7zip
choco install peazip
choco install treesizefree
choco install mpv
choco install git
choco install internet-download-manager
choco install autohotkey
```

[BT Tracker 服务器地址大全与常用 BT 软件下载地址 Tracker List - DNS.iCoA.CN](https://dns.icoa.cn/tracker/)

## 插件

- [Tampermonkey • Microsoft Edge](http://www.tampermonkey.net/)
    - [复制 MarkDown 格式的超链接到剪贴板](https://greasyfork.org/zh-CN/scripts/403081-%E5%A4%8D%E5%88%B6-markdown-%E6%A0%BC%E5%BC%8F%E7%9A%84%E8%B6%85%E9%93%BE%E6%8E%A5%E5%88%B0%E5%89%AA%E8%B4%B4%E6%9D%BF)

- [FelisCatus/SwitchyOmega: Manage and switch between multiple proxies quickly & easily.](https://github.com/FelisCatus/SwitchyOmega)


- [沙拉查词-聚合词典划词翻译](https://microsoftedge.microsoft.com/addons/detail/%E6%B2%99%E6%8B%89%E6%9F%A5%E8%AF%8D%E8%81%9A%E5%90%88%E8%AF%8D%E5%85%B8%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91/idghocbbahafpfhjnfhpbfbmpegphmmp)

[^1]: https://docs.microsoft.com/zh-cn/windows-hardware/drivers/devtest/changing-the-friendly-name-of-a-boot-entry