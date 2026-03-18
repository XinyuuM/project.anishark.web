# API文档总览

欢迎使用番剧API公共文档！本文档集包含了所有公开可用的API接口说明。

---

## 文档列表

1. [API端点列表](./API端点列表.md) - 所有API端点的快速索引
2. [番剧API文档](./01-番剧API文档.md) - 番剧相关接口
3. [平台API文档](./02-平台API文档.md) - 播放平台相关接口
4. [角色API文档](./03-角色API文档.md) - 角色相关接口
5. [制作人员API文档](./04-制作人员API文档.md) - 制作人员相关接口
6. [季度API文档](./05-季度API文档.md) - 季度相关接口
7. [标签API文档](./06-标签API文档.md) - 标签相关接口
8. [声优API文档](./07-声优API文档.md) - 声优相关接口
9. ~~[PV API文档](./08-PVAPI文档.md)~~ - PV相关接口（陈旧的）
10. ~~[流媒体链接API文档](./09-流媒体链接API文档.md)~~ - 流媒体链接相关接口(陈旧的)
11. [广播时间表API文档](./10-广播时间表API文档.md) - 广播时间表相关接口
12. [视觉资源API文档](./11-视觉资源API文档.md) - 视觉资源相关接口
13. ~~[描述API文档](./12-描述API文档.md)~~ - 番剧描述相关接口（已弃用）

---

## API基础信息

### 基础URL
```
https://db.xinyuu.cn/api/
```

### 通用说明

1. **URL格式**: 所有API支持两种URL格式
   - 带扩展名：`/api/animes.php`
   - 不带扩展名：`/api/animes`
   - 两种格式功能完全相同

2. **响应格式**: 所有API返回JSON格式数据
   
   ```json
   {
     "code": 200,
     "message": "success",
     "data": { ... }
   }
   ```
   
3. **错误响应**:
   ```json
   {
     "code": 404,
     "message": "资源不存在",
     "data": null
   }
   ```

4. **CORS支持**: 所有API端点支持跨域请求

5. **分页参数**:
   - `page`: 页码，默认1
   - `limit`: 每页数量，默认20

---

## 快速开始

### 1. 获取番剧列表
```bash
curl "https://db.xinyuu.cn/api/animes?limit=10"
```

### 2. 搜索番剧
```bash
curl "https://db.xinyuu.cn/api/animes/search?q=恋爱"
```

### 3. 获取番剧详情
```bash
curl "https://db.xinyuu.cn/api/animes/280"
```

### 4. 获取最新季度
```bash
curl "https://db.xinyuu.cn/api/seasons/latest"
```

### 5. 获取热门标签
```bash
curl "https://db.xinyuu.cn/api/tags/popular?limit=10"
```

### 6. 获取广播排期
```bash
curl "https://db.xinyuu.cn/api/broadcast/schedule"
```

### 7. 获取网站统计
```bash
curl "https://db.xinyuu.cn/api/statistics"
```

---

## 常见使用场景

### 场景1: 构建番剧列表页
1. 调用 `/api/animes` 获取番剧列表（支持分页）
2. 调用 `/api/seasons` 获取季度筛选选项
3. 调用 `/api/tags/popular` 获取热门标签用于筛选

### 场景2: 构建番剧详情页
1. 调用 `/api/animes/:id` 获取基本信息
2. 调用 `/api/animes/:id/characters` 获取角色列表
3. 调用 `/api/animes/:id/staff` 获取制作人员
4. 调用 `/api/animes/:id/platforms` 获取播放平台
5. 调用 `/api/animes/:id/pvs` 获取PV列表
6. 调用 `/api/animes/:id/visual-resources` 获取视觉资源

### 场景3: 构建播出时间表
1. 调用 `/api/broadcast/schedule` 获取排期数据
2. 或调用 `/api/broadcast/schedule-with-covers` 获取带封面的数据
3. 调用 `/api/broadcast-schedule/daily` 获取每日播出安排

### 场景4: 搜索功能
1. 调用 `/api/animes/search` 进行番剧搜索
2. 调用 `/api/characters/search` 进行角色搜索
3. 调用 `/api/tags/search` 进行标签搜索
4. 调用 `/api/voice-actors/search` 进行声优搜索

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 400 | 请求参数错误 |
| 403 | 无权限访问 |
| 404 | 资源不存在 |
| 405 | 不支持的请求方法 |
| 500 | 服务器内部错误 |
| 503 | 服务不可用 |

