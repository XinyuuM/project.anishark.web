# 制作人员API文档

## 概述

制作人员API提供了动画制作人员相关的功能接口，包括制作人员列表、搜索、作品等功能。

**基础路径**: `/api/staff` 或 `/api/staff.php`

---

## 1. 获取所有制作人员

### 接口信息
- **路径**: `/api/staff`
- **方法**: `GET`
- **描述**: 获取所有制作人员（支持分页）

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
      "staff_id": 4435,
      "name_original": "AXIS GRAPHIC",
      "name_chinese": "AXIS GRAPHIC",
      "role_type": "",
      "notes": null
    },
    {
      "staff_id": 4299,
      "name_original": "directrain",
      "name_chinese": "directrain",
      "role_type": "",
      "notes": null
    },
    {
      "staff_id": 4250,
      "name_original": "SMDE",
      "name_chinese": "SMDE",
      "role_type": "",
      "notes": null
    }
  ],
  "total": 2952
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| staff_id | int | 制作人员ID |
| name_original | string | 原始名称（日文等） |
| name_chinese | string | 中文译名 |
| role_type | string | 角色类型 |
| notes | string | 备注 |

---

## 2. 获取制作人员统计信息

### 接口信息
- **路径**: `/api/staff/stats`
- **方法**: `GET`
- **描述**: 获取制作人员统计信息

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 2952,
    "by_role_type": {
      "导演": 256,
      "系列构成": 189,
      "音乐": 445,
      "角色设计": 198,
      "美术监督": 156
    }
  }
}
```

---

## 3. 根据ID获取制作人员

### 接口信息
- **路径**: `/api/staff/:id`
- **方法**: `GET`
- **描述**: 根据ID获取制作人员基本信息

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 制作人员ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "staff_id": 3216,
    "name_original": "上松范康",
    "name_chinese": "上松范康",
    "role_type": "",
    "notes": "其他"
  }
}
```

---

## 4. 获取制作人员详细信息

### 接口信息
- **路径**: `/api/staff/:id/details`
- **方法**: `GET`
- **描述**: 获取制作人员详细信息及参与作品

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 制作人员ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "staff_id": 3216,
    "name_original": "上松范康",
    "name_chinese": "上松范康",
    "role_type": "音乐",
    "notes": "音乐制作",
    "animes": [
      {
        "anime_id": 123,
        "title": "某部作品",
        "role": "音乐"
      }
    ]
  }
}
```

---

## 5. 获取制作人员的作品

### 接口信息
- **路径**: `/api/staff/:id/animes`
- **方法**: `GET`
- **描述**: 获取制作人员参与的作品列表

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 制作人员ID |

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
      "year": 2026,
      "quarter": "春",
      "role": "音乐"
    }
  ],
  "total": 15
}
```

---

## 6. 搜索制作人员

### 接口信息
- **路径**: `/api/staff/search`
- **方法**: `GET`
- **描述**: 搜索制作人员

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
      "staff_id": 3216,
      "name_original": "上松范康",
      "name_chinese": "上松范康",
      "role_type": "音乐"
    }
  ],
  "total": 1
}
```

---

## 7. 根据角色类型获取制作人员

### 接口信息
- **路径**: `/api/staff/role/:type`
- **方法**: `GET`
- **描述**: 根据角色类型获取制作人员

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| type | string | 是 | 角色类型（导演/音乐/角色设计等） |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "staff_id": 123,
      "name_original": "导演名",
      "name_chinese": "导演名",
      "role_type": "导演"
    }
  ],
  "total": 256
}
```

---

## 8. 获取番剧的制作人员

### 接口信息
- **路径**: `/api/staff/anime/:id/staff`
- **方法**: `GET`
- **描述**: 获取番剧的制作人员列表

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
      "staff_id": 3216,
      "name_original": "上松范康",
      "name_chinese": "上松范康",
      "role_type": "音乐",
      "notes": null
    }
  ]
}
```

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 制作人员不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 角色类型包括：导演、系列构成、音乐、角色设计、美术监督等
2. 搜索支持姓名模糊匹配
3. 制作人员的作品按年份倒序排列
