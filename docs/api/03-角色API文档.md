# 角色API文档

## 概述

角色API提供了动画角色相关的功能接口，包括角色搜索、统计、声优信息等功能。

**基础路径**: `/api/characters` 或 `/api/characters.php`

---

## 1. 获取角色统计信息

### 接口信息
- **路径**: `/api/characters/stats`
- **方法**: `GET`
- **描述**: 获取角色统计信息

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total_characters": 4157,
    "main_characters": 1099,
    "supporting_characters": 3036,
    "villain_characters": 9,
    "animes_with_characters": 513,
    "total_voice_actors": 1140
  }
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| total_characters | int | 角色总数 |
| main_characters | int | 主角数量 |
| supporting_characters | int | 配角数量 |
| villain_characters | int | 反派数量 |
| animes_with_characters | int | 有角色信息的番剧数量 |
| total_voice_actors | int | 声优总数 |

---

## 2. 搜索角色

### 接口信息
- **路径**: `/api/characters/search`
- **方法**: `GET`
- **描述**: 搜索角色

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
      "character_id": 1234,
      "name": "铃木",
      "name_chinese": "铃木",
      "name_original": "鈴木",
      "type": "主角",
      "description": "本作的主角...",
      "anime_id": 280,
      "anime_title": "相反的你和我"
    }
  ],
  "total": 15
}
```

---

## 3. 根据类型获取角色列表

### 接口信息
- **路径**: `/api/characters/type/:type`
- **方法**: `GET`
- **描述**: 根据类型获取角色列表

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| type | string | 是 | 角色类型（主角/配角/反派） |

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
      "anime_id": 280,
      "anime_title": "相反的你和我"
    }
  ],
  "total": 1099
}
```

---

## 4. 获取角色详细信息

### 接口信息
- **路径**: `/api/characters/:id`
- **方法**: `GET`
- **描述**: 获取角色详细信息（包含声优）

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 角色ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "character_id": 1234,
    "name": "铃木",
    "name_chinese": "铃木",
    "name_original": "鈴木",
    "type": "主角",
    "description": "元气女生，善于察言观色...",
    "anime_id": 280,
    "anime_title": "相反的你和我",
    "anime_title_original": "正反対な君と僕",
    "voice_actors": [
      {
        "voice_actor_id": 72,
        "name": "花泽香菜",
        "name_chinese": "花泽香菜",
        "role": "主演"
      }
    ]
  }
}
```

---

## 5. 获取角色的声优信息

### 接口信息
- **路径**: `/api/characters/:id/voice-actors`
- **方法**: `GET`
- **描述**: 获取角色的声优信息

### 路径参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | int | 是 | 角色ID |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "voice_actor_id": 72,
      "name": "花泽香菜",
      "name_chinese": "花泽香菜",
      "gender": "女",
      "agency": null,
      "role": "主演"
    }
  ]
}
```

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 角色不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 角色类型包括：主角、配角、反派
2. 搜索支持角色名称模糊匹配
3. 角色详情包含关联的声优信息
