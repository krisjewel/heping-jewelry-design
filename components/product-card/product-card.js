Component({
  properties: {
    item: {
      type: Object,
      value: {}
    },
    showCategory: {
      type: Boolean,
      value: false
    }
  },

  data: {
    imageFailed: false
  },

  observers: {
    'item'(newVal) {
      // 切换作品时重置图片错误状态
      if (newVal && newVal.id) {
        this.setData({ imageFailed: false })
      }
    }
  },

  methods: {
    onTap() {
      const item = this.properties.item
      if (item && item.id) {
        wx.navigateTo({
          url: `/pages/detail/detail?id=${item.id}`
        })
      }
    },

    onImageError() {
      this.setData({ imageFailed: true })
    }
  }
})
