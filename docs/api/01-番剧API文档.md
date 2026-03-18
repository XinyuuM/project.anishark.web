# 番剧API文档

## 概述

番剧API提供了番剧相关的所有功能接口，包括番剧列表、详情、搜索、统计等功能。

**基础路径**: `/api/animes` 或 `/api/animes.php`

---

## 1. 获取番剧列表

### 接口信息
- **路径**: `/api/animes`
- **方法**: `GET`
- **描述**: 获取所有番剧列表（支持分页和筛选）

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| page | int | 否 | 页码，默认1 |
| limit | int | 否 | 每页数量，默认20 |
| season_id | int | 否 | 按季度筛选 |
| status | string | 否 | 按状态筛选（ongoing/completed） |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "anime_id": 829,
      "title_original": "最強の王様、二度目の人生は何をする？ Season 2",
      "title_chinese": "终末起点 第二季",
      "title_other_aliases": "最强王者的第二人生 第二季\n三岁开始做王者 第二季",
      "original_work_type": "漫画改编",
      "description": "在一个由军事能力统治的世界里...",
      "total_episodes": null,
      "episodes_announced": null,
      "is_ongoing": 0,
      "is_short_series": 0,
      "has_multiple_versions": 0,
      "official_website": "saikyo2dome-tbate.com",
      "special_notes": null,
      "season_id": 12,
      "created_at": "2026-03-13 02:56:09",
      "updated_at": "2026-03-13 02:56:09",
      "year": 2026,
      "quarter": "春",
      "cover_image": null,
      "tags": [
        {
          "tag_id": 48,
          "tag_name": "奇幻",
          "tag_category": "题材"
        },
        {
          "tag_id": 57,
          "tag_name": "战斗",
          "tag_category": "元素"
        }
      ]
    }
  ]
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| anime_id | int | 番剧ID |
| title_original | string | 原始标题（日文） |
| title_chinese | string | 中文标题 |
| title_other_aliases | string | 其他别名 |
| original_work_type | string | 原作类型（漫画改编/小说改编/动画原创等） |
| description | string | 番剧简介 |
| total_episodes | int | 总集数 |
| episodes_announced | int | 已宣布集数 |
| is_ongoing | int | 是否连载中（0否/1是） |
| is_short_series | int | 是否为短篇动画 |
| has_multiple_versions | int | 是否有多个版本 |
| official_website | string | 官方网站 |
| year | int | 播出年份 |
| quarter | string | 播出季度（春/夏/秋/冬） |
| cover_image | string | 封面图片URL |
| tags | array | 标签列表 |

---

## 2. 获取单个番剧详情

### 接口信息
- **路径**: `/api/animes/:id`
- **方法**: `GET`
- **描述**: 根据ID获取单个番剧的详细信息

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 番剧ID |

### 返回示例
**成功响应**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "anime_id": 829,
    "title_original": "最強の王様、二度目の人生は何をする？ Season 2",
    "title_chinese": "终末起点 第二季",
    "description": "详细描述...",
    "year": 2026,
    "quarter": "春",
    "tags": [...]
  }
}
```

**错误响应**:
```json
{
  "code": 404,
  "message": "番剧不存在"
}
```

---

## 3. 搜索番剧

### 接口信息
- **路径**: `/api/animes/search`
- **方法**: `GET` / `POST`
- **描述**: 搜索番剧，支持关键词搜索和高级筛选

### GET请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| q | string | 是 | 搜索关键词 |

### POST请求参数（Body JSON）
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| keyword | string | 是 | 搜索关键词 |
| season_id | int | 否 | 按季度筛选 |
| status | string | 否 | 按状态筛选 |
| year | int | 否 | 按年份筛选 |
| tags | array | 否 | 按标签筛选 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "anime_id": 280,
      "title_original": "正反対な君と僕",
      "title_chinese": "相反的你和我",
      "description": "吸引了会看气氛说话的元气女生铃木的是...",
      "tags": [...]
    }
  ],
  "total": 15
}
```

---

## 4. 获取番剧统计信息

