const { getCategories, getCategoryCount } = require('../../data/jewelry')

Page({
  data: {
    categories: [],
    totalCount: 0,
    loading: true
  },

  onLoad() {
    const cats = getCategories()
    const enriched = cats.map(cat => ({
      ...cat,
      count: getCategoryCount(cat.id)
    }))
    const total = enriched.reduce((sum, cat) => sum + cat.count, 0)

    this.setData({
      categories: enriched,
      totalCount: total,
      loading: false
    })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
    }
  },

  onTapCategory(e) {
    const cat = e.currentTarget.dataset.category
    wx.navigateTo({
      url: `/pages/list/list?categoryId=${cat.id}&categoryName=${cat.name}`
    })
  },

  onShareAppMessage() {
    return {
      title: '何平珠宝设计 — 探索全部分类',
      path: '/pages/category/category'
    }
  }
})
