Component({
  properties: {
    images: {
      type: Array,
      value: []
    },
    placeholderColor: {
      type: String,
      value: ''
    }
  },

  data: {
    currentIndex: 0,
    failedIndex: -1,
    autoplay: false,
    interval: 3000,
    duration: 500
  },

  methods: {
    onSwiperChange(e) {
      this.setData({ currentIndex: e.detail.current })
    },

    onImageError(e) {
      this.setData({ failedIndex: e.currentTarget.dataset.index })
    },

    onTapImage(e) {
      const urls = this.properties.images
      wx.previewImage({
        urls: urls,
        current: urls[this.data.currentIndex] || urls[0]
      })
    }
  }
})
