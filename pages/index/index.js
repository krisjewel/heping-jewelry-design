const app = getApp()
const { getCategories, getFeaturedJewelry } = require('../../data/jewelry')

Page({
  data: {
    brandName: '',
    brandSlogan: '',
    categories: [],
    featuredList: [],
    loading: true
  },

  onLoad() {
    this.setData({
      brandName: app.globalData.brandName,
      brandSlogan: app.globalData.brandSlogan,
      categories: getCategories(),
      featuredList: getFeaturedJewelry(),
      loading: false
    })
  },

  onShow() {
    // 更新自定义 tabBar 选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },

  onPullDownRefresh() {
    this.setData({
      featuredList: getFeaturedJewelry()
    })
    wx.stopPullDownRefresh()
    wx.showToast({ title: '已刷新', icon: 'success', duration: 1000 })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.brandName} - 匠人匠心·精艺求精`,
      path: '/pages/index/index'
    }
  },

  // 点击精选作品
  onTapFeatured(e) {
    const item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/detail/detail?id=${item.id}`
    })
  },

  // 查看更多精选
  onMoreFeatured() {
    wx.switchTab({
      url: '/pages/category/category'
    })
  },

  // 点击搜索入口
  onTapSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  }
})
