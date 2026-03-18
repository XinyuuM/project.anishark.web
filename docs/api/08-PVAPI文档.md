# PV API文档

## 概述

PV API提供了番剧PV（宣传视频）相关的功能接口，包括PV列表、搜索、统计等功能。

**基础路径**: `/api/pvs` 或 `/api/pvs.php`

---

## 1. 获取最新PV列表

### 接口信息
- **路径**: `/api/pvs` 或 `/api/pvs/latest`
- **方法**: `GET`
- **描述**: 获取最新PV列表

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| limit | int | 否 | 返回数量限制，默认20 |

### 返回示例
```json
{
  "code": 200,
  "message": "获取最新PV列表成功",
  "data": [
    {
      "pv_id": 696,
      "anime_id": 255,
      "pv_title": "【1月/铃代纱弓】29岁单身冒险家的日常 第11话预告【MCE汉化组】",
      "pv_type": "其他",
      "platform": "bilibili",
      "bilibili_bvid": "BV1eHw2zrEjY",
      "thumbnail_url": null,
      "release_date": "2026-03-17",
      "view_count": null,
      "like_count": null,
      "duration_display": null,
      "title_chinese": "29岁单身冒险家的日常",
      "title_original": "29歳独身中堅冒険者の日常"
    },
    {
      "pv_id": 697,
      "anime_id": 261,
      "pv_title": "【1月】魔都精兵的奴隶 第二季 第11话预告【MCE汉化组】",
      "pv_type": "其他",
      "platform": "bilibili",
      "bilibili_bvid": "BV1YHw2zrEU3",
      "thumbnail_url": null,
      "release_date": "2026-03-17",
      "view_count": null,
      "like_count": null,
      "duration_display": null,
      "title_chinese": "魔都精兵的奴隶 第二季",
      "title_original": "魔都精兵のスレイブ2"
    }
  ]
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| pv_id | int | PV ID |
| anime_id | int | 关联番剧ID |
| pv_title | string | PV标题 |
| pv_type | string | PV类型（PV/CM/其他等） |
| platform | string | 平台名称 |
| bilibili_bvid | string | B站视频ID |
| thumbnail_url | string | 缩略图URL |
| release_date | string | 发布日期 |
| view_count | int | 观看次数 |
| like_count | int | 点赞数 |
| duration_display | string | 时长显示 |
| title_chinese | string | 番剧中文名 |
| title_original | string | 番剧原名 |

## 2. 获取PV统计信息

### 接口信息
- **路径**: `/api/pvs/stats`
- **方法**: `GET`
- **描述**: 获取PV统计信息

### 返回示例
```json
{
  "code": 200,
  "message": "获取PV统计信息成功",
  "data": {
    "total_pvs": 360,
    "primary_pvs": 16,
    "official_pvs": 345,
    "bilibili_pvs": 360,
    "animes_with_pvs": 100
  }
}
```

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 404 | PV不存在 |
| 400 | 请求参数错误 |

---

## 注意事项

1. PV类型包括：PV、CM、其他
2. 支持的平台主要是bilibili和youtube
3. PV列表按发布日期倒序排列
4. bilibili_bvid可用于直接播放视频
