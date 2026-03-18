# 视觉资源API文档

## 概述

视觉资源API提供了番剧视觉资源（如视觉图、海报、截图等）相关的功能接口。

**基础路径**: `/api/visual-resources` 或 `/api/visual-resources.php`

---

## 1. 获取所有视觉资源

### 接口信息
- **路径**: `/api/visual-resources`
- **方法**: `GET`
- **描述**: 获取所有视觉资源（支持分页）

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
      "resource_id": 1,
      "anime_id": 280,
      "resource_type": "视觉图",
      "image_url": "https://open.xinyuu.cn/static/...",
      "description": "主要角色视觉图",
      "created_at": "2026-03-13 02:56:09"
    }
  ],
  "total": 510
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| resource_id | int | 资源ID |
| anime_id | int | 关联番剧ID |
| resource_type | string | 资源类型（视觉图/海报/截图等） |
| image_url | string | 图片URL |
| description | string | 资源描述 |
| created_at | string | 创建时间 |

---

## 2. 搜索视觉资源

### 接口信息
- **路径**: `/api/visual-resources/search`
- **方法**: `GET`
- **描述**: 搜索视觉资源

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| q | string | 是 | 搜索关键词 |
| limit | int | 否 | 返回数量限制，默认50 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "resource_id": 1,
      "anime_id": 280,
      "resource_type": "视觉图",
      "image_url": "https://open.xinyuu.cn/static/...",
      "description": "主要角色视觉图"
    }
  ],
  "total": 15
}
```

---

## 3. 获取统计信息

### 接口信息
- **路径**: `/api/visual-resources/stats`
- **方法**: `GET`
- **描述**: 获取视觉资源统计信息

### 返回示例
```json
{
  "code": 200,
  "message": "获取统计信息成功",
  "data": {
    "total_resources": 510,
    "visual_arts": 510,
    "preview_images": 0,
    "pv_resources": 0,
    "posters": 0,
    "screenshots": 0,
    "anime_count": 509
  }
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| total_resources | int | 资源总数 |
| visual_arts | int | 视觉图数量 |
| preview_images | int | 预览图数量 |
| pv_resources | int | PV资源数量 |
| posters | int | 海报数量 |
| screenshots | int | 截图数量 |
| anime_count | int | 有资源的番剧数量 |

---

## 4. 获取资源类型列表

### 接口信息
- **路径**: `/api/visual-resources/types`
- **方法**: `GET`
- **描述**: 获取资源类型列表

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "type": "视觉图",
      "count": 510
    },
    {
      "type": "海报",
      "count": 0
    }
  ]
}
```

---

## 5. 获取最新视觉资源

### 接口信息
- **路径**: `/api/visual-resources/latest`
- **方法**: `GET`
- **描述**: 获取最新视觉资源

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| limit | int | 否 | 返回数量限制，默认20 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "resource_id": 510,
      "anime_id": 829,
      "resource_type": "视觉图",
      "image_url": "https://open.xinyuu.cn/static/...",
      "description": "主要角色视觉图",
      "created_at": "2026-03-13 02:56:09"
    }
  ]
}
```

---

## 6. 根据类型获取视觉资源

### 接口信息
- **路径**: `/api/visual-resources/type/:type`
- **方法**: `GET`
- **描述**: 根据类型获取视觉资源

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| type | string | 是 | 资源类型 |

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
      "resource_id": 1,
      "anime_id": 280,
      "resource_type": "视觉图",
      "image_url": "https://open.xinyuu.cn/static/...",
      "description": "主要角色视觉图"
    }
  ],
  "total": 510,
  "type": "视觉图"
}
```

---

## 7. 根据ID获取视觉资源详情

### 接口信息
- **路径**: `/api/visual-resources/:id`
- **方法**: `GET`
- **描述**: 根据ID获取视觉资源详情

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 资源ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "resource_id": 1,
    "anime_id": 280,
    "anime_title": "相反的你和我",
    "resource_type": "视觉图",
    "image_url": "https://open.xinyuu.cn/static/...",
    "description": "主要角色视觉图",
    "created_at": "2026-03-13 02:56:09",
    "updated_at": "2026-03-13 02:56:09"
  }
}
```

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 资源不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 资源类型包括：视觉图、海报、截图、预览图、PV资源等
2. 图片URL来自CDN，支持直接访问
3. 资源按创建时间倒序排列
