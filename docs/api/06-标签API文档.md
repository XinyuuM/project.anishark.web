# 标签API文档

## 概述

标签API提供了番剧标签相关的功能接口，包括标签列表、搜索、统计、趋势等功能。

**基础路径**: `/api/tags` 或 `/api/tags.php`

---

## 1. 获取所有标签

### 接口信息
- **路径**: `/api/tags`
- **方法**: `GET`
- **描述**: 获取所有标签

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| page | int | 否 | 页码，默认1 |
| limit | int | 否 | 每页数量，默认50 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "tag_id": 48,
      "tag_name": "奇幻",
      "tag_category": "题材",
      "anime_count": 206
    },
    {
      "tag_id": 57,
      "tag_name": "战斗",
      "tag_category": "元素",
      "anime_count": 141
    }
  ]
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| tag_id | int | 标签ID |
| tag_name | string | 标签名称 |
| tag_category | string | 标签分类 |
| anime_count | int | 关联番剧数量 |

---

## 2. 获取标签历史趋势

### 接口信息
- **路径**: `/api/tags/history/trend`
- **方法**: `GET`
- **描述**: 获取标签历史趋势数据

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| top | int | 否 | 返回前N个标签，默认10 |
| period | string | 否 | 时间周期（quarterly/monthly），默认quarterly |
| years | string | 否 | 年份，如2024 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "tag_id": 48,
      "tag_name": "奇幻",
      "tag_category": "题材",
      "trend": [
        {
          "period": "2026-Q1",
          "count": 85
        },
        {
          "period": "2025-Q4",
          "count": 72
        }
      ]
    }
  ]
}
```

---

## 3. 获取标签统计信息

### 接口信息
- **路径**: `/api/tags/statistics`
- **方法**: `GET`
- **描述**: 获取标签统计信息

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 461,
    "by_category": {
      "题材": 52,
      "风格": 78,
      "元素": 156,
      "受众": 45,
      "其他": 130
    },
    "most_used": [
      {
        "tag_id": 48,
        "tag_name": "奇幻",
        "anime_count": 206
      }
    ]
  }
}
```

---

## 4. 获取标签分类统计

### 接口信息
- **路径**: `/api/tags/categories`
- **方法**: `GET`
- **描述**: 获取标签分类统计

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "category": "题材",
      "count": 52
    },
    {
      "category": "风格",
      "count": 78
    },
    {
      "category": "元素",
      "count": 156
    }
  ]
}
```

---

## 5. 获取热门标签

### 接口信息
- **路径**: `/api/tags/popular`
- **方法**: `GET`
- **描述**: 获取热门标签

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| limit | int | 否 | 返回数量限制，默认10 |
| category | string | 否 | 标签类别 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "tag_id": 48,
      "tag_name": "奇幻",
      "tag_category": "题材",
      "anime_count": 206
    },
    {
      "tag_id": 57,
      "tag_name": "战斗",
      "tag_category": "元素",
      "anime_count": 141
    },
    {
      "tag_id": 28,
      "tag_name": "校园",
      "tag_category": "题材",
      "anime_count": 127
    },
    {
      "tag_id": 29,
      "tag_name": "恋爱",
      "tag_category": "元素",
      "anime_count": 124
    },
    {
      "tag_id": 42,
      "tag_name": "日常",
      "tag_category": "风格",
      "anime_count": 119
    }
  ]
}
```

---

## 6. 搜索标签

### 接口信息
- **路径**: `/api/tags/search`
- **方法**: `GET`
- **描述**: 搜索标签

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| q | string | 是 | 搜索关键词 |
| limit | int | 否 | 返回数量限制，默认20 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "tag_id": 29,
      "tag_name": "恋爱",
      "tag_category": "元素",
      "anime_count": 124
    }
  ],
  "total": 1
}
```

---

## 7. 根据类别获取标签

### 接口信息
- **路径**: `/api/tags/category/:category`
- **方法**: `GET`
- **描述**: 根据类别获取标签

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| category | string | 是 | 标签类别 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "tag_id": 48,
      "tag_name": "奇幻",
      "tag_category": "题材",
      "anime_count": 206
    },
    {
      "tag_id": 64,
      "tag_name": "异世界",
      "tag_category": "题材",
      "anime_count": 98
    }
  ]
}
```

---

## 8. 根据ID获取单个标签

### 接口信息
- **路径**: `/api/tags/:id`
- **方法**: `GET`
- **描述**: 根据ID获取单个标签

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 标签ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "tag_id": 48,
    "tag_name": "奇幻",
    "tag_category": "题材",
    "anime_count": 206,
    "description": "包含奇幻元素的番剧"
  }
}
```

---

## 9. 根据标签获取番剧

### 接口信息
- **路径**: `/api/tags/:id/animes`
- **方法**: `GET`
- **描述**: 根据标签获取番剧（带分页）

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 标签ID |

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| page | int | 否 | 页码，默认1 |
| limit | int | 否 | 每页数量，默认20 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "anime_id": 827,
      "title_original": "自動販売機に生まれ変わった俺は迷宮を彷徨う 3rd season",
      "title_chinese": "转生成自动贩卖机的我今天也在迷宫徘徊 第三季",
      "year": 2026,
      "quarter": "春",
      "cover_image": "https://..."
    }
  ],
  "total": 206,
  "tag_id": 48,
  "tag_name": "奇幻"
}
```

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 标签不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 标签分类包括：题材、风格、元素、受众、其他
2. 搜索支持标签名称模糊匹配
3. 历史趋势数据按时间周期分组
