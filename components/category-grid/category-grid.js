const { getCategoryCount } = require('../../data/jewelry')

Component({
  properties: {
    categories: {
      type: Array,
      value: []
    },
    columns: {
      type: Number,
      value: 3
    },
    showCount: {
      type: Boolean,
      value: true
    },
    size: {
      type: String,
      value: 'normal' // 'small' | 'normal' | 'large'
    }
  },

  data: {
    categoryList: []
  },

  observers: {
    'categories'(cats) {
      if (cats && cats.length > 0) {
        const list = cats.map(cat => ({
          ...cat,
          count: getCategoryCount(cat.id)
        }))
        this.setData({ categoryList: list })
      }
    }
  },

  methods: {
    onTapCategory(e) {
      const cat = e.currentTarget.dataset.category
      if (cat && cat.id) {
        wx.navigateTo({
          url: `/pages/list/list?categoryId=${cat.id}&categoryName=${cat.name}`
        })
      }
    }
  }
})
