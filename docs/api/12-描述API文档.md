# ~~描述API文档~~（已弃用）

> [!IMPORTANT]
>
> 该接口的所有方法均已被弃用，如有相关需求请访问[番剧API文档：获取单个番剧详情](01-番剧API文档.html#_2-获取单个番剧详情)返回体中`descriptions`字段替代

## 概述

描述API提供了番剧描述相关的功能接口，包括描述搜索、统计等功能。

**基础路径**: `/api/descriptions` 或 `/api/descriptions.php`

---

## 1. 搜索番剧描述

### 接口信息
- **路径**: `/api/descriptions?keyword=xxx` 或 `/api/descriptions/search`
- **方法**: `GET`
- **描述**: 搜索番剧描述

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| keyword | string | 是 | 搜索关键词 |
| limit | int | 否 | 返回数量限制，默认20 |

### 返回示例
```json
{
  "code": 200,
  "message": "搜索番剧描述成功",
  "data": [
    {
      "description_id": 9,
      "anime_id": 237,
      "description_zh": "木下歌夏是主推人气偶像团体F/ACE的福原多闻君的高中生。一天，去做家政兼职的地方，居然是多闻君本人的家！而且，多闻君的本性是和性感＆狂放的偶像样子完全相反的，阴湿的阴角……？不管是什么样子，多闻君就是多闻君。面对自我肯定感低下的他，开始对他全力支持！可是，阴湿的多闻君也让自己开始心动……？ON/OFF切换激烈×过于崭新的推活恋爱喜剧！",
      "description_ja": null,
      "description_en": null,
      "title_chinese": "现在多闻君是哪一面！？",
      "title_original": "多聞くん今どっち！？"
    },
    {
      "description_id": 52,
      "anime_id": 280,
      "description_zh": "吸引了会看气氛说话的元气女生铃木的是，会明确地说出自己意见的文静男生谷君。交往的两人带来快乐！共鸣MAX的等身大恋爱喜剧，开幕！",
      "description_ja": null,
      "description_en": null,
      "title_chinese": "相反的你和我",
      "title_original": "正反対な君と僕"
    },
    {
      "description_id": 5,
      "anime_id": 233,
      "description_zh": "在天才云集的精英名校·秀知院学园，副会长四宫辉夜与学生会长白银御行在学生会相遇。两人在经历了漫长的恋爱头脑战后，终于开始交往……时光流逝，辉夜独自在房间里翻看着相册。那里排列着记录了她与白银以及秀知院学园的伙伴们共度时光的照片。每当沉浸在怀念中翻过一页，辉夜的记忆便随之复苏。",
      "description_ja": null,
      "description_en": null,
      "title_chinese": "辉夜大小姐想让我告白 通往大人的阶梯",
      "title_original": "かぐや様は告らせたい 大人への階段"
    }
  ],
  "total": 15
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| description_id | int | 描述ID |
| anime_id | int | 番剧ID |
| description_zh | string | 中文描述 |
| description_ja | string | 日文描述 |
| description_en | string | 英文描述 |
| title_chinese | string | 番剧中文名 |
| title_original | string | 番剧原名 |

---

## 2. 获取描述统计信息

### 接口信息
- **路径**: `/api/descriptions` 或 `/api/descriptions/stats`
- **方法**: `GET`
- **描述**: 获取描述统计信息

### 返回示例
```json
{
  "code": 200,
  "message": "获取统计信息成功",
  "data": {
    "total": 280,
    "has_chinese": 280,
    "has_japanese": 45,
    "has_english": 12,
    "has_all": 10
  }
}
```

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| total | int | 总描述数 |
| has_chinese | int | 有中文描述的数量 |
| has_japanese | int | 有日文描述的数量 |
| has_english | int | 有英文描述的数量 |
| has_all | int | 三种语言都有描述的数量 |

---

## 相关接口

### 获取番剧的详细描述
- **路径**: `/api/animes/:id/descriptions`
- **方法**: `GET`
- **描述**: 获取番剧的详细描述
- **文档**: 参见《番剧API文档》

### 获取指定语言的描述
- **路径**: `/api/animes/:id/descriptions/{zh|ja|en}`
- **方法**: `GET`
- **描述**: 获取番剧的中文/日文/英文描述
- **文档**: 参见《番剧API文档》

---

## 错误代码说明

| 代码 | 说明 |
|------|------|
| 200 | 请求成功 |
| 400 | 请求参数错误 |

---

## 注意事项

1. 搜索支持中文、日文、英文描述的内容匹配
2. 描述字段可能为空（null）
3. 搜索结果按相关性排序
