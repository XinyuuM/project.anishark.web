# 声优API文档

## 概述

声优API提供了声优相关的功能接口，包括声优列表、搜索、排行、作品等功能。

**基础路径**: `/api/voice-actors` 或 `/api/voice-actors.php`

---

## 1. 获取所有声优

### 接口信息
- **路径**: `/api/voice-actors`
- **方法**: `GET`
- **描述**: 获取所有声优（分页）

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
      "voice_actor_id": 1,
      "name_original": "声优名",
      "name_chinese": "声优中文名",
      "gender": "女",
      "agency": "事务所名",
      "anime_count": 15
    }
  ],
  "total": 1140
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| voice_actor_id | int | 声优ID |
| name_original | string | 原始姓名 |
| name_chinese | string | 中文译名 |
| gender | string | 性别 |
| agency | string | 所属事务所 |
| anime_count | int | 参与作品数量 |

---

## 2. 获取声优详情

### 接口信息
- **路径**: `/api/voice-actors/:id`
- **方法**: `GET`
- **描述**: 获取声优详情

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 声优ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "voice_actor_id": 72,
    "name_original": "花澤香菜",
    "name_chinese": "花泽香菜",
    "gender": "女",
    "agency": null,
    "birthday": "1989-02-25",
    "blood_type": "O",
    "anime_count": 24,
    "character_count": 35
  }
}
```

---

## 3. 获取声优的角色列表

### 接口信息
- **路径**: `/api/voice-actors/:id/characters`
- **方法**: `GET`
- **描述**: 获取声优的角色列表

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 声优ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "character_id": 1234,
      "name": "角色名",
      "name_chinese": "角色中文名",
      "anime_id": 280,
      "anime_title": "相反的你和我",
      "role": "主演"
    }
  ],
  "total": 35
}
```

---

## 4. 获取声优的作品列表

### 接口信息
- **路径**: `/api/voice-actors/:id/animes`
- **方法**: `GET`
- **描述**: 获取声优的作品列表

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 声优ID |

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
      "character_name": "铃木",
      "character_role": "主演"
    }
  ],
  "total": 24
}
```

---

## 5. 获取声优排行榜

### 接口信息
- **路径**: `/api/voice-actors/ranking`
- **方法**: `GET`
- **描述**: 获取声优排行榜

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| type | string | 否 | 排行榜类型（anime），默认anime |
| limit | int | 否 | 返回数量限制，默认10 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "voice_actor_id": 72,
      "name_original": "花澤香菜",
      "name_chinese": "花泽香菜",
      "anime_count": 24
    },
    {
      "voice_actor_id": 45,
      "name_original": "梶裕貴",
      "name_chinese": "梶裕贵",
      "anime_count": 22
    }
  ]
}
```

---

## 6. 搜索声优

### 接口信息
- **路径**: `/api/voice-actors/search`
- **方法**: `GET`
- **描述**: 搜索声优

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
      "voice_actor_id": 72,
      "name_original": "花澤香菜",
      "name_chinese": "花泽香菜",
      "gender": "女",
      "agency": null,
      "anime_count": 24
    }
  ],
  "total": 1
}
```

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 声优不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 声优作品按年份倒序排列
2. 搜索支持姓名模糊匹配（日文/中文）
3. 排行榜按参与作品数量排序
