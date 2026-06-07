App({
  onLaunch() {
    // 初始化云开发（使用微信云存储时取消注释）
    // wx.cloud.init({
    //   env: 'your-env-id',  // 你的云环境ID
    //   traceUser: true
    // })

    const systemInfo = wx.getSystemInfoSync()
    this.globalData.systemInfo = systemInfo
    this.globalData.statusBarHeight = systemInfo.statusBarHeight
    this.globalData.navBarHeight = systemInfo.platform === 'android' ? 48 : 44
  },

  globalData: {
    systemInfo: null,
    statusBarHeight: 0,
    navBarHeight: 44,

    // ===== 品牌信息 =====
    brandName: '何平珠宝设计',
    brandSlogan: '匠人匠心 · 精艺求精',
    contactPhone: '138-0000-8888',
    contactAddress: '云南省昆明市五华区东风西路世代景星珠宝地下室一号',
    businessHours: '周一至周日 9:00 - 18:00',
    wechatId: 'JewelryDesign_Official',

    // ===== 图片配置 =====
    // 图片基础路径，支持:
    //   - 本地: '/images/jewelry/'
    //   - 云存储: 'cloud://你的环境ID.xxx/jewelry/'
    //   - CDN: 'https://cdn.example.com/jewelry/'
    imageBaseUrl: '/images/jewelry/',

    // 云环境ID（使用微信云存储时填写）
    cloudEnvId: ''
  }
})