### 接口信息
- **路径**: `/api/animes/stats`
- **方法**: `GET`
- **描述**: 获取番剧统计信息

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 520,
    "ongoing": 112,
    "completed": 408,
    "by_year": {
      "2026": 85,
      "2025": 435
    }
  }
}
```

---

## 5. 按季度统计番剧

### 接口信息
- **路径**: `/api/animes/stats/by-season`
- **方法**: `GET`
- **描述**: 按季度统计番剧数量

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "season_id": 12,
      "year": 2026,
      "quarter": "春",
      "count": 85
    },
    {
      "season_id": 11,
      "year": 2025,
      "quarter": "冬",
      "count": 102
    }
  ]
}
```

---

## 6. 获取番剧的PV列表

### 接口信息
- **路径**: `/api/animes/:id/pvs`
- **方法**: `GET`
- **描述**: 获取番剧的PV列表

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 番剧ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "pv_id": 698,
      "anime_id": 280,
      "pv_title": "【1月/铃代纱弓】相反的你和我 第11话预告【MCE汉化组】",
      "pv_type": "其他",
      "platform": "bilibili",
      "bilibili_bvid": "BV1eHw2zrEH3",
      "release_date": "2026-03-17"
    }
  ]
}
```

---

## 7. 获取番剧的角色列表

### 接口信息
- **路径**: `/api/animes/:id/characters`
- **方法**: `GET`
- **描述**: 获取番剧的角色列表

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "character_id": 1234,
      "name": "铃木",
      "name_chinese": "铃木",
      "type": "主角",
      "voice_actors": [
        {
          "voice_actor_id": 72,
          "name": "花泽香菜",
          "role": "主演"
        }
      ]
    }
  ]
}
```

---

## 8. 获取番剧的播放平台列表

### 接口信息
- **路径**: `/api/animes/:id/platforms`
- **方法**: `GET`
- **描述**: 获取番剧的播放平台列表

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "platform_id": 1,
      "platform_name": "bilibili",
      "platform_type": "大陆",
      "is_exclusive": 0,
      "is_free": 1,
      "streaming_url": "https://www.bilibili.com/bangumi/play/..."
    }
  ]
}
```

---

## 9. 获取番剧的视觉资源列表

### 接口信息
- **路径**: `/api/animes/:id/visual-resources`
- **方法**: `GET`
- **描述**: 获取番剧的视觉资源列表

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "resource_id": 456,
      "resource_type": "视觉图",
      "image_url": "https://...",
      "description": "主要角色视觉图"
    }
  ]
}
```

---

## 10. 获取番剧视觉资源数量

### 接口信息
- **路径**: `/api/animes/:id/visual-resources/count`
- **方法**: `GET`
- **描述**: 获取番剧视觉资源数量

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 15,
    "by_type": {
      "视觉图": 8,
      "海报": 4,
      "截图": 3
    }
  }
}
```

---

## 11. 获取番剧的广播安排

### 接口信息
- **路径**: `/api/animes/:id/broadcast-schedule`
- **方法**: `GET`
- **描述**: 获取番剧的广播安排

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "day_of_week": "周一",
    "broadcast_time": "22:00:00",
    "broadcast_date": "2026-04-06",
    "region_type": "日本首播",
    "is_first_broadcast": 1
  }
}
```

---

## ~~12. 获取番剧的详细描述~~(已弃用)

### 接口信息
- **路径**: `/api/animes/:id/descriptions`
- **方法**: `GET`
- **描述**: 获取番剧的详细描述

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "description_zh": "中文描述内容...",
    "description_ja": "日语描述内容...",
    "description_en": "English description...",
    "source_material_notes": "原作备注...",
    "production_notes": "制作备注..."
  }
}
```

---

## ~~13. 获取番剧的中文/日文/英文描述~~（已弃用）

### 接口信息
- **路径**: `/api/animes/:id/descriptions/{zh|ja|en}`
- **方法**: `GET`
- **描述**: 获取指定语言的番剧描述

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 番剧ID |
| zh|ja|en | string | 是 | 语言类型（中文/日文/英文） |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "description": "木下歌夏是主推人气偶像团体F/ACE的福原多闻君的高中生..."
  }
}
```

---

## 14. 获取原作/制作备注

