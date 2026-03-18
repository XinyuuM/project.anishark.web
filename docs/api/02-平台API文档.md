# 平台API文档

## 概述

平台API提供了播放平台相关的功能接口，包括平台列表、搜索、统计等功能。

**基础路径**: `/api/platforms` 或 `/api/platforms.php`

---

## 1. 获取所有播放平台列表

### 接口信息
- **路径**: `/api/platforms`
- **方法**: `GET`
- **描述**: 获取所有播放平台列表

### 返回示例
```json
{
  "code": 200,
  "message": "获取播放平台列表成功",
  "data": [
    {
      "platform_id": 5,
      "platform_name": "AcFun",
      "platform_name_en": "AcFun",
      "platform_logo": "https://www.acfun.cn",
      "platform_official_url": "https://www.acfun.cn",
      "platform_type": "大陆"
    },
    {
      "platform_id": 1,
      "platform_name": "bilibili",
      "platform_name_en": "bilibili",
      "platform_logo": "https://www.bilibili.com",
      "platform_official_url": "https://www.bilibili.com",
      "platform_type": "大陆"
    },
    {
      "platform_id": 4,
      "platform_name": "优酷",
      "platform_name_en": "优酷",
      "platform_logo": "https://www.youku.com",
      "platform_official_url": "https://www.youku.com",
      "platform_type": "大陆"
    },
    {
      "platform_id": 2,
      "platform_name": "爱奇艺",
      "platform_name_en": "爱奇艺",
      "platform_logo": "https://www.iqiyi.com",
      "platform_official_url": "https://www.iqiyi.com",
      "platform_type": "大陆"
    },
    {
      "platform_id": 3,
      "platform_name": "腾讯视频",
      "platform_name_en": "腾讯视频",
      "platform_logo": null,
      "platform_official_url": null,
      "platform_type": "大陆"
    },
    {
      "platform_id": 38,
      "platform_name": "Netflix",
      "platform_name_en": "Netflix",
      "platform_logo": "https://www.netflix.com",
      "platform_official_url": "https://www.netflix.com",
      "platform_type": "国际"
    },
    {
      "platform_id": 39,
      "platform_name": "youtube",
      "platform_name_en": "youtube",
      "platform_logo": "https://youtube.com",
      "platform_official_url": "https://youtube.com",
      "platform_type": "国际"
    },
    {
      "platform_id": 37,
      "platform_name": "哔哩哔哩港澳台",
      "platform_name_en": "哔哩哔哩港澳台",
      "platform_logo": null,
      "platform_official_url": null,
      "platform_type": "国际"
    }
  ]
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| platform_id | int | 平台ID |
| platform_name | string | 平台名称（中文） |
| platform_name_en | string | 平台名称（英文） |
| platform_logo | string | 平台Logo URL |
| platform_official_url | string | 官方网站URL |
| platform_type | string | 平台类型（大陆/国际） |

---

## 2. 获取平台统计信息

### 接口信息
- **路径**: `/api/platforms/stats`
- **方法**: `GET`
- **描述**: 获取平台统计信息

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 8,
    "domestic": 5,
    "international": 3,
    "anime_counts": {
      "bilibili": 245,
      "爱奇艺": 189,
      "腾讯视频": 156,
      "优酷": 98,
      "AcFun": 45
    }
  }
}
```

---

## 3. 搜索播放平台

### 接口信息
- **路径**: `/api/platforms/search`
- **方法**: `GET`
- **描述**: 搜索播放平台

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| keyword | string | 是 | 搜索关键词 |
| limit | int | 否 | 返回数量限制，默认20 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "platform_id": 1,
      "platform_name": "bilibili",
      "platform_name_en": "bilibili",
      "platform_logo": "https://www.bilibili.com",
      "platform_official_url": "https://www.bilibili.com",
      "platform_type": "大陆"
    }
  ],
  "total": 1
}
```

---

## 4. 获取平台类型列表

### 接口信息
- **路径**: `/api/platforms/types`
- **方法**: `GET`
- **描述**: 获取平台类型列表

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "type": "大陆",
      "count": 5
    },
    {
      "type": "国际",
      "count": 3
    }
  ]
}
```

---

## 5. 根据平台类型获取播放平台列表

### 接口信息
- **路径**: `/api/platforms/type/:type`
- **方法**: `GET`
- **描述**: 根据平台类型获取播放平台列表

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| type | string | 是 | 平台类型（大陆/国际） |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "platform_id": 5,
      "platform_name": "AcFun",
      "platform_type": "大陆"
    },
    {
      "platform_id": 1,
      "platform_name": "bilibili",
      "platform_type": "大陆"
    }
  ]
}
```

---

## 6. 根据ID获取播放平台详情

### 接口信息
- **路径**: `/api/platforms/:id`
- **方法**: `GET`
- **描述**: 根据ID获取播放平台详情

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 平台ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "platform_id": 1,
    "platform_name": "bilibili",
    "platform_name_en": "bilibili",
    "platform_logo": "https://www.bilibili.com",
    "platform_official_url": "https://www.bilibili.com",
    "platform_type": "大陆",
    "anime_count": 245,
    "created_at": "2025-01-01 00:00:00"
  }
}
```

---

## ~~7. 获取平台的所有番剧~~（已弃用）



### 接口信息
- **路径**: `/api/platforms/:id/animes`
- **方法**: `GET`
- **描述**: 获取平台的所有番剧

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 平台ID |

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| limit | int | 否 | 返回数量限制，默认50 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "anime_id": 828,
      "title_original": "ガンバレ！中村くん!!",
      "title_chinese": "加油吧！中村君!!",
      "year": 2026,
      "quarter": "春",
      "is_exclusive": 0,
      "is_free": 1
    }
  ],
  "total": 245,
  "platform_id": 1,
  "platform_name": "bilibili"
}
```

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 平台不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 平台类型分为"大陆"和"国际"两类
2. 搜索支持平台名称和英文名称模糊匹配
3. 获取平台番剧列表支持分页
