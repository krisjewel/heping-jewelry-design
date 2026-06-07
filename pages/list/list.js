const { getSubcategories, getJewelryBySubcategory } = require('../../data/jewelry')

Page({
  data: {
    categoryId: '',
    categoryName: '',
    subcategories: [],
    activeGemType: 'all',
    jewelryList: [],
    totalCount: 0,
    loading: true,
    sortType: 'default',
    showSubFilter: true // 定制作品不显示二级分类
  },

  onLoad(options) {
    const { categoryId, categoryName } = options

    // 定制作品不显示二级材质分类
    const isCustom = categoryId === 'custom'
    const subs = isCustom ? [] : getSubcategories()
    const list = getJewelryBySubcategory(categoryId, 'all')

    wx.setNavigationBarTitle({
      title: categoryName || '全部作品'
    })

    this.setData({
      categoryId: categoryId || '',
      categoryName: categoryName || '全部作品',
      subcategories: subs,
      showSubFilter: !isCustom,
      activeGemType: 'all',
      jewelryList: list,
      totalCount: list.length,
      loading: false
    })
  },

  onPullDownRefresh() {
    const list = getJewelryBySubcategory(this.data.categoryId, this.data.activeGemType)
    this.setData({
      jewelryList: this.sortList(list, this.data.sortType),
      totalCount: list.length
    })
    wx.stopPullDownRefresh()
  },

  onShareAppMessage() {
    return {
      title: `何平珠宝设计 — ${this.data.categoryName}`,
      path: `/pages/list/list?categoryId=${this.data.categoryId}&categoryName=${this.data.categoryName}`
    }
  },

  // 二级分类切换
  onGemTypeChange(e) {
    const gemType = e.currentTarget.dataset.type
    const list = getJewelryBySubcategory(this.data.categoryId, gemType)
    this.setData({
      activeGemType: gemType,
      jewelryList: this.sortList(list, this.data.sortType),
      totalCount: list.length
    })
  },

  // 排序切换
  onSortChange(e) {
    const type = e.currentTarget.dataset.type
    const list = getJewelryBySubcategory(this.data.categoryId, this.data.activeGemType)
    this.setData({
      sortType: type,
      jewelryList: this.sortList(list, type)
    })
  },

  sortList(list, type) {
    const sorted = [...list]
    switch (type) {
      case 'new':
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      case 'priceAsc':
        return sorted.sort((a, b) => {
          const priceA = parseInt(a.priceRange.replace(/[^0-9]/g, '')) || 0
          const priceB = parseInt(b.priceRange.replace(/[^0-9]/g, '')) || 0
          return priceA - priceB
        })
      case 'priceDesc':
        return sorted.sort((a, b) => {
          const priceA = parseInt(a.priceRange.replace(/[^0-9]/g, '')) || 0
          const priceB = parseInt(b.priceRange.replace(/[^0-9]/g, '')) || 0
          return priceB - priceA
        })
      default:
        return sorted
    }
  }
})
