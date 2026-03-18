# aniShark Foundation Website

> aniShark 基金会官方网站 - Building the Foundation of Animation Data

基于 [VitePress](https://vitepress.dev/) 构建的静态网站，用于展示动画数据统计、项目动态和相关文档。

## 📋 目录

- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [开发指南](#开发指南)
- [添加文章](#添加文章)
- [构建部署](#构建部署)
- [常见问题](#常见问题)

## 🚀 快速开始

### 环境要求

- **Node.js**: 18.0 或更高版本
- **包管理器**: npm、yarn 或 pnpm

### 安装依赖

```bash
# 进入项目目录
cd project.anishark.web

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

```bash
# 启动开发服务器（默认端口 5173）
npm run docs:dev

# 或使用其他包管理器
yarn docs:dev
pnpm docs:dev
```

启动后访问：http://localhost:5173

开发服务器支持热更新，修改文件后会自动刷新页面。

## 📁 项目结构

```
project.anishark.web/
├── docs/                          # 文档根目录
│   ├── .vitepress/                # VitePress 配置
│   │   ├── config.mts             # 站点配置文件
│   │   ├── cache/                 # 构建缓存（自动生成）
│   │   └── theme/                 # 自定义主题
│   │       ├── index.js           # 主题入口
│   │       ├── styles/            # 主题样式
│   │       ├── CustomFooter.vue   # 自定义页脚
│   │       └── components/        # 自定义组件
│   │           └── HistoricalStats.vue  # 历史统计组件
│   │
│   ├── guide/                     # 使用文档
│   │   ├── index.md
│   │   ├── getting-started.md
│   │   ├── introduction.md
│   │   ├── contributing.md
│   │   ├── maintenance.md
│   │   └── usage.md
│   │
│   ├── blog/                      # 博客文章
│   │   ├── index.md               # 博客首页
│   │   ├── 2025/                  # 2025年文章
│   │   │   └── year-review-2025.md
│   │   └── 2026/                  # 2026年文章
│   │       ├── 01-2026-q1-anime.md
│   │       └── 03-stats-feature.md
│   │
│   ├── legal/                     # 法律信息
│   │   └── index.md               # 链接到外部法律文档
│   │
│   ├── index.md                   # 网站首页
│   ├── stats.md                   # 数据统计页面
│   ├── research.md                # 研究页面
│   ├── products.md                # 产品页面
│   ├── join.md                    # 加入我们页面
│   └── legal.md                   # 法律信息页面
│
├── package.json                   # 项目配置和脚本
├── package-lock.json              # 依赖锁定文件
└── README.md                      # 本文件
```

## 💻 开发指南

### 可用脚本

```bash
# 开发
npm run docs:dev          # 启动开发服务器

# 构建
npm run docs:build        # 构建生产版本

# 预览
npm run docs:preview      # 预览构建结果
```

### 配置文件

主要配置文件：`docs/.vitepress/config.mts`

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'aniShark Foundation',
  description: 'aniShark基金会 - Building the Foundation of Animation Data',
  lang: 'zh-CN',

  themeConfig: {
    logo: '/anishark.svg',
    nav: [...],           // 导航栏配置
    sidebar: [...]        // 侧边栏配置
  }
})
```

### 自定义主题

自定义主题位于 `docs/.vitepress/theme/`：

- **index.js** - 主题入口，扩展默认主题
- **CustomFooter.vue** - 自定义页脚组件
- **components/** - 自定义 Vue 组件

## ✍️ 添加文章

### 1. 添加博客文章

博客文章按年份组织在 `docs/blog/` 目录下：

#### 步骤 1：创建文章文件

```bash
# 在对应年份目录下创建新文章
# 例如：添加 2026 年的新文章
cd docs/blog/2026
npm run dev  # 确保在开发模式下
```

创建新文件：`docs/blog/2026/04-new-feature.md`

#### 步骤 2：编写文章内容

```markdown
---
title: 新功能发布
description: aniShark 项目新功能上线
date: 2026-04-01
---

# 新功能发布

我们很高兴地宣布...

## 功能亮点

- 🎉 功能1
- 🚀 功能2
- 💡 功能3

## 使用方法

详见[使用文档](../guide/usage.md)
```

#### 步骤 3：更新博客索引

编辑 `docs/blog/index.md`，添加新文章链接：

```markdown
### 2026年

#### [新功能发布](./2026/04-new-feature)
*2026年4月1日*

功能描述...

#### [数据统计功能上线](./2026/03-stats-feature)
*2026年3月17日*
...
```

### 2. 添加文档页面

#### 添加新的文档分类

在 `docs/` 下创建新目录和文件：

```bash
# 示例：添加 API 文档
mkdir -p docs/api
touch docs/api/index.md
touch docs/api/overview.md
touch docs/api/authentication.md
```

#### 更新配置文件

在 `docs/.vitepress/config.mts` 中添加侧边栏配置：

```typescript
sidebar: [
  // ... 现有配置

  {
    text: 'API 文档',
    items: [
      { text: 'API 概览', link: '/api/' },
      { text: 'API 认证', link: '/api/authentication' }
    ]
  }
]
```

### 3. 添加单页面

创建独立的页面文件：

```bash
# 创建关于页面
touch docs/about.md
```

在导航栏中添加链接：

```typescript
nav: [
  { text: '首页', link: '/' },
  { text: '关于', link: '/about' },
  // ...
]
```

### 文章编写规范

#### Front Matter（文章元数据）

```markdown
---
title: 页面标题
description: 页面描述（用于 SEO）
date: 2026-04-01  # 可选，用于博客文章
---
```

#### Markdown 语法增强

VitePress 支持：

- **标准 Markdown** - 标题、列表、引用、代码块等
- **Vue 组件** - 可以在 Markdown 中直接使用 Vue 组件
- **自定义容器** - 使用 `:::info`、`:::warning` 等

示例：

```markdown
::: info 提示
这是一条提示信息
:::

::: warning 警告
这是一条警告信息
:::

::: danger 危险
这是一条危险警告
:::
```

## 🔨 构建部署

### 本地构建

```bash
# 构建生产版本
npm run docs:build

# 构建产物位于：docs/.vitepress/dist/
```

### 预览构建结果

```bash
# 预览构建后的站点
npm run docs:preview

# 访问：http://localhost:4173
```

### 部署到静态托管服务

#### 部署到 Netlify

1. **构建设置**：
   - Build command: `npm run docs:build`
   - Publish directory: `docs/.vitepress/dist`

2. **环境变量**（可选）：
   - `NODE_VERSION`: 18

#### 部署到 Vercel

1. **构建设置**：
   - Build command: `npm run docs:build`
   - Output directory: `docs/.vitepress/dist`

#### 部署到 GitHub Pages

```bash
# 构建
npm run docs:build

# 使用 gh-pages 部署
npm install -g gh-pages
gh-pages -d docs/.vitepress/dist
```

或在 `.github/workflows/deploy.yml` 中配置 GitHub Actions：

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run docs:build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs/.vitepress/dist
```

## 🔧 常见问题

### Q: 如何修改网站标题和描述？

A: 编辑 `docs/.vitepress/config.mts` 文件：

```typescript
export default defineConfig({
  title: '你的网站标题',
  description: '你的网站描述'
})
```

### Q: 如何修改主题颜色？

A: 在 `docs/.vitepress/theme/styles/vars.css` 中修改 CSS 变量：

```css
:root {
  --vp-c-brand-1: #your-color;
  --vp-c-brand-2: #your-color;
}
```

### Q: 如何添加自定义组件？

A: 在 `docs/.vitepress/theme/components/` 下创建 Vue 组件，然后在页面中使用：

```markdown
<script setup>
import MyComponent from '../.vitepress/theme/components/MyComponent.vue'
</script>

<MyComponent />
```

### Q: 如何修改导航栏和侧边栏？

A: 编辑 `docs/.vitepress/config.mts` 的 `themeConfig.nav` 和 `themeConfig.sidebar` 配置。

### Q: 开发服务器启动失败？

A: 尝试以下步骤：

1. 清理缓存并重新安装依赖：
   ```bash
   rm -rf node_modules docs/.vitepress/cache
   npm install
   ```

2. 确保端口 5173 未被占用，或指定其他端口：
   ```bash
   npm run docs:dev -- --port 3000
   ```

3. 检查 Node.js 版本是否符合要求（>= 18.0）

### Q: 构建后样式丢失？

A: 确保在 `docs/.vitepress/theme/index.js` 中正确导入了样式：

```javascript
import './styles/vars.css'
```

## 📚 相关资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue 3 文档](https://vuejs.org/)
- [Markdown 语法指南](https://www.markdownguide.org/)

## 📝 许可证

MIT License

---

**最后更新**: 2026年3月17日
