/**
 * 珠宝设计数据
 */

// ==================== 图片基础路径 ====================
// 使用云存储时改为: cloud://你的环境ID.xxx/jewelry/
// 使用本地图片时改为: /images/jewelry/
const IMAGE_BASE = '/images/jewelry/'

/** 生成作品图片路径 */
function img(itemId, num) {
  return `${IMAGE_BASE}${itemId}/${String(num).padStart(2, '0')}.jpg`
}

// ==================== 分类数据 ====================
const categories = [
  { id: 'ring', name: '戒指', icon: '💍', desc: '匠心独运的指尖艺术',
    coverColor: 'linear-gradient(135deg, #C9A96E, #E8D5A3, #B8942E)' },
  { id: 'necklace', name: '项链', icon: '📿', desc: '颈间流转的优雅风华',
    coverColor: 'linear-gradient(135deg, #D4AF37, #F0D98D, #C49B2C)' },
  { id: 'earring', name: '耳饰', icon: '✨', desc: '耳边轻舞的璀璨光芒',
    coverColor: 'linear-gradient(135deg, #E0C87C, #F5E6CC, #C9A96E)' },
  { id: 'bracelet', name: '手链/手镯', icon: '⛓️', desc: '腕间灵动的诗意之美',
    coverColor: 'linear-gradient(135deg, #B8860B, #DABD6E, #8B6914)' },
  { id: 'brooch', name: '胸针', icon: '🦋', desc: '点缀气质的点睛之笔',
    coverColor: 'linear-gradient(135deg, #CDB580, #E8D9B5, #A68B3C)' },
  { id: 'pendant', name: '挂件', icon: '🔖', desc: '随身相伴的幸运守护',
    coverColor: 'linear-gradient(135deg, #C9A96E, #DCC89B, #B8942E)' },
  { id: 'set', name: '套装', icon: '👑', desc: '成套搭配的和谐之美',
    coverColor: 'linear-gradient(135deg, #D4AF37, #EBD88D, #CFA033)' },
  { id: 'custom', name: '定制作品', icon: '🎨', desc: '专属您的独一无二',
    coverColor: 'linear-gradient(135deg, #C9A96E, #DCC89B, #B8942E)' }
]

// ==================== 二级分类（宝石材质） ====================
const subcategories = [
  { id: 'jadeite', name: '翡翠', icon: '🟢' },
  { id: 'colored-gem', name: '彩宝', icon: '🌈' },
  { id: 'diamond', name: '钻石', icon: '💎' },
  { id: 'organic', name: '有机宝石', icon: '🕊️' }
]

// ==================== 珠宝作品数据 ====================
// images 数组填入图片路径:
//   - 本地: '/images/jewelry/ring-001/01.jpg'
//   - 云存储: 'cloud://env-id.xxx/jewelry/ring-001/01.jpg'
//   - CDN: 'https://cdn.example.com/jewelry/ring-001/01.jpg'
// placeholderColor 用于图片加载失败时的占位背景

