const { searchJewelry } = require('../../data/jewelry')

Page({
  data: {
    keyword: '',
    results: [],
    hasSearched: false,
    loading: false,
    placeholder: '搜索珠宝名称、材质、宝石…'
  },

  onLoad() {
    // 页面加载后自动聚焦到输入框
  },

  onShow() {
    // 如果已有搜索结果，保持显示
  },

  // 搜索输入
  onInput(e) {
    const keyword = e.detail.value.trim()
    this.setData({ keyword })

    if (!keyword) {
      this.setData({
        results: [],
        hasSearched: false
      })
      return
    }

    // 实时搜索（数据量小时无需防抖）
    this.doSearch(keyword)
  },

  // 执行搜索
  doSearch(keyword) {
    if (!keyword) return

    this.setData({ loading: true })

    const results = searchJewelry(keyword)

    this.setData({
      results: results,
      hasSearched: true,
      loading: false
    })
  },

  // 点击搜索按钮
  onSearch() {
    const keyword = this.data.keyword.trim()
    if (!keyword) {
      wx.showToast({ title: '请输入搜索关键词', icon: 'none' })
      return
    }
    this.doSearch(keyword)
  },

  // 清除搜索
  onClear() {
    this.setData({
      keyword: '',
      results: [],
      hasSearched: false
    })
  },

  // 点击热门标签
  onTapHotTag(e) {
    const tag = e.currentTarget.dataset.value
    this.setData({ keyword: tag })
    this.doSearch(tag)
  },

  // 点击作品进入详情
  onTapProduct(e) {
    const item = e.currentTarget.dataset.item
    if (item && item.id) {
      wx.navigateTo({
        url: `/pages/detail/detail?id=${item.id}`
      })
    }
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '何平珠宝设计 — 搜索你心仪的作品',
      path: '/pages/search/search'
    }
  }
})
