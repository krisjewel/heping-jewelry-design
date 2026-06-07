# 图片存放说明

## 目录结构
每个珠宝作品对应一个子文件夹，里面放该作品的图片：

```
images/jewelry/
├── ring-001/          # 星辰之恋
│   ├── 01.jpg         # 第1张图
│   ├── 02.jpg         # 第2张图
│   └── 03.jpg         # 第3张图
├── ring-002/          # 花语秘境
│   ├── 01.jpg
│   └── 02.jpg
├── necklace-001/      # 星河瀑布
│   ├── 01.jpg
│   └── 02.jpg
└── ...（共19个作品文件夹）
```

## 图片命名规则
- 每件作品的第一张图命名为 `01.jpg`，第二张 `02.jpg`，依此类推
- 支持的格式：`.jpg`、`.jpeg`、`.png`、`.webp`
- 建议尺寸：750×750px（正方形），文件不超过 2MB

## 三种使用方式

### 方式1：本地图片（开发测试用）
1. 将图片按上述目录结构放入对应文件夹
2. 确保 `app.js` 中 `imageBaseUrl` 为 `/images/jewelry/`
3. 图片路径自动拼接：`/images/jewelry/ring-001/01.jpg`

### 方式2：微信云存储（推荐）
1. 开通微信云开发
2. 在 `app.js` 中取消 `wx.cloud.init()` 注释，填入环境ID
3. 通过云开发控制台上传图片到 `jewelry/` 目录
4. 修改 `data/jewelry.js` 中的图片路径为云存储fileID

### 方式3：外部CDN
1. 将图片上传到你的CDN服务器
2. 修改 `data/jewelry.js` 中的 `IMAGE_BASE` 为CDN地址
