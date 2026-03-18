/**
 * 自动生成博客侧边栏配置的脚本
 *
 * 使用方法：
 *   node generate-blog-sidebar.js
 *
 * 然后将输出复制到 docs/.vitepress/config.mts 中
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BLOG_DIR = path.join(__dirname, 'docs/blog')

// 递归扫描博客目录
function scanBlogDirectory(dir, baseDir = BLOG_DIR) {
  const items = []
  const files = fs.readdirSync(dir)

  // 先处理 index.md
  if (files.includes('index.md')) {
    const indexPath = path.join(dir, 'index.md')
    const content = fs.readFileSync(indexPath, 'utf-8')
    const titleMatch = content.match(/^title:\s*(.+)$/m)
    const title = titleMatch ? titleMatch[1].trim() : '首页'

    const relativePath = path.relative(baseDir, indexPath).replace(/\\/g, '/')
    const link = '/' + relativePath.replace(/index\.md$/, '')

    items.push({
      text: title,
      link: link,
      collapsed: false
    })
  }

  // 然后处理其他 .md 文件和子目录
  for (const file of files.sort()) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 递归处理子目录
      const subItems = scanBlogDirectory(fullPath, baseDir)
      if (subItems.length > 0) {
        items.push({
          text: file,
          items: subItems,
          collapsed: false
        })
      }
    } else if (file.endsWith('.md') && file !== 'index.md') {
      // 处理 markdown 文件
      const content = fs.readFileSync(fullPath, 'utf-8')
      const titleMatch = content.match(/^title:\s*(.+)$/m)
      const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '')

      const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/')
      const link = '/' + relativePath.replace(/\.md$/, '')

      items.push({
        text: title,
        link: link
      })
    }
  }

  return items
}

// 生成侧边栏配置
function generateSidebarConfig() {
  console.log('🔍 扫描博客目录...\n')

  if (!fs.existsSync(BLOG_DIR)) {
    console.error('❌ 博客目录不存在:', BLOG_DIR)
    return
  }

  const sidebarItems = scanBlogDirectory(BLOG_DIR)

  console.log('✅ 找到以下文件：\n')
  sidebarItems.forEach(item => {
    console.log(`  📄 ${item.text}`)
    if (item.items && item.items.length > 0) {
      item.items.forEach(sub => {
        console.log(`    └─ ${sub.text}`)
      })
    }
  })

  console.log('\n📋 生成的侧边栏配置：\n')
  console.log('/blog/:[')
  console.log(JSON.stringify(sidebarItems, null, 2).split('\n').map(line => '  ' + line).join('\n'))
  console.log(']')

  // 生成 TypeScript 代码
  console.log('\n💻 复制以下内容到 config.mts:\n')
  console.log("'/blog/': [")
  sidebarItems.forEach(item => {
    console.log(`  {`)
    console.log(`    text: '${item.text}',`)
    if (item.link) {
      console.log(`    link: '${item.link}',`)
    }
    if (item.items) {
      console.log(`    items: [`)
      item.items.forEach((sub, index) => {
        console.log(`      { text: '${sub.text}', link: '${sub.link}' }${index < item.items.length - 1 ? ',' : ''}`)
      })
      console.log(`    ],`)
    }
    console.log(`  },`)
  })
  console.log('],')
}

// 运行
generateSidebarConfig()
