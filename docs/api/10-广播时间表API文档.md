# 广播时间表API文档

## 概述

广播时间表API提供了番剧播出时间相关的功能接口，包括排期数据、播出统计等功能。

**基础路径**: `/api/broadcast-schedule` 或 `/api/broadcast-schedule.php`

---

## 1. 获取连载中番剧的首播排期数据

### 接口信息
- **路径**: `/api/broadcast/schedule`
- **方法**: `GET`
- **描述**: 获取连载中番剧的首播排期数据

### 返回示例
```json
{
  "code": 200,
  "message": "获取排期数据成功",
  "data": [
    {
      "schedule_id": 179,
      "anime_id": 530,
      "day_of_week": "周一",
      "broadcast_time": "00:00:00",
      "broadcast_date": "2026-04-06",
      "region_type": "日本首播",
      "time_display_color": "默认",
      "is_first_broadcast": 1,
      "notes": "",
      "anime_title": "茉莉花酱的好感度正在崩坏",
      "title_original": "茉莉花ちゃんの好感度はぶっ壊れている",
      "total_episodes": 12,
      "episodes_announced": null,
      "original_work_type": "漫画改编",
      "is_short_series": 0
    },
    {
      "schedule_id": 180,
      "anime_id": 531,
      "day_of_week": "周一",
      "broadcast_time": "00:10:00",
      "broadcast_date": "2026-04-06",
      "region_type": "日本首播",
      "time_display_color": "默认",
      "is_first_broadcast": 1,
      "notes": "",
      "anime_title": "淫狱团地",
      "title_original": "インゴクダンチ",
      "total_episodes": 12,
      "episodes_announced": null,
      "original_work_type": "漫画改编",
      "is_short_series": 1
    }
  ]
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| schedule_id | int | 排期ID |
| anime_id | int | 番剧ID |
| day_of_week | string | 播出星期 |
| broadcast_time | string | 播出时间 |
| broadcast_date | string | 播出日期 |
| region_type | string | 地区类型（日本首播/网络配信等） |
| time_display_color | string | 时间显示颜色 |
| is_first_broadcast | int |是否为首播（0否/1是） |
| notes | string | 备注 |
| anime_title | string | 番剧中文名 |
| title_original | string | 番剧原名 |
| total_episodes | int | 总集数 |
| is_short_series | int | 是否为短篇动画 |

---

## 2. 获取未来一周的首播排期数据

### 接口信息
- **路径**: `/api/broadcast/schedule/upcoming`
- **方法**: `GET`
- **描述**: 获取未来一周的首播排期数据

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "schedule_id": 179,
      "anime_id": 530,
      "anime_title": "茉莉花酱的好感度正在崩坏",
      "day_of_week": "周一",
      "broadcast_time": "00:00:00",
      "broadcast_date": "2026-04-06"
    }
  ]
}
```

---

## 3. 获取连载中番剧的首播排期数据（含封面图）

### 接口信息
- **路径**: `/api/broadcast/schedule-with-covers`
- **方法**: `GET`
- **描述**: 获取连载中番剧的首播排期数据（含封面图）

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "schedule_id": 179,
      "anime_id": 530,
      "anime_title": "茉莉花酱的好感度正在崩坏",
      "cover_image": "https://open.xinyuu.cn/static/12/530.webp",
      "day_of_week": "周一",
      "broadcast_time": "00:00:00",
      "broadcast_date": "2026-04-06"
    }
  ]
}
```

---

## 4. 获取广播状态统计

### 接口信息
- **路径**: `/api/broadcast-schedule/stats`
- **方法**: `GET`
- **描述**: 获取广播状态统计

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 112,
    "by_day_of_week": {
      "周一": 15,
      "周二": 12,
      "周三": 18,
      "周四": 14,
      "周五": 16,
      "周六": 20,
      "周日": 17
    },
    "by_region_type": {
      "日本首播": 100,
      "网络配信": 12
    }
  }
}
```

---

## 5. 获取广播番剧总数

### 接口信息
- **路径**: `/api/broadcast-schedule/count`
- **方法**: `GET`
- **描述**: 获取广播番剧总数

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 112
  }
}
```

---

## 6. 获取所有播出日列表

### 接口信息
- **路径**: `/api/broadcast-schedule/days`
- **方法**: `GET`
- **描述**: 获取所有播出日列表

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "day": "周一",
      "count": 15
    },
    {
      "day": "周二",
      "count": 12
    }
  ]
}
```

---

## 7. 根据播出时间搜索番剧

### 接口信息
- **路径**: `/api/broadcast-schedule/search`
- **方法**: `GET`
- **描述**: 根据播出时间搜索番剧

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| day | string | 否 | 播出日（周一到周日） |
| time | string | 否 | 播出时间（HH:mm:ss格式） |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "anime_id": 530,
      "anime_title": "茉莉花酱的好感度正在崩坏",
      "day_of_week": "周一",
      "broadcast_time": "00:00:00"
    }
  ]
}
```

---

## 8. 获取当前播出时间的番剧

### 接口信息
- **路径**: `/api/broadcast-schedule/current`
- **方法**: `GET`
- **描述**: 获取当前播出时间的番剧

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "anime_id": 246,
      "anime_title": "正义使者 -我的英雄学院之非法英雄- 第二季",
      "day_of_week": "周一",
      "broadcast_time": "21:00:00",
      "is_current": true
    }
  ]
}
```

---

## 9. 获取一周的播出安排概览

### 接口信息
- **路径**: `/api/broadcast-schedule/weekly`
- **方法**: `GET`
- **描述**: 获取一周的播出安排概览

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "start_date": "2026-03-17",
    "end_date": "2026-03-23",
    "schedule": [
      {
        "day": "周一",
        "date": "2026-03-17",
        "animes": 15
      },
      {
        "day": "周二",
        "date": "2026-03-18",
        "animes": 12
      }
    ]
  }
}
```

---

## 10. 获取每日播出安排

### 接口信息
- **路径**: `/api/broadcast-schedule/daily`
- **方法**: `GET`
- **描述**: 获取每日播出安排

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| date | string | 否 | 日期（YYYY-MM-DD格式），默认当天 |

### 返回示例
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "date": "2026-03-17",
    "day_of_week": "周一",
    "animes": [
      {
        "anime_id": 530,
        "anime_title": "茉莉花酱的好感度正在崩坏",
        "broadcast_time": "00:00:00"
      }
    ]
  }
}
```

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | 数据不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 所有时间均使用日本标准时间（JST）
2. 播出日按星期一到星期日排序
3. time_display_color用于前端显示不同颜色标注
4. is_first_broadcast标识是否为首播
