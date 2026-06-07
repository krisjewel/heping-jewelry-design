const { getJewelryById } = require('../../data/jewelry')
const app = getApp()

Page({
  data: {
    item: null,
    specKeys: [],
    loading: true
  },

  onLoad(options) {
    const { id } = options
    if (!id) {
      wx.showToast({ title: '作品不存在', icon: 'none' })
      wx.navigateBack()
      return
    }

    const item = getJewelryById(id)
    if (!item) {
      wx.showToast({ title: '作品不存在', icon: 'none' })
      wx.navigateBack()
      return
    }

    this.setData({
      item: item,
      specKeys: item.specifications ? Object.keys(item.specifications) : [],
      loading: false
    })

    wx.setNavigationBarTitle({
      title: item.name
    })
  },

  onShareAppMessage() {
    const item = this.data.item
    if (!item) return {}
    return {
      title: `${item.name} — ${item.mainMaterial} ${item.gemstone}`,
      path: `/pages/detail/detail?id=${item.id}`
    }
  },

  // 咨询详情
  onContact() {
    wx.showActionSheet({
      itemList: ['电话咨询', '在线咨询', '预约到店'],
      success(res) {
        switch (res.tapIndex) {
          case 0:
            wx.makePhoneCall({
              phoneNumber: app.globalData.contactPhone.replace(/-/g, '')
            })
            break
          case 1:
            wx.showModal({
              title: '在线咨询',
              content: `请添加我们的官方微信：\n${app.globalData.wechatId}`,
              showCancel: false,
              confirmText: '复制微信号',
              success(modalRes) {
                if (modalRes.confirm) {
                  wx.setClipboardData({
                    data: app.globalData.wechatId,
                    success() {
                      wx.showToast({ title: '微信号已复制', icon: 'success' })
                    }
                  })
                }
              }
            })
            break
          case 2:
            wx.makePhoneCall({
              phoneNumber: app.globalData.contactPhone.replace(/-/g, '')
            })
            break
        }
      }
    })
  },

  // 返回上一页
  onBack() {
    wx.navigateBack()
  }
})
