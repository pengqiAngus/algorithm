## metric
数据标准化
## BFCache
自动处理页面从缓存恢复的情况
重新初始化度量
## 降级处理
优先使用新版 API
降级到旧版 API
最后使用基础实现
## onFCP.ts, onLCP.ts
使用 getFirstHidden 追踪页面首次隐藏时间
只在页面可见时报告 FCP
避免后台标签页的无效数据
自动断开观察期
## onCLS.ts 
忽略用户输入导致的布局偏移
## onINP.ts
忽略较短的无效输入