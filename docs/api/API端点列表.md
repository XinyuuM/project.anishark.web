# 番剧API端点列表

本文档列出了所有公开的API端点及其使用方法。

**API基础地址**: `https:db.xinyuu.cn/api/`

---

## 1. 番剧模块 (animes)

### 获取番剧列表
- **路径**: `/api/animes` 或 `/api/animes.php`
- **方法**: `GET`
- **描述**: 获取所有番剧列表（支持分页）
- **参数**:
  - `page` (可选): 页码，默认1
  - `limit` (可选): 每页数量，默认20
  - `season_id` (可选): 按季度筛选
  - `status` (可选): 按状态筛选

### 获取单个番剧详情
- **路径**: `/api/animes/:id` 或 `/api/animes.php/:id`
- **方法**: `GET`
- **描述**: 根据ID获取单个番剧的详细信息
- **参数**:
  - `id`: 番剧ID

### 获取番剧完整信息
- **路径**: `/api/animes/:id/complete` 或 `/api/animes.php/:id/complete`
- **方法**: `GET`
- **描述**: 获取番剧的完整信息，包括所有关联数据
- **参数**:
  - `id`: 番剧ID

### 搜索番剧
- **路径**: `/api/animes/search` 或 `/api/animes.php/search`
- **方法**: `GET` / `POST`
- **描述**: 搜索番剧，支持高级搜索
- **参数**:
  - `q` (GET): 搜索关键词
  - `keyword` (POST): 搜索关键词
  - `season_id` (POST): 按季度筛选
  - `status` (POST): 按状态筛选
  - `year` (POST): 按年份筛选
  - `tags` (POST): 按标签筛选

### 获取番剧统计信息
- **路径**: `/api/animes/stats` 或 `/api/animes.php/stats`
- **方法**: `GET`
- **描述**: 获取番剧统计信息

### 按季度统计番剧
- **路径**: `/api/animes/stats/by-season` 或 `/api/animes.php/stats/by-season`
- **方法**: `GET`
- **描述**: 按季度统计番剧数量

### 获取番剧的PV列表
- **路径**: `/api/animes/:id/pvs` 或 `/api/animes.php/:id/pvs`
- **方法**: `GET`
- **描述**: 获取番剧的PV列表
- **参数**:
  - `id`: 番剧ID

### 获取番剧的角色列表
- **路径**: `/api/animes/:id/characters` 或 `/api/animes.php/:id/characters`
- **方法**: `GET`
- **描述**: 获取番剧的角色列表
- **参数**:
  - `id`: 番剧ID

### 获取番剧的播放平台列表
- **路径**: `/api/animes/:id/platforms` 或 `/api/animes.php/:id/platforms`
- **方法**: `GET`
- **描述**: 获取番剧的播放平台列表
- **参数**:
  - `id`: 番剧ID

### 获取番剧的视觉资源列表
- **路径**: `/api/animes/:id/visual-resources` 或 `/api/animes.php/:id/visual-resources`
- **方法**: `GET`
- **描述**: 获取番剧的视觉资源列表
- **参数**:
  - `id`: 番剧ID

### 获取番剧视觉资源数量
- **路径**: `/api/animes/:id/visual-resources/count` 或 `/api/animes.php/:id/visual-resources/count`
- **方法**: `GET`
- **描述**: 获取番剧视觉资源数量
- **参数**:
  - `id`: 番剧ID

### 获取番剧的广播安排
- **路径**: `/api/animes/:id/broadcast-schedule` 或 `/api/animes.php/:id/broadcast-schedule`
- **方法**: `GET`
- **描述**: 获取番剧的广播安排
- **参数**:
  - `id`: 番剧ID

### ~~获取番剧的详细描述~~（已弃用）
- **路径**: `/api/animes/:id/descriptions` 或 `/api/animes.php/:id/descriptions`
- **方法**: `GET`
- **描述**: 获取番剧的详细描述
- **参数**:
  - `id`: 番剧ID

### ~~获取番剧的中文描述~~（已弃用）
- **路径**: `/api/animes/:id/descriptions/zh` 或 `/api/animes.php/:id/descriptions/zh`
- **方法**: `GET`
- **描述**: 获取番剧的中文描述
- **参数**:
  - `id`: 番剧ID

### ~~获取番剧的日文描述~~（已弃用）
- **路径**: `/api/animes/:id/descriptions/ja` 或 `/api/animes.php/:id/descriptions/ja`
- **方法**: `GET`
- **描述**: 获取番剧的日文描述
- **参数**:
  - `id`: 番剧ID

