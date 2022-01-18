# Windows Terminal 配置 [#47](https://github.com/vhxubo/blog/issues/47)

[配置](https://github.com/vhxubo/blog/issues?q=label:配置)

Windows Terminal更新了配置文件方案，相比之前的json文件方便多了，正好电脑上次配置的没了，这次重新配置一下

代码补全还是需要安装**PSReadLine**

- 下载Windows Terminal、PowerShell
- 安装
```
Install-Module posh-git -Scope CurrentUser
Install-Module oh-my-posh -Scope CurrentUser
Install-Module -Name PSReadLine -Scope CurrentUser -Force -SkipPublisherCheck // 7自带
```
- 配置字体`Cascadia Code PL`
- 添加配置文件 `notepad $PROFILE`
```
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt -Theme powerlevel10k_lean
```

## 设置代理

```bash
$env:http_proxy="http://127.0.0.1:7890"
$env:https_proxy="http://127.0.0.1:7890"
```

## 参考

- [Windows Terminal Powerline Setup | Microsoft Docs](https://docs.microsoft.com/en-us/windows/terminal/tutorials/powerline-setup)
- [给 PowerShell 带来 zsh 的体验 - 知乎](https://zhuanlan.zhihu.com/p/137251716)