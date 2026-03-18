# 季度API文档

## 概述

季度API提供了番剧季度相关的功能接口，包括季度列表、最新季度、季度番剧等功能。

**基础路径**: `/api/seasons` 或 `/api/seasons.php`

---

## 1. 获取所有季度

### 接口信息
- **路径**: `/api/seasons`
- **方法**: `GET`
- **描述**: 获取所有季度

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
      "version": "Data in Preview (Subject to Change)",
      "release_date": "2026-04-01",
      "creator": "",
      "notes": ""
    },
    {
      "season_id": 11,
      "year": 2025,
      "quarter": "冬",
      "version": "1.0",
      "release_date": "2025-01-06",
      "creator": "",
      "notes": ""
    }
  ]
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| season_id | int | 季度ID |
| year | int | 年份 |
| quarter | string | 季度（春/夏/秋/冬） |
| version | string | 版本号 |
| release_date | string | 发布日期 |
| creator | string | 创建者 |
| notes | string | 备注 |

---

## 2. 获取最新季度

### 接口信息
- **路径**: `/api/seasons/latest`
- **方法**: `GET`
- **描述**: 获取最新季度

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "season_id": 12,
    "year": 2026,
    "quarter": "春",
    "version": "Data in Preview (Subject to Change)",
    "release_date": "2026-04-01",
    "creator": "",
    "notes": ""
  }
}
```

---

## 3. 获取单个季度详情

### 接口信息
- **路径**: `/api/seasons/:id`
- **方法**: `GET`
- **描述**: 获取单个季度详情

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 季度ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "season_id": 12,
    "year": 2026,
    "quarter": "春",
    "version": "Data in Preview (Subject to Change)",
    "release_date": "2026-04-01",
    "anime_count": 85,
    "status": "preview"
  }
}
```

---

## 4. 根据季度获取番剧

### 接口信息
- **路径**: `/api/seasons/:id/animes`
- **方法**: `GET`
- **描述**: 根据季度获取番剧列表

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 季度ID |

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
      "anime_id": 829,
      "title_original": "最強の王様、二度目の人生は何をする？ Season 2",
      "title_chinese": "终末起点 第二季",
      "year": 2026,
      "quarter": "春",
      "cover_image": "https://..."
    }
  ],
  "total": 85
}
```

---

## 5. 获取季度更新日志

### 接口信息
- **路径**: `/api/seasons/:id/update-logs`
- **方法**: `GET`
- **描述**: 获取季度的更新日志

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 季度ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "log_id": 6,
      "season_id": 12,
      "version": "3.0-beta",
      "release_date": "2025-12-20",
      "changes": "2026年春季番剧预告数据...",
      "reference_sources": "官方预告、杂志报道",
      "notes": "春季季度预览版本"
    }
  ]
}
```

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 季度不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 季度按年份和季度排序，最新的在前面
2. 季度状态包括：preview（预览）、official（正式）、archived（归档）
3. 季度番剧列表支持分页