### ~~获取番剧的英文描述~~（已弃用）
- **路径**: `/api/animes/:id/descriptions/en` 或 `/api/animes.php/:id/descriptions/en`
- **方法**: `GET`
- **描述**: 获取番剧的英文描述
- **参数**:
  - `id`: 番剧ID

### 获取原作备注
- **路径**: `/api/animes/:id/descriptions/source-notes` 或 `/api/animes.php/:id/descriptions/source-notes`
- **方法**: `GET`
- **描述**: 获取番剧的原作备注
- **参数**:
  - `id`: 番剧ID

### 获取制作备注
- **路径**: `/api/animes/:id/descriptions/production-notes` 或 `/api/animes.php/:id/descriptions/production-notes`
- **方法**: `GET`
- **描述**: 获取番剧的制作备注
- **参数**:
  - `id`: 番剧ID

### 检查是否有描述
- **路径**: `/api/animes/:id/descriptions/check` 或 `/api/animes.php/:id/descriptions/check`
- **方法**: `GET`
- **描述**: 检查番剧是否有描述
- **参数**:
  - `id`: 番剧ID

### 获取番剧的标签列表
- **路径**: `/api/animes/:id/tags` 或 `/api/animes.php/:id/tags`
- **方法**: `GET`
- **描述**: 获取番剧的标签列表
- **参数**:
  - `id`: 番剧ID

### 获取番剧的制作人员
- **路径**: `/api/animes/:id/staff` 或 `/api/animes.php/:id/staff`
- **方法**: `GET`
- **描述**: 获取番剧的制作人员
- **参数**:
  - `id`: 番剧ID

### 获取番剧的流媒体链接列表
- **路径**: `/api/animes/:id/streaming-links` 或 `/api/animes.php/:id/streaming-links`
- **方法**: `GET`
- **描述**: 获取番剧的流媒体链接列表
- **参数**:
  - `id`: 番剧ID

### 获取番剧的主要流媒体链接
- **路径**: `/api/animes/:id/streaming-links/primary` 或 `/api/animes.php/:id/streaming-links/primary`
- **方法**: `GET`
- **描述**: 获取番剧的主要流媒体链接
- **参数**:
  - `id`: 番剧ID

### 创建流媒体链接
- **路径**: `/api/animes/:id/streaming-links` 或 `/api/animes.php/:id/streaming-links`
- **方法**: `POST`
- **描述**: 为番剧创建流媒体链接
- **参数**:
  - `id`: 番剧ID
  - Body: JSON格式的链接数据

### 根据独家性获取番剧平台信息
- **路径**: `/api/animes/:id/platforms/exclusive/:type` 或 `/api/animes.php/:id/platforms/exclusive/:type`
- **方法**: `GET`
- **描述**: 根据独家性获取番剧平台信息
- **参数**:
  - `id`: 番剧ID
  - `type`: 类型

### 根据免费状态获取番剧平台信息
- **路径**: `/api/animes/:id/platforms/free/:type` 或 `/api/animes.php/:id/platforms/free/:type`
- **方法**: `GET`
- **描述**: 根据免费状态获取番剧平台信息
- **参数**:
  - `id`: 番剧ID
  - `type`: 类型

## 2. 平台模块 (platforms)

### 获取所有播放平台列表
- **路径**: `/api/platforms` 或 `/api/platforms.php`
- **方法**: `GET`
- **描述**: 获取所有播放平台列表

### 获取平台统计信息
- **路径**: `/api/platforms/stats` 或 `/api/platforms.php/stats`
- **方法**: `GET`
- **描述**: 获取平台统计信息

### 搜索播放平台
- **路径**: `/api/platforms/search` 或 `/api/platforms.php/search`
- **方法**: `GET`
- **描述**: 搜索播放平台
- **参数**:
  - `keyword`: 搜索关键词
  - `limit`: 返回数量限制，默认20

### 获取平台类型列表
- **路径**: `/api/platforms/types` 或 `/api/platforms.php/types`
- **方法**: `GET`
- **描述**: 获取平台类型列表

### 根据平台类型获取播放平台列表
- **路径**: `/api/platforms/type/:type` 或 `/api/platforms.php/type/:type`
- **方法**: `GET`
- **描述**: 根据平台类型获取播放平台列表
- **参数**:
  - `type`: 平台类型

