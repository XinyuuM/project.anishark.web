<template>
  <div class="historical-stats">

    <!-- 标签趋势分析 -->
    <div class="chart-section">
      <h3>标签趋势分析</h3>
      <div class="chart-controls">
        <label>显示 Top </label>
        <select v-model.number="topTagsCount" @change="updateTagChart">
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="15">15</option>
          <option :value="20">20</option>
        </select>
        <label> 个标签</label>
      </div>
      <div ref="tagChartRef" class="chart-container"></div>
    </div>

    <!-- 动画产出量统计 -->
    <div class="chart-section">
      <h3>动画产出量统计 - 各季度动漫产出数量</h3>
      <div ref="animeCountChartRef" class="chart-container"></div>
    </div>

    <!-- 平台趋势分析 -->
    <div class="chart-section">
      <h3>平台趋势分析 - 各季度平台动漫数量变化</h3>
      <div ref="platformChartRef" class="chart-container"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'

const tagChartRef = ref(null)
const platformChartRef = ref(null)
const animeCountChartRef = ref(null)
const topTagsCount = ref(10)

let tagChart = null
let platformChart = null
let animeCountChart = null

// 平台名称标准化映射
const platformNameMap = {
  'bilibili': 'B站',
  '哔哩哔哩港澳台': 'B站港澳台',
  'bilibili港澳台': 'B站港澳台',
  '爱奇艺': '爱奇艺',
  'iqiyi': '爱奇艺',
  '腾讯': '腾讯视频',
  'tencent': '腾讯视频',
  '腾讯视频': '腾讯视频',
  '优酷': '优酷',
  'youku': '优酷',
  'Netflix': 'Netflix',
  'AcFun': 'AcFun',
  '芒果TV': '芒果TV',
  '台湾': '台湾',
  '港澳台': '港澳台'
}

// 标准化平台名称
function normalizePlatformName(name) {
  return platformNameMap[name] || name
}

// 加载数据
async function loadData() {
  try {
    const response = await fetch('/anime-stats.json')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('加载数据失败:', error)
    return null
  }
}

// 计算标签总出现次数
function calculateTagTotals(tagTrends) {
  const totals = {}
  Object.entries(tagTrends).forEach(([season, tags]) => {
    Object.entries(tags).forEach(([tag, count]) => {
      totals[tag] = (totals[tag] || 0) + count
    })
  })
  return totals
}

// 准备标签趋势数据
function prepareTagData(data, topN) {
  const { tagTrends, metadata } = data

  // 计算每个标签的总出现次数
  const tagTotals = calculateTagTotals(tagTrends)

  // 获取 Top N 标签
  const topTags = Object.entries(tagTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([tag]) => tag)

  // 准备时间序列
  const seasons = metadata.seasonList.slice().reverse()

  // 准备每个标签的数据（堆叠面积图）
  const series = topTags.map(tag => ({
    name: tag,
    type: 'line',
    stack: 'total',
    areaStyle: {},
    smooth: true,
    symbol: 'none',
    data: seasons.map(season => tagTrends[season.id]?.[tag] || 0)
  }))

  return {
    categories: seasons.map(s => s.name),
    series
  }
}

// 准备平台趋势数据
function preparePlatformData(data) {
  const { platformTrends, metadata } = data

  // 获取所有平台并标准化名称
  const allPlatforms = new Set()
  Object.values(platformTrends).forEach(platforms => {
    Object.keys(platforms).forEach(p => allPlatforms.add(normalizePlatformName(p)))
  })

  // 按总数量排序平台
  const platformTotals = {}
  Object.entries(platformTrends).forEach(([season, platforms]) => {
    Object.entries(platforms).forEach(([platform, count]) => {
      const normalizedName = normalizePlatformName(platform)
      platformTotals[normalizedName] = (platformTotals[normalizedName] || 0) + count
    })
  })

  const sortedPlatforms = Object.entries(platformTotals)
    .sort((a, b) => b[1] - a[1])
    .map(([name]) => name)

  // 准备时间序列
  const seasons = metadata.seasonList.slice().reverse()

  // 准备堆叠数据
  const series = sortedPlatforms.map(platformName => ({
    name: platformName,
    type: 'line',
    stack: 'total',
    areaStyle: {},
    smooth: true,
    symbol: 'none',
    data: seasons.map(season => {
      const seasonData = platformTrends[season.id] || {}
      let count = 0
      Object.entries(seasonData).forEach(([rawPlatform, cnt]) => {
        if (normalizePlatformName(rawPlatform) === platformName) {
          count += cnt
        }
      })
      return count
    })
  }))

  return {
    categories: seasons.map(s => s.name),
    series
  }
}

