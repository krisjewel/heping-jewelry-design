Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        icon: 'home'
      },
      {
        pagePath: '/pages/category/category',
        text: '分类',
        icon: 'category'
      },
      {
        pagePath: '/pages/contact/contact',
        text: '联系',
        icon: 'contact'
      }
    ]
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      const index = data.index
      wx.switchTab({ url })
      this.setData({ selected: index })
    }
  }
})
