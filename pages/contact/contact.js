const app = getApp()

Page({
  data: {
    brandName: '',
    brandSlogan: '',
    contactPhone: '',
    contactAddress: '',
    businessHours: '',
    wechatId: ''
  },

  onLoad() {
    this.setData({
      brandName: app.globalData.brandName,
      brandSlogan: app.globalData.brandSlogan,
      contactPhone: app.globalData.contactPhone,
      contactAddress: app.globalData.contactAddress,
      businessHours: app.globalData.businessHours,
      wechatId: app.globalData.wechatId
    })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 })
    }
  },

  onShareAppMessage() {
    return {
      title: `${this.data.brandName} — 期待与您相遇`,
      path: '/pages/contact/contact'
    }
  },

  // 拨打电话
  onCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.contactPhone.replace(/-/g, '')
    })
  },

  // 复制微信号
  onCopyWechat() {
    wx.setClipboardData({
      data: this.data.wechatId,
      success() {
        wx.showToast({ title: '微信号已复制', icon: 'success' })
      }
    })
  },

  // 复制地址
  onCopyAddress() {
    wx.setClipboardData({
      data: this.data.contactAddress,
      success() {
        wx.showToast({ title: '地址已复制', icon: 'success' })
      }
    })
  },

  // 预约到店
  onAppointment() {
    wx.showModal({
      title: '预约到店',
      content: `欢迎预约到店体验！\n\n请拨打 ${this.data.contactPhone}\n或添加微信 ${this.data.wechatId}\n进行预约`,
      showCancel: true,
      cancelText: '添加微信',
      confirmText: '立即拨打',
      success: (res) => {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: this.data.contactPhone.replace(/-/g, '')
          })
        } else if (res.cancel) {
          wx.setClipboardData({
            data: this.data.wechatId,
            success() {
              wx.showToast({ title: '微信号已复制', icon: 'success' })
            }
          })
        }
      }
    })
  }
})