// 准备动画产出量数据
function prepareAnimeCountData(data) {
  const { animeCount, metadata } = data

  // 准备时间序列
  const seasons = metadata.seasonList.slice().reverse()

  // 准备数据
  const values = seasons.map(season => animeCount[season.id] || 0)

  return {
    categories: seasons.map(s => s.name),
    values
  }
}

// 初始化标签趋势图表
function initTagChart(data) {
  if (!tagChartRef.value) return

  tagChart = echarts.init(tagChartRef.value)
  updateTagChart()
}

// 更新标签趋势图表
function updateTagChart() {
  if (!tagChart) return

  loadData().then(data => {
    if (!data) return

    const chartData = prepareTagData(data, topTagsCount.value)

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: chartData.series.map(s => s.name),
        top: 10,
        type: 'scroll'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: chartData.categories,
        axisLabel: {
          interval: 0,
          rotate: 45,
          fontSize: 10
        }
      },
      yAxis: {
        type: 'value',
        name: '出现次数'
      },
      series: chartData.series
    }

    tagChart.setOption(option, { notMerge: true })
  })
}

// 初始化平台趋势图表
function initPlatformChart(data) {
  if (!platformChartRef.value) return

  platformChart = echarts.init(platformChartRef.value)

  const chartData = preparePlatformData(data)

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: chartData.series.map(s => s.name),
      top: 10,
      type: 'scroll'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: chartData.categories,
      axisLabel: {
        interval: 0,
        rotate: 45,
        fontSize: 10
      }
    },
    yAxis: {
      type: 'value',
      name: '动漫数量'
    },
    series: chartData.series
  }

  platformChart.setOption(option, { notMerge: true })
}

// 初始化动画产出量图表
function initAnimeCountChart(data) {
  if (!animeCountChartRef.value) return

  animeCountChart = echarts.init(animeCountChartRef.value)

  const chartData = prepareAnimeCountData(data)

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: chartData.categories,
      axisLabel: {
        interval: 0,
        rotate: 45,
        fontSize: 10
      }
    },
    yAxis: {
      type: 'value',
      name: '动漫数量'
    },
    series: [
      {
        name: '动漫产出量',
        type: 'bar',
        data: chartData.values,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#56cec6' },
              { offset: 1, color: '#3da8a0' }
            ]
          }
        },
        emphasis: {
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#7ce3dc' },
                { offset: 1, color: '#56cec6' }
              ]
            }
          }
        }
      }
    ]
  }

  animeCountChart.setOption(option, { notMerge: true })
}

// 窗口大小改变时重新调整图表大小
function handleResize() {
  tagChart?.resize()
  platformChart?.resize()
  animeCountChart?.resize()
}

onMounted(() => {
  loadData().then(data => {
    if (data) {
      initTagChart(data)
      initPlatformChart(data)
      initAnimeCountChart(data)
    }
  })

  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  tagChart?.dispose()
  platformChart?.dispose()
  animeCountChart?.dispose()
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.historical-stats {
  padding: 20px;
}

.historical-stats h2 {
  margin-bottom: 30px;
  text-align: center;
}

.chart-section {
  margin-bottom: 50px;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.chart-section h3 {
  margin-bottom: 20px;
  color: var(--vp-c-brand-1);
}

.chart-controls {
  margin-bottom: 20px;
  padding: 10px;
  background: var(--vp-c-bg);
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.chart-controls select {
  padding: 5px 10px;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.chart-controls select:hover {
  border-color: var(--vp-c-brand-2);
}

.chart-container {
  width: 100%;
  height: 500px;
}
</style>
