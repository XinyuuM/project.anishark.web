# ~~流媒体链接API文档~~（陈旧的）

## 概述

流媒体链接API提供了番剧流媒体播放链接相关的功能接口。

**基础路径**: `/api/streaming-links` 或 `/api/streaming-links.php`

**注意**：本API仅包含只读接口，创建、更新、删除操作需要管理员权限，不在公共文档中列出。

---

## 1. 批量获取流媒体链接

### 接口信息
- **路径**: `/api/streaming-links/batch`
- **方法**: `GET`
- **描述**: 批量获取多个番剧的流媒体链接

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| anime_ids | string | 是 | 番剧ID列表（逗号分隔） |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "280": [
      {
        "link_id": 1,
        "anime_id": 280,
        "platform_id": 1,
        "platform_name": "bilibili",
        "url": "https://www.bilibili.com/bangumi/play/...",
        "is_primary": 1,
        "is_free": 1,
        "is_exclusive": 0,
        "notes": null
      }
    ],
    "281": [
      {
        "link_id": 2,
        "anime_id": 281,
        "platform_id": 1,
        "platform_name": "bilibili",
        "url": "https://www.bilibili.com/bangumi/play/...",
        "is_primary": 1,
        "is_free": 0,
        "is_exclusive": 1,
        "notes": "独家播出"
      }
    ]
  }
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| link_id | int | 链接ID |
| anime_id | int | 番剧ID |
| platform_id | int | 平台ID |
| platform_name | string | 平台名称 |
| url | string | 播放链接URL |
| is_primary | int | 是否为主要链接（0否/1是） |
| is_free | int | 是否免费观看（0否/1是） |
| is_exclusive | int | 是否独家（0否/1是） |
| notes | string | 备注信息 |

---

## 2. 获取单个流媒体链接详情

### 接口信息
- **路径**: `/api/streaming-links/:id`
- **方法**: `GET`
- **描述**: 获取单个流媒体链接的详细信息

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 链接ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "link_id": 1,
    "anime_id": 280,
    "platform_id": 1,
    "platform_name": "bilibili",
    "url": "https://www.bilibili.com/bangumi/play/...",
    "is_primary": 1,
    "is_free": 1,
    "is_exclusive": 0,
    "notes": null,
    "created_at": "2026-03-13 02:56:09",
    "updated_at": "2026-03-13 02:56:09"
  }
}
```

---

## 相关接口

### 获取番剧的流媒体链接列表
- **路径**: `/api/animes/:id/streaming-links`
- **方法**: `GET`
- **描述**: 获取番剧的所有流媒体链接
- **文档**: 参见《番剧API文档》

### 获取番剧的主要流媒体链接
- **路径**: `/api/animes/:id/streaming-links/primary`
- **方法**: `GET`
- **描述**: 获取番剧的主要流媒体链接
- **文档**: 参见《番剧API文档》

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 链接不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 批量接口一次最多支持查询50个番剧
2. 主要链接（is_primary=1）是推荐优先使用的播放平台
3. 独家链接（is_exclusive=1）表示该平台为独家播出
4. 免费标识（is_free）表示是否需要会员或付费观看