### 根据ID获取播放平台详情
- **路径**: `/api/platforms/:id` 或 `/api/platforms.php/:id`
- **方法**: `GET`
- **描述**: 根据ID获取播放平台详情
- **参数**:
  - `id`: 平台ID

### 获取平台的所有番剧
- **路径**: `/api/platforms/:id/animes` 或 `/api/platforms.php/:id/animes`
- **方法**: `GET`
- **描述**: 获取平台的所有番剧
- **参数**:
  - `id`: 平台ID
  - `limit`: 返回数量限制，默认50

---

## 3. 角色模块 (characters)

### 获取角色统计信息
- **路径**: `/api/characters/stats` 或 `/api/characters.php/stats`
- **方法**: `GET`
- **描述**: 获取角色统计信息

### 搜索角色
- **路径**: `/api/characters/search` 或 `/api/characters.php/search`
- **方法**: `GET`
- **描述**: 搜索角色
- **参数**:
  - `q`: 搜索关键词

### 根据类型获取角色列表
- **路径**: `/api/characters/type/:type` 或 `/api/characters.php/type/:type`
- **方法**: `GET`
- **描述**: 根据类型获取角色列表
- **参数**:
  - `type`: 角色类型

### 获取角色详细信息
- **路径**: `/api/characters/:id` 或 `/api/characters.php/:id`
- **方法**: `GET`
- **描述**: 获取角色详细信息（包含声优）
- **参数**:
  - `id`: 角色ID

### 获取角色的声优信息
- **路径**: `/api/characters/:id/voice-actors` 或 `/api/characters.php/:id/voice-actors`
- **方法**: `GET`
- **描述**: 获取角色的声优信息
- **参数**:
  - `id`: 角色ID

---

## 4. 制作人员模块 (staff)

### 获取所有制作人员
- **路径**: `/api/staff` 或 `/api/staff.php`
- **方法**: `GET`
- **描述**: 获取所有制作人员

### 获取制作人员统计信息
- **路径**: `/api/staff/stats` 或 `/api/staff.php/stats`
- **方法**: `GET`
- **描述**: 获取制作人员统计信息

### 根据ID获取制作人员
- **路径**: `/api/staff/:id` 或 `/api/staff.php/:id`
- **方法**: `GET`
- **描述**: 根据ID获取制作人员
- **参数**:
  - `id`: 制作人员ID

### 获取制作人员详细信息
- **路径**: `/api/staff/:id/details` 或 `/api/staff.php/:id/details`
- **方法**: `GET`
- **描述**: 获取制作人员详细信息
- **参数**:
  - `id`: 制作人员ID

### 获取制作人员的作品
- **路径**: `/api/staff/:id/animes` 或 `/api/staff.php/:id/animes`
- **方法**: `GET`
- **描述**: 获取制作人员的作品
- **参数**:
  - `id`: 制作人员ID

### 搜索制作人员
- **路径**: `/api/staff/search` 或 `/api/staff.php/search`
- **方法**: `GET`
- **描述**: 搜索制作人员
- **参数**:
  - `q`: 搜索关键词

### 根据角色类型获取制作人员
- **路径**: `/api/staff/role/:type` 或 `/api/staff.php/role/:type`
- **方法**: `GET`
- **描述**: 根据角色类型获取制作人员
- **参数**:
  - `type`: 角色类型

### 获取番剧的制作人员
- **路径**: `/api/staff/anime/:id/staff` 或 `/api/staff.php/anime/:id/staff`
- **方法**: `GET`
- **描述**: 获取番剧的制作人员
- **参数**:
  - `id`: 番剧ID

---

## 5. 季度模块 (seasons)

### 获取所有季度
- **路径**: `/api/seasons` 或 `/api/seasons.php`
- **方法**: `GET`
- **描述**: 获取所有季度

### 获取最新季度
- **路径**: `/api/seasons/latest` 或 `/api/seasons.php/latest`
- **方法**: `GET`
- **描述**: 获取最新季度

### 获取单个季度详情
- **路径**: `/api/seasons/:id` 或 `/api/seasons.php/:id`
- **方法**: `GET`
- **描述**: 获取单个季度详情
- **参数**:
  - `id`: 季度ID

### 根据季度获取番剧
- **路径**: `/api/seasons/:id/animes` 或 `/api/seasons.php/:id/animes`
- **方法**: `GET`
- **描述**: 根据季度获取番剧
- **参数**:
  - `id`: 季度ID

