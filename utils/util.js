/**
 * 通用工具函数
 */

const app = getApp()

/**
 * 获取完整图片路径
 * 自动拼接 imageBaseUrl
 * @param {string} path - 图片相对路径
 * @returns {string} 完整路径
 */
function getImageUrl(path) {
  if (!path) return ''
  // 已经是完整URL或云存储路径，直接返回
  if (path.startsWith('http') || path.startsWith('cloud://') || path.startsWith('data:')) {
    return path
  }
  // 已经是绝对路径
  if (path.startsWith('/')) return path
  // 拼接基础路径
  return app.globalData.imageBaseUrl + path
}

/**
 * 格式化价格
 */
function formatPrice(priceRange) {
  if (!priceRange) return '价格详询'
  return priceRange
}

/**
 * 截断文字
 */
function truncateText(str, len = 50) {
  if (!str || str.length <= len) return str || ''
  return str.slice(0, len) + '...'
}

/**
 * 拨打电话
 */
function makePhoneCall(phone) {
  if (!phone) {
    wx.showToast({ title: '暂无电话信息', icon: 'none' })
    return
  }
  wx.makePhoneCall({ phoneNumber: phone.replace(/-/g, '') })
}

/**
 * 复制文字到剪贴板
 */
function copyText(text, label = '内容') {
  wx.setClipboardData({
    data: text,
    success() { wx.showToast({ title: `${label}已复制`, icon: 'success' }) }
  })
}

/**
 * 预览图片（支持云存储fileID）
 */
function previewImages(urls, current) {
  if (!urls || urls.length === 0) return
  wx.previewImage({
    urls: urls,
    current: current || urls[0]
  })
}

/**
 * 上传图片到云存储
 * @param {Array<string>} filePaths - 本地临时文件路径
 * @param {string} cloudPath - 云存储目录前缀
 * @returns {Promise<Array<string>>} 云存储fileID数组
 */
async function uploadToCloud(filePaths, cloudPath = 'jewelry') {
  const tasks = filePaths.map((path, i) => {
    const ext = path.split('.').pop() || 'jpg'
    const timestamp = Date.now()
    return wx.cloud.uploadFile({
      cloudPath: `${cloudPath}/${timestamp}-${i + 1}.${ext}`,
      filePath: path
    })
  })
  const results = await Promise.all(tasks)
  return results.map(r => r.fileID)
}

/**
 * 从云存储获取临时链接
 * @param {Array<string>} fileIds - 云存储fileID数组
 * @returns {Promise<Array<string>>} 临时链接数组
 */
async function getTempUrls(fileIds) {
  if (!fileIds || fileIds.length === 0) return []
  const res = await wx.cloud.getTempFileURL({ fileList: fileIds })
  return res.fileList.map(f => f.tempFileURL || '')
}

module.exports = {
  getImageUrl,
  formatPrice,
  truncateText,
  makePhoneCall,
  copyText,
  previewImages,
  uploadToCloud,
  getTempUrls
}
