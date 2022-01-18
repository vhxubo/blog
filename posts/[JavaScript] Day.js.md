# Day.js [#21](https://github.com/vhxubo/blog/issues/21)

[JavaScript](https://github.com/vhxubo/blog/issues?q=label:JavaScript)

> Moment.js 的 2kB 轻量化方案，拥有同样强大的 API

### 在 Day.js 中使用中国时区

```
var utc = require('dayjs/plugin/utc') // dependent on utc plugin
var timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs().tz('Asia/Shanghai') // 获取上海时间

dayjs.tz.guess() // 猜测当前时区

// dayjs.tz.setDefault("America/New_York") // 用来设置默认时区
```

- [Moment Timezone | Home](https://momentjs.com/timezone/)