### 获取季度更新日志
- **路径**: `/api/seasons/:id/update-logs` 或 `/api/seasons.php/:id/update-logs`
- **方法**: `GET`
- **描述**: 获取季度更新日志
- **参数**:
  - `id`: 季度ID

---

## 6. 标签模块 (tags)

### 获取所有标签
- **路径**: `/api/tags` 或 `/api/tags.php`
- **方法**: `GET`
- **描述**: 获取所有标签

### 获取标签历史趋势
- **路径**: `/api/tags/history/trend` 或 `/api/tags.php/history/trend`
- **方法**: `GET`
- **描述**: 获取标签历史趋势
- **参数**:
  - `top`: 返回前N个标签，默认10
  - `period`: 时间周期（quarterly/monthly），默认quarterly
  - `years`: 年份，如2024

### 获取标签统计信息
- **路径**: `/api/tags/statistics` 或 `/api/tags.php/statistics`
- **方法**: `GET`
- **描述**: 获取标签统计信息

### 获取标签分类统计
- **路径**: `/api/tags/categories` 或 `/api/tags.php/categories`
- **方法**: `GET`
- **描述**: 获取标签分类统计

### 获取热门标签
- **路径**: `/api/tags/popular` 或 `/api/tags.php/popular`
- **方法**: `GET`
- **描述**: 获取热门标签
- **参数**:
  - `limit`: 返回数量限制，默认10
  - `category`: 标签类别

### 搜索标签
- **路径**: `/api/tags/search` 或 `/api/tags.php/search`
- **方法**: `GET`
- **描述**: 搜索标签
- **参数**:
  - `q`: 搜索关键词
  - `limit`: 返回数量限制，默认20

### 根据类别获取标签
- **路径**: `/api/tags/category/:category` 或 `/api/tags.php/category/:category`
- **方法**: `GET`
- **描述**: 根据类别获取标签
- **参数**:
  - `category`: 标签类别

### 根据ID获取单个标签
- **路径**: `/api/tags/:id` 或 `/api/tags.php/:id`
- **方法**: `GET`
- **描述**: 根据ID获取单个标签
- **参数**:
  - `id`: 标签ID

### 根据标签获取番剧
- **路径**: `/api/tags/:id/animes` 或 `/api/tags.php/:id/animes`
- **方法**: `GET`
- **描述**: 根据标签获取番剧（带分页）
- **参数**:
  - `id`: 标签ID
  - `page`: 页码，默认1
  - `limit`: 每页数量，默认20

---

## 7. 声优模块 (voice-actors)

### 获取所有声优
- **路径**: `/api/voice-actors` 或 `/api/voice-actors.php`
- **方法**: `GET`
- **描述**: 获取所有声优（分页）

### 获取声优详情
- **路径**: `/api/voice-actors/:id` 或 `/api/voice-actors.php/:id`
- **方法**: `GET`
- **描述**: 获取声优详情
- **参数**:
  - `id`: 声优ID

### 获取声优的角色列表
- **路径**: `/api/voice-actors/:id/characters` 或 `/api/voice-actors.php/:id/characters`
- **方法**: `GET`
- **描述**: 获取声优的角色列表
- **参数**:
  - `id`: 声优ID

### 获取声优的作品列表
- **路径**: `/api/voice-actors/:id/animes` 或 `/api/voice-actors.php/:id/animes`
- **方法**: `GET`
- **描述**: 获取声优的作品列表
- **参数**:
  - `id`: 声优ID

### 获取声优排行榜
- **路径**: `/api/voice-actors/ranking` 或 `/api/voice-actors.php/ranking`
- **方法**: `GET`
- **描述**: 获取声优排行榜
- **参数**:
  - `type`: 排行榜类型（anime），默认anime
  - `limit`: 返回数量限制，默认10

### 搜索声优
- **路径**: `/api/voice-actors/search` 或 `/api/voice-actors.php/search`
- **方法**: `GET`
- **描述**: 搜索声优
- **参数**:
  - `q`: 搜索关键词
  - `limit`: 返回数量限制，默认20

---

## 8. PV模块 (pvs)

### 获取最新PV列表
- **路径**: `/api/pvs` 或 `/api/pvs.php` 或 `/api/pvs/latest` 或 `/api/pvs.php/latest`
- **方法**: `GET`
- **描述**: 获取最新PV列表
- **参数**:
  - `limit`: 返回数量限制，默认20

### 获取PV统计信息
- **路径**: `/api/pvs/stats` 或 `/api/pvs.php/stats`
- **方法**: `GET`
- **描述**: 获取PV统计信息