### 接口信息
- **路径**: `/api/animes/:id/descriptions/{source-notes|production-notes}`
- **方法**: `GET`
- **描述**: 获取番剧的原作备注或制作备注

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "notes": "备注内容..."
  }
}
```

---

## 15. 检查是否有描述

### 接口信息
- **路径**: `/api/animes/:id/descriptions/check`
- **方法**: `GET`
- **描述**: 检查番剧是否有描述

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "has_description": true,
    "has_chinese": true,
    "has_japanese": false,
    "has_english": false
  }
}
```

---

## 16. 获取番剧的标签列表

### 接口信息
- **路径**: `/api/animes/:id/tags`
- **方法**: `GET`
- **描述**: 获取番剧的标签列表

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "tag_id": 28,
      "tag_name": "校园",
      "tag_category": "题材"
    },
    {
      "tag_id": 29,
      "tag_name": "恋爱",
      "tag_category": "元素"
    }
  ]
}
```

---

## 17. 获取番剧的制作人员

### 接口信息
- **路径**: `/api/animes/:id/staff`
- **方法**: `GET`
- **描述**: 获取番剧的制作人员

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "staff_id": 3216,
      "name_original": "上松范康",
      "name_chinese": "上松范康",
      "role_type": "音乐",
      "notes": "音乐制作"
    }
  ]
}
```

---

## 18. 获取番剧的流媒体链接列表

### 接口信息
- **路径**: `/api/animes/:id/streaming-links`
- **方法**: `GET`
- **描述**: 获取番剧的流媒体链接列表

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "link_id": 1,
      "platform_id": 1,
      "platform_name": "bilibili",
      "url": "https://www.bilibili.com/...",
      "is_primary": 1,
      "is_free": 1
    }
  ]
}
```

---

## 19. 获取番剧的主要流媒体链接

### 接口信息
- **路径**: `/api/animes/:id/streaming-links/primary`
- **方法**: `GET`
- **描述**: 获取番剧的主要流媒体链接

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "link_id": 1,
    "platform_id": 1,
    "platform_name": "bilibili",
    "url": "https://www.bilibili.com/...",
    "is_primary": 1
  }
}
```

---

## 20. 创建流媒体链接

### 接口信息
- **路径**: `/api/animes/:id/streaming-links`
- **方法**: `POST`
- **描述**: 为番剧创建流媒体链接

### 请求参数（Body JSON）
```json
{
  "platform_id": 1,
  "url": "https://www.bilibili.com/bangumi/play/...",
  "is_primary": 1,
  "is_free": 1,
  "notes": "备注信息"
}
```

### 返回示例
```json
{
  "code": 200,
  "message": "创建成功",
  "data": {
    "link_id": 1,
    "anime_id": 280,
    "platform_id": 1,
    "url": "https://www.bilibili.com/..."
  }
}
```

---

## 21. 根据独家性/免费状态获取平台信息

### 接口信息
- **路径**: `/api/animes/:id/platforms/{exclusive|free}/:type`
- **方法**: `GET`
- **描述**: 根据独家性或免费状态获取番剧平台信息

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 番剧ID |
| exclusive|free | string | 是 | 筛选类型（exclusive独家/free免费） |
| type | string | 是 | 类型值（0否/1是） |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "platform_id": 1,
      "platform_name": "bilibili",
      "is_exclusive": 1,
      "is_free": 0
    }
  ]
}
```

---

## 22. 获取番剧完整信息

### 接口信息
- **路径**: `/api/animes/:id/complete`
- **方法**: `GET`
- **描述**: 获取番剧的完整信息，包括所有关联数据

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "anime": {
      "anime_id": 280,
      "title_original": "正反対な君と僕",
      "title_chinese": "相反的你和我",
      ...
    },
    "characters": [...],
    "staff": [...],
    "platforms": [...],
    "tags": [...],
    "pvs": [...],
    "visual_resources": [...],
    "broadcast_schedule": {...},
    "descriptions": {...}
  }
}
```

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 番剧不存在 |
| 400 | 请求参数错误 |
| 500 | 服务器内部错误 |

---

## 注意事项

1. 所有接口支持CORS跨域请求
2. URL支持两种格式：带`.php`扩展名和不带扩展名
3. 分页接口默认每页返回20条数据
4. 搜索接口支持模糊匹配
5. 时间格式统一使用 `YYYY-MM-DD HH:mm:ss`
