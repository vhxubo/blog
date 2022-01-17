# mpv [#11](https://github.com/vhxubo/blog/issues/11)

> [mpv使用记录 - linkthis blog](https://linkthis.me/2019/05/18/the-note-of-mpv/)

## 配置

> [Argon-/mpv-config: Personal mpv configuration files and scripts (for syncing my computers). NOTE: my VO config is dynamic and relies on certain scripts (see corresponding comments in mpv.conf)](https://github.com/Argon-/mpv-config)

### 配置文件位置

Linux：`~/.config/mpv/mpv.conf`
Windows：``


```
no-border                     # no window title bar
save-position-on-quit         # 记忆上次播放的位置
keep-open                     # 播放结束后不退出
ontop                         # 在全屏的情况下，更容易进入全屏独占
```

## 插件

[mpv/autoload.lua at master · mpv-player/mpv](https://github.com/mpv-player/mpv/blob/master/TOOLS/lua/autoload.lua)：自动加载当前播放文件目录里的视频文件到播放列表