### 搜索PV
- **路径**: `/api/pvs/search` 或 `/api/pvs.php/search`
- **方法**: `GET`
- **描述**: 搜索PV
- **参数**:
  - `q`: 搜索关键词
  - `limit`: 返回数量限制，默认50

### 获取热门PV列表
- **路径**: `/api/pvs/popular` 或 `/api/pvs.php/popular`
- **方法**: `GET`
- **描述**: 获取热门PV列表
- **参数**:
  - `limit`: 返回数量限制，默认20

### 根据ID获取PV详情
- **路径**: `/api/pvs/:id` 或 `/api/pvs.php/:id`
- **方法**: `GET`
- **描述**: 根据ID获取PV详情
- **参数**:
  - `id`: PV ID

### 根据类型获取PV列表
- **路径**: `/api/pvs/type/:type` 或 `/api/pvs.php/type/:type`
- **方法**: `GET`
- **描述**: 根据类型获取PV列表
- **参数**:
  - `type`: PV类型
  - `limit`: 返回数量限制，默认50

### 根据平台获取PV列表
- **路径**: `/api/pvs/platform/:platform` 或 `/api/pvs.php/platform/:platform`
- **方法**: `GET`
- **描述**: 根据平台获取PV列表
- **参数**:
  - `platform`: 平台名称
  - `limit`: 返回数量限制，默认50

---

## 9. 流媒体链接模块 (streaming-links)

### 批量获取流媒体链接
- **路径**: `/api/streaming-links/batch` 或 `/api/streaming-links.php/batch`
- **方法**: `GET`
- **描述**: 批量获取流媒体链接
- **参数**:
  - `anime_ids`: 番剧ID列表（逗号分隔）

### 获取单个流媒体链接详情
- **路径**: `/api/streaming-links/:id` 或 `/api/streaming-links.php/:id`
- **方法**: `GET`
- **描述**: 获取单个流媒体链接详情
- **参数**:
  - `id`: 链接ID

### 更新流媒体链接
- **路径**: `/api/streaming-links/:id` 或 `/api/streaming-links.php/:id`
- **方法**: `PUT`
- **描述**: 更新流媒体链接
- **参数**:
  - `id`: 链接ID
  - Body: JSON格式的链接数据

### 删除流媒体链接
- **路径**: `/api/streaming-links/:id` 或 `/api/streaming-links.php/:id`
- **方法**: `DELETE`
- **描述**: 删除流媒体链接
- **参数**:
  - `id`: 链接ID

---

## 10. 广播时间表模块 (broadcast-schedule)

### 获取连载中番剧的首播排期数据
- **路径**: `/api/broadcast/schedule`
- **方法**: `GET`
- **描述**: 获取连载中番剧的首播排期数据

### 获取未来一周的首播排期数据
- **路径**: `/api/broadcast/schedule/upcoming`
- **方法**: `GET`
- **描述**: 获取未来一周的首播排期数据

### 获取连载中番剧的首播排期数据（含封面图）
- **路径**: `/api/broadcast/schedule-with-covers`
- **方法**: `GET`
- **描述**: 获取连载中番剧的首播排期数据（含封面图）

### 获取广播状态统计
- **路径**: `/api/broadcast-schedule/stats` 或 `/api/broadcast-schedule.php/stats`
- **方法**: `GET`
- **描述**: 获取广播状态统计

### 获取广播番剧总数
- **路径**: `/api/broadcast-schedule/count` 或 `/api/broadcast-schedule.php/count`
- **方法**: `GET`
- **描述**: 获取广播番剧总数

### 获取所有播出日列表
- **路径**: `/api/broadcast-schedule/days` 或 `/api/broadcast-schedule.php/days`
- **方法**: `GET`
- **描述**: 获取所有播出日列表

### 根据播出时间搜索番剧
- **路径**: `/api/broadcast-schedule/search` 或 `/api/broadcast-schedule.php/search`
- **方法**: `GET`
- **描述**: 根据播出时间搜索番剧
- **参数**:
  - `day`: 播出日
  - `time`: 播出时间

### 获取当前播出时间的番剧
- **路径**: `/api/broadcast-schedule/current` 或 `/api/broadcast-schedule.php/current`
- **方法**: `GET`
- **描述**: 获取当前播出时间的番剧