const jewelryList = [
  // ===== 戒指 (4件) =====
  {
    id: 'ring-001',
    name: '戒指01',
    categoryId: 'ring',
    categoryName: '戒指',
    gemType: 'diamond',
    images: [img('ring-001', 1), img('ring-001', 2), img('ring-001', 3)],
    placeholderColor: 'linear-gradient(135deg, #2C2C2C 0%, #4A4A4A 30%, #C9A96E 70%, #F5E6CC 100%)',
    mainMaterial: '18K白金',
    gemstone: '钻石',
    weight: '3.2g',
    priceRange: '¥8,800 - ¥12,800',
    designConcept: '以浩瀚星空为灵感源泉，戒面采用六爪镶嵌工艺，主钻宛如夜空中最亮的星辰。戒臂配以微镶碎钻点缀，恰似环绕的星轨，在光影流转间绽放璀璨光芒。',
    specifications: { '主材': '18K白金', '主石': '0.5ct 圆形明亮式切割钻石', '副石': '0.1ct 碎钻 × 12颗', '工艺': '六爪镶嵌 + 微镶', '圈号': '可定制（6-20号）', '克重': '约3.2g' },
    featured: true, isNew: true
  },
  {
    id: 'ring-002',
    name: '戒指02',
    categoryId: 'ring',
    categoryName: '戒指',
    gemType: 'colored-gem',
    images: [img('ring-002', 1), img('ring-002', 2)],
    placeholderColor: 'linear-gradient(135deg, #3A2A1A 0%, #5A4A3A 40%, #D4AF37 80%, #F0D98D 100%)',
    mainMaterial: '18K玫瑰金',
    gemstone: '红宝石',
    weight: '4.1g',
    priceRange: '¥12,800 - ¥18,800',
    designConcept: '灵感源自春日花园中盛开的花朵。花瓣层叠的设计以玫瑰金勾勒，中央镶嵌鸽血红红宝石，四周环绕碎钻如晨露般晶莹。',
    specifications: { '主材': '18K玫瑰金', '主石': '0.8ct 椭圆形红宝石', '副石': '0.05ct 碎钻 × 16颗', '工艺': '爪镶 + 密钉镶', '圈号': '可定制（6-20号）', '克重': '约4.1g' },
    featured: true, isNew: false
  },
  {
    id: 'ring-003',
    name: '戒指03',
    categoryId: 'ring',
    categoryName: '戒指',
    gemType: 'diamond',
    images: [img('ring-003', 1), img('ring-003', 2)],
    placeholderColor: 'linear-gradient(135deg, #E8E0D5 0%, #F5F0E8 40%, #C9A96E 80%, #DCC89B 100%)',
    mainMaterial: 'Pt950铂金',
    gemstone: '钻石',
    weight: '2.8g',
    priceRange: '¥6,800 - ¥9,800',
    designConcept: '极简主义美学的完美诠释。流畅的线条搭配单颗精选钻石，以最纯粹的设计语言传递「少即是多」的设计哲学。',
    specifications: { '主材': 'Pt950铂金', '主石': '0.3ct 圆形钻石', '工艺': '四爪镶嵌', '圈号': '可定制（6-20号）', '克重': '约2.8g' },
    featured: false, isNew: true
  },
  {
    id: 'ring-004',
    name: '戒指04',
    categoryId: 'ring',
    categoryName: '戒指',
    gemType: 'colored-gem',
    images: [img('ring-004', 1), img('ring-004', 2)],
    placeholderColor: 'linear-gradient(135deg, #1A1A2E 0%, #2A2A4E 40%, #C9A96E 80%, #E8D5A3 100%)',
    mainMaterial: '18K黄金',
    gemstone: '蓝宝石',
    weight: '5.0g',
    priceRange: '¥18,800 - ¥26,800',
    designConcept: '以法国皇室的鸢尾花徽章为设计蓝本，华丽而不失典雅。戒面中央镶嵌一颗深邃的皇家蓝宝石，四周以黄金雕刻鸢尾花瓣纹样。',
    specifications: { '主材': '18K黄金', '主石': '1.2ct 枕形蓝宝石', '副石': '0.08ct 钻石 × 8颗', '工艺': '雕刻 + 爪镶', '圈号': '可定制（6-20号）', '克重': '约5.0g' },
    featured: true, isNew: false
  },

  // ===== 项链 (3件) =====
  {
    id: 'necklace-001',
    name: '项链01',
    categoryId: 'necklace',
    categoryName: '项链',
    gemType: 'diamond',
    images: [img('necklace-001', 1), img('necklace-001', 2)],
    placeholderColor: 'linear-gradient(135deg, #222233 0%, #3A3A5A 40%, #D4AF37 80%, #EBD88D 100%)',
    mainMaterial: '18K白金',
    gemstone: '钻石',
    weight: '8.5g',
    priceRange: '¥22,800 - ¥32,800',
    designConcept: '如银河倾泻般的流苏设计，每一条链节都精工细作。渐次排列的钻石由小而大，仿佛流星划过夜空时留下的璀璨痕迹。',
    specifications: { '主材': '18K白金', '主石': '钻石总计1.5ct', '副石': '渐变排列钻石 × 45颗', '工艺': '微镶 + 流苏链节', '链长': '42cm + 5cm调节链', '克重': '约8.5g' },
    featured: true, isNew: true
  },
  {
    id: 'necklace-002',
    name: '项链02',
    categoryId: 'necklace',
    categoryName: '项链',
    gemType: 'organic',
    images: [img('necklace-002', 1), img('necklace-002', 2)],
    placeholderColor: 'linear-gradient(135deg, #F0E8D8 0%, #FAF5EC 40%, #C9A96E 80%, #DECC9E 100%)',
    mainMaterial: '18K黄金',
    gemstone: '珍珠',
    weight: '6.8g',
    priceRange: '¥8,800 - ¥15,800',
    designConcept: '以东方美学中的「月」为灵感，黄金弯月造型包裹一颗直径10mm的Akoya珍珠，简洁而富有诗意。',
    specifications: { '主材': '18K黄金', '主石': '10mm Akoya海水珍珠', '副石': '0.05ct 钻石 × 3颗', '工艺': '包镶 + 微镶', '链长': '40cm + 5cm调节链', '克重': '约6.8g' },
    featured: true, isNew: false
  },
  {
    id: 'necklace-003',
    name: '项链03',
    categoryId: 'necklace',
    categoryName: '项链',
    gemType: 'diamond',
    images: [img('necklace-003', 1), img('necklace-003', 2)],
    placeholderColor: 'linear-gradient(135deg, #2A2A2A 0%, #4A4A4A 40%, #D4AF37 80%, #E0C87C 100%)',
    mainMaterial: '18K白金',
    gemstone: '钻石',
    weight: '5.2g',
    priceRange: '¥9,800 - ¥14,800',
    designConcept: '现代几何美学与珠宝工艺的结合。三角形与圆形的不对称设计，打破传统项链的对称法则。',
    specifications: { '主材': '18K白金', '主石': '0.4ct 三角形切割钻石', '副石': '0.03ct 钻石 × 24颗', '工艺': '轨道镶 + 密钉镶', '链长': '45cm', '克重': '约5.2g' },
    featured: false, isNew: true
  },

  // ===== 耳饰 (3件) =====
  {
    id: 'earring-001',
    name: '耳饰01',
    categoryId: 'earring',
    categoryName: '耳饰',
    gemType: 'colored-gem',
    images: [img('earring-001', 1), img('earring-001', 2)],
    placeholderColor: 'linear-gradient(135deg, #1A2A1A 0%, #2A4A3A 40%, #C9A96E 80%, #E8D5A3 100%)',
    mainMaterial: '18K白金',
    gemstone: '祖母绿',
    weight: '3.5g（单只）',
    priceRange: '¥15,800 - ¥22,800',
    designConcept: '灵感来自北极光的流动形态。长条流苏设计随风轻摆，祖母绿与钻石的交替镶嵌如同极光在夜空中的色彩变幻。',
    specifications: { '主材': '18K白金', '主石': '0.6ct × 2 祖母绿', '副石': '0.02ct 钻石 × 36颗', '工艺': '微镶 + 流苏', '耳饰类型': '耳坠/耳钩', '克重': '约3.5g（单只）' },
    featured: true, isNew: true
  },
  {
    id: 'earring-002',
    name: '耳饰02',
    categoryId: 'earring',
    categoryName: '耳饰',
    gemType: 'organic',
    images: [img('earring-002', 1), img('earring-002', 2)],
    placeholderColor: 'linear-gradient(135deg, #F5EEE0 0%, #FFF8F0 40%, #D4AF37 80%, #EBD88D 100%)',
    mainMaterial: '18K玫瑰金',
    gemstone: '珍珠',
    weight: '2.8g（单只）',
    priceRange: '¥6,800 - ¥9,800',
    designConcept: '简洁优雅的珍珠耳钉设计。精选8mm Akoya珍珠，配以玫瑰金包边和一颗小钻点缀，如同清晨花瓣上的露珠。',
    specifications: { '主材': '18K玫瑰金', '主石': '8mm Akoya珍珠 × 2', '副石': '0.03ct 钻石 × 2颗', '工艺': '包镶', '耳饰类型': '耳钉', '克重': '约2.8g（单只）' },
    featured: false, isNew: false
  },
  {
    id: 'earring-003',
    name: '耳饰03',
    categoryId: 'earring',
    categoryName: '耳饰',
    gemType: 'colored-gem',
    images: [img('earring-003', 1), img('earring-003', 2)],
    placeholderColor: 'linear-gradient(135deg, #3A1020 0%, #5A2030 40%, #D4AF37 80%, #E0C87C 100%)',
    mainMaterial: '18K黄金',
    gemstone: '红宝石',
    weight: '4.2g（单只）',
    priceRange: '¥12,800 - ¥18,800',
    designConcept: '热烈而优雅的红宝石耳环。黄金环形设计上镶嵌渐变色红宝石，从深红到浅粉的渐变过渡。',
    specifications: { '主材': '18K黄金', '主石': '红宝石总计1.0ct', '副石': '0.02ct 钻石 × 20颗', '工艺': '密钉镶 + 渐变排列', '耳饰类型': '耳环', '克重': '约4.2g（单只）' },
    featured: true, isNew: false
  },

  // ===== 手链/手镯 (3件) =====
  {
    id: 'bracelet-001',
    name: '手链01',
    categoryId: 'bracelet',
    categoryName: '手链/手镯',
    gemType: 'diamond',
    images: [img('bracelet-001', 1), img('bracelet-001', 2), img('bracelet-001', 3), img('bracelet-001', 4)],
    placeholderColor: 'linear-gradient(135deg, #2A2A3A 0%, #4A4A5A 40%, #C9A96E 80%, #E8D5A3 100%)',
    mainMaterial: '18K白金',
    gemstone: '钻石',
    weight: '7.5g',
    priceRange: '¥16,800 - ¥22,800',
    designConcept: '满钻镶嵌的网球手链设计，共镶有33颗精选钻石，总重2.0克拉。每一颗钻石都经精心挑选和排列。',
    specifications: { '主材': '18K白金', '主石': '钻石总计2.0ct', '副石': '33颗钻石', '工艺': '四爪镶嵌 + 链节连接', '链长': '17cm + 3cm调节链', '克重': '约7.5g' },
    featured: true, isNew: true
  },
  {
    id: 'bracelet-002',
    name: '手链02',
    categoryId: 'bracelet',
    categoryName: '手链/手镯',
    gemType: 'jadeite',
    images: [img('bracelet-002', 1), img('bracelet-002', 2)],
    placeholderColor: 'linear-gradient(135deg, #4A3A20 0%, #6A5A40 40%, #D4AF37 80%, #EBD88D 100%)',
    mainMaterial: '18K黄金',
    gemstone: '翡翠',
    weight: '12.8g',
    priceRange: '¥26,800 - ¥38,800',
    designConcept: '将中国传统纹样与现代珠宝工艺相融合。黄金手镯表面雕刻祥云纹样，镶嵌三颗冰种翡翠蛋面。',
    specifications: { '主材': '18K黄金', '主石': '冰种翡翠蛋面 × 3颗', '副石': '0.05ct 钻石 × 18颗', '工艺': '手工雕刻 + 包镶', '内径': '56mm（可定制）', '克重': '约12.8g' },
    featured: true, isNew: false
  },
  {
    id: 'bracelet-003',
    name: '手链03',
    categoryId: 'bracelet',
    categoryName: '手链/手镯',
    gemType: 'diamond',
    images: [img('bracelet-003', 1), img('bracelet-003', 2)],
    placeholderColor: 'linear-gradient(135deg, #F0E8D0 0%, #FAF8F0 40%, #B8860B 80%, #DABD6E 100%)',
    mainMaterial: '18K黄金',
    gemstone: '钻石',
    weight: '4.8g',
    priceRange: '¥6,800 - ¥9,800',
    designConcept: '极简的细链设计，每隔一段距离点缀一颗小钻，如夜空中闪烁的星星。可单独佩戴，也可叠戴搭配。',
    specifications: { '主材': '18K黄金', '主石': '钻石总计0.3ct', '副石': '7颗钻石', '工艺': '微镶', '链长': '16cm + 4cm调节链', '克重': '约4.8g' },
    featured: false, isNew: true
  },

  // ===== 胸针 (2件) =====
  {
    id: 'brooch-001',
    name: '胸针01',
    categoryId: 'brooch',
    categoryName: '胸针',
    gemType: 'colored-gem',
    images: [img('brooch-001', 1), img('brooch-001', 2)],
    placeholderColor: 'linear-gradient(135deg, #3A1A1A 0%, #5A3A3A 40%, #D4AF37 80%, #F0D98D 100%)',
    mainMaterial: '18K黄金',
    gemstone: '红宝石+钻石',
    weight: '9.2g',
    priceRange: '¥18,800 - ¥26,800',
    designConcept: '以凤凰为设计原型，黄金雕琢的凤凰展翅欲飞。凤尾以红宝石和钻石交替镶嵌，凤眼以一颗梨形红宝石点睛。',
    specifications: { '主材': '18K黄金', '主石': '0.3ct 梨形红宝石 + 钻石0.8ct', '副石': '红宝石 × 12颗 + 钻石 × 30颗', '工艺': '手工雕刻 + 密钉镶', '尺寸': '45mm × 35mm', '克重': '约9.2g' },
    featured: false, isNew: true
  },
  {
    id: 'brooch-002',
    name: '胸针02',
    categoryId: 'brooch',
    categoryName: '胸针',
    gemType: 'colored-gem',
    images: [img('brooch-002', 1), img('brooch-002', 2)],
    placeholderColor: 'linear-gradient(135deg, #F5EED8 0%, #FFF8EC 40%, #C9A96E 80%, #DECC9E 100%)',
    mainMaterial: '18K玫瑰金',
    gemstone: '粉蓝宝石',
    weight: '6.5g',
    priceRange: '¥9,800 - ¥15,800',
    designConcept: '以英式花园中的花朵与蝴蝶为灵感。玫瑰金勾勒出柔美的花瓣轮廓，粉色蓝宝石的渐变排列仿佛花朵在微风中摇曳。',
    specifications: { '主材': '18K玫瑰金', '主石': '粉蓝宝石总计1.2ct', '副石': '0.03ct 钻石 × 15颗', '工艺': '微镶 + 拉丝', '尺寸': '38mm × 30mm', '克重': '约6.5g' },
    featured: false, isNew: false
  },

  // ===== 挂件 (2件) =====
  {
    id: 'pendant-001',
    name: '挂件01',
    categoryId: 'pendant',
    categoryName: '挂件',
    gemType: 'jadeite',
    images: [img('pendant-001', 1), img('pendant-001', 2)],
    placeholderColor: 'linear-gradient(135deg, #2A4A2A 0%, #3A6A3A 40%, #D4AF37 80%, #EBD88D 100%)',
    mainMaterial: '18K黄金',
    gemstone: '翡翠',
    weight: '8.6g',
    priceRange: '¥16,800 - ¥26,800',
    designConcept: '以传统的平安扣为设计原型，精选冰种翡翠，黄金包边配以祥云纹样雕刻，寓意平安吉祥、福运相伴。',
    specifications: { '主材': '18K黄金', '主石': '冰种翡翠平安扣 Ø18mm', '副石': '0.03ct 钻石 × 8颗', '工艺': '包镶 + 手工雕刻', '尺寸': '22mm × 35mm（含扣头）', '克重': '约8.6g' },
    featured: true, isNew: true
  },
  {
    id: 'pendant-002',
    name: '挂件02',
    categoryId: 'pendant',
    categoryName: '挂件',
    gemType: 'diamond',
    images: [img('pendant-002', 1), img('pendant-002', 2)],
    placeholderColor: 'linear-gradient(135deg, #2A2A3A 0%, #4A4A5A 40%, #C9A96E 80%, #E8D5A3 100%)',
    mainMaterial: '18K白金',
    gemstone: '钻石',
    weight: '5.2g',
    priceRange: '¥9,800 - ¥15,800',
    designConcept: '以幸运四叶草为设计灵感，四片心形花瓣各镶嵌一颗精选钻石，中央以一颗圆钻点睛，简约而富有浪漫寓意。',
    specifications: { '主材': '18K白金', '主石': '0.5ct 圆形钻石', '副石': '0.05ct 钻石 × 4颗', '工艺': '四爪镶嵌 + 微镶', '尺寸': '15mm × 15mm（含扣头）', '克重': '约5.2g' },
    featured: false, isNew: true
  },

  // ===== 套装 (2件) =====
  {
    id: 'set-001',
    name: '套装01',
    categoryId: 'set',
    categoryName: '套装',
    gemType: 'diamond',
    images: [img('set-001', 1), img('set-001', 2), img('set-001', 3)],
    placeholderColor: 'linear-gradient(135deg, #2A2A2A 0%, #4A3A3A 40%, #D4AF37 80%, #F0D98D 100%)',
    mainMaterial: '18K白金+黄金',
    gemstone: '钻石套装',
    weight: '32.5g（全套）',
    priceRange: '¥68,800 - ¥98,800',
    designConcept: '专为人生重要时刻而设计的婚庆套装，包含项链、耳环、戒指、手链四件。以钻石为主石，华丽而不失典雅。',
    specifications: { '主材': '18K白金 + 18K黄金', '主石': '钻石总计5.0ct', '副石': '碎钻 × 200+ 颗', '工艺': '多种镶嵌工艺组合', '套装内容': '项链 + 耳环 + 戒指 + 手链', '克重': '约32.5g（全套）' },
    featured: true, isNew: true
  },
  {
    id: 'set-002',
    name: '套装02',
    categoryId: 'set',
    categoryName: '套装',
    gemType: 'colored-gem',
    images: [img('set-002', 1), img('set-002', 2)],
    placeholderColor: 'linear-gradient(135deg, #F0E0D0 0%, #FAF0E8 40%, #C9A96E 80%, #DCC89B 100%)',
    mainMaterial: '18K玫瑰金',
    gemstone: '摩根石+钻石',
    weight: '22.8g（全套）',
    priceRange: '¥28,800 - ¥38,800',
    designConcept: '以春日的花园为设计灵感，温柔的粉色摩根石搭配玫瑰金，散发出浪漫甜美的气息。',
    specifications: { '主材': '18K玫瑰金', '主石': '摩根石总计3.5ct', '副石': '钻石 × 60颗', '工艺': '爪镶 + 微镶', '套装内容': '项链 + 耳环', '克重': '约22.8g（全套）' },
    featured: false, isNew: false
  },

  // ===== 定制作品 (2件) =====
  {
    id: 'custom-001',
    name: '定制01',
    categoryId: 'custom',
    categoryName: '定制作品',
    images: [img('custom-001', 1), img('custom-001', 2)],
    placeholderColor: 'linear-gradient(135deg, #3A2A3A 0%, #5A4A5A 40%, #D4AF37 80%, #EBD88D 100%)',
    mainMaterial: '客户自选',
    gemstone: '客户自选',
    weight: '按设计而定',
    priceRange: '¥20,000 起',
    designConcept: '根据客户爱情故事量身定制的求婚戒指。将客户的爱情密码（相识日期、星座符号、名字首字母）融入设计中。',
    specifications: { '主材': '根据设计选定', '主石': '根据设计选定', '工艺': '手工定制', '定制周期': '30-45个工作日', '备注': '每件定制作品都是独一无二的艺术品' },
    featured: true, isNew: true
  },
  {
    id: 'custom-002',
    name: '定制02',
    categoryId: 'custom',
    categoryName: '定制作品',
    images: [img('custom-002', 1), img('custom-002', 2)],
    placeholderColor: 'linear-gradient(135deg, #2A3A2A 0%, #3A5A3A 40%, #C9A96E 80%, #E8D5A3 100%)',
    mainMaterial: 'Pt950铂金',
    gemstone: '客户提供',
    weight: '按设计而定',
    priceRange: '¥30,000 起',
    designConcept: '客户提供家族传承的老宝石，我们围绕这颗珍贵的蓝宝石重新设计，创作出一件兼具历史意义与现代美感的作品。',
    specifications: { '主材': 'Pt950铂金', '主石': '客户提供（传家蓝宝石）', '工艺': '手工定制', '定制周期': '45-60个工作日', '备注': '支持来石定制，让传家宝重焕新光' },
    featured: false, isNew: false
  }
]