### 获取一周的播出安排概览
- **路径**: `/api/broadcast-schedule/weekly` 或 `/api/broadcast-schedule.php/weekly`
- **方法**: `GET`
- **描述**: 获取一周的播出安排概览

### 获取每日播出安排
- **路径**: `/api/broadcast-schedule/daily` 或 `/api/broadcast-schedule.php/daily`
- **方法**: `GET`
- **描述**: 获取每日播出安排

---

## 11. 视觉资源模块 (visual-resources)

### 获取所有视觉资源
- **路径**: `/api/visual-resources` 或 `/api/visual-resources.php`
- **方法**: `GET`
- **描述**: 获取所有视觉资源

### 搜索视觉资源
- **路径**: `/api/visual-resources/search` 或 `/api/visual-resources.php/search`
- **方法**: `GET`
- **描述**: 搜索视觉资源
- **参数**:
  - `q`: 搜索关键词

### 获取统计信息
- **路径**: `/api/visual-resources/stats` 或 `/api/visual-resources.php/stats`
- **方法**: `GET`
- **描述**: 获取视觉资源统计信息

### 获取资源类型列表
- **路径**: `/api/visual-resources/types` 或 `/api/visual-resources.php/types`
- **方法**: `GET`
- **描述**: 获取资源类型列表

### 获取最新视觉资源
- **路径**: `/api/visual-resources/latest` 或 `/api/visual-resources.php/latest`
- **方法**: `GET`
- **描述**: 获取最新视觉资源

### 根据类型获取视觉资源
- **路径**: `/api/visual-resources/type/:type` 或 `/api/visual-resources.php/type/:type`
- **方法**: `GET`
- **描述**: 根据类型获取视觉资源
- **参数**:
  - `type`: 资源类型

### 根据ID获取视觉资源详情
- **路径**: `/api/visual-resources/:id` 或 `/api/visual-resources.php/:id`
- **方法**: `GET`
- **描述**: 根据ID获取视觉资源详情
- **参数**:
  - `id`: 资源ID

---

## 12. 描述模块 (descriptions)

### 搜索番剧描述
- **路径**: `/api/descriptions?keyword=xxx` 或 `/api/descriptions/search`
- **方法**: `GET`
- **描述**: 搜索番剧描述
- **参数**:
  - `keyword`: 搜索关键词

### 获取描述统计信息
- **路径**: `/api/descriptions` 或 `/api/descriptions/stats`
- **方法**: `GET`
- **描述**: 获取描述统计信息

---

## 13. 统计模块 (statistics)

### 获取网站统计数据
- **路径**: `/api/statistics` 或 `/api/statistics.php`
- **方法**: `GET`
- **描述**: 获取网站统计数据

### 获取基础统计数据
- **路径**: `/api/statistics/basic` 或 `/api/statistics.php/basic`
- **方法**: `GET`
- **描述**: 获取基础统计数据

### 获取详细统计数据
- **路径**: `/api/statistics/detailed` 或 `/api/statistics.php/detailed`
- **方法**: `GET`
- **描述**: 获取详细统计数据

### 验证统计数据一致性
- **路径**: `/api/statistics/validate` 或 `/api/statistics.php/validate`
- **方法**: `GET`
- **描述**: 验证统计数据一致性

### 获取数据库表信息
- **路径**: `/api/statistics/tables` 或 `/api/statistics.php/tables`
- **方法**: `GET`
- **描述**: 获取数据库表信息

### API健康检查
- **路径**: `/api/statistics/health` 或 `/api/statistics.php/health`
- **方法**: `GET`
- **描述**: API健康检查

### 获取缓存状态
- **路径**: `/api/statistics/cache` 或 `/api/statistics.php/cache`
- **方法**: `GET`
- **描述**: 获取缓存状态

### 刷新缓存
- **路径**: `/api/statistics/refresh` 或 `/api/statistics.php/refresh`
- **方法**: `POST`
- **描述**: 刷新缓存/强制重新获取数据

---

## 通用说明

### 响应格式

所有API返回JSON格式数据：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    // 具体数据
  }
}
```

### 错误响应

```json
{
  "code": 404,
  "message": "资源不存在",
  "data": null
}
```

### 分页参数

大多数列表接口支持分页：

- `page`: 页码，默认1
- `limit`: 每页数量，默认20

### CORS支持

所有API端点支持跨域请求，允许来自任何域的访问。

### URL格式

大多数API支持两种URL格式：
- 带扩展名：`/api/animes.php`
- 不带扩展名：`/api/animes`

两种格式功能完全相同。