// ==================== 工具函数 ====================
function getCategories() { return categories }
function getJewelryByCategory(categoryId) { return categoryId && categoryId !== 'all' ? jewelryList.filter(i => i.categoryId === categoryId) : jewelryList }
function getJewelryById(id) { return jewelryList.find(i => i.id === id) || null }
function getFeaturedJewelry() { return jewelryList.filter(i => i.featured) }
function getNewJewelry() { return jewelryList.filter(i => i.isNew) }
function getCategoryCount(categoryId) { return jewelryList.filter(i => i.categoryId === categoryId).length }
function getSubcategories() { return subcategories }
function getJewelryBySubcategory(categoryId, gemType) {
  let list = getJewelryByCategory(categoryId)
  if (gemType && gemType !== 'all') list = list.filter(i => i.gemType === gemType)
  return list
}
function searchJewelry(keyword) {
  const kw = keyword.toLowerCase()
  return jewelryList.filter(i => i.name.includes(kw) || i.categoryName.includes(kw) || i.mainMaterial.includes(kw) || i.gemstone.includes(kw) || i.designConcept.includes(kw))
}

module.exports = {
  categories, subcategories, jewelryList,
  getCategories, getSubcategories,
  getJewelryByCategory, getJewelryBySubcategory, getJewelryById,
  getFeaturedJewelry, getNewJewelry, getCategoryCount, searchJewelry
}
