
import {CSSProperties} from 'react'

export const btnsOption = {
  drink: {
    type: "native",
    text: "🥤 喝水时间",
    protocol: "anywhere",
    path: "open?sid=9456"
  },
  heart: {
    type: "native",
    text: "🩺 心脏研究中心",
    protocol: "anywhere",
    path: "open?sid=1894"
  },
  plan: {
    type: "native",
    text: "✍️ 计划",
    protocol: "ticktick"
  },
  news: {
    path: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg5NTU1NzY0MA==&action=getalbum&album_id=2180346606976401414&scene=173&from_msgid=2247484582&from_itemidx=1&count=3&nolastread=1#wechat_redirect",
    text: "📰 微语简报",
  },
  fish: {
    path: "https://mo.fish/",
    text: "🐟 鱼塘"
  },
  // @TODO
  zy: {
    type: "native",
    text:   '☯️ 中医之美',
    protocol: "bilibili",
    path: 'main/favorite'
  },
  zjdc: {
    type: "native",
    text: "《针灸大成》",
    protocol: "bilibili",
    path: "video/BV1tY41147GQ"
  },
  hdnj: {
    type: "native",
    text: "《皇帝内经》",
    protocol: "bilibili",
    path: "video/BV1NM4y1M7yK"
  },
  // @TODO
  history: {
    type: "native",
    text:   '⌛ 历史之美',
    protocol: "bilibili",
    path: 'main/favorite'
  },
  szbf: {
    type: "native",
    text: "《孙子兵法》",
    protocol: "bilibili",
    path: "video/BV1HQ4y1a7c9"
  },
  bxzgs: {
    type: "native",
    text: "《爆笑中国史》",
    protocol: "bilibili",
    path: "video/BV1A541197hq"
  },
  // @TODO
  pm: {
    type: "native",
    text:   '🏞️ 物理与数学之美',
    protocol: "bilibili",
    path: 'main/favorite'
  },
  fmjz: {
    type: "native",
    text: "《费曼物理讲座》",
    protocol: "bilibili",
    path: "video/BV1iy4y1b7VJ"
  },
  xdl: {
    type: "native",
    text: "《相对论篇》",
    protocol: "bilibili",
    path: "video/BV1zb4y1W7bj"
  },
  hkjcbh: {
    path: "http://mp.weixin.qq.com/mp/homepage?__biz=MzUzMjQ1NDU3OQ==&hid=2&sn=74d9d2fa11ecda88861d64a86e081b67&scene=18#wechat_redirect",
    text: "🧱 行楷基础笔画"
  },
  wxds: {
    type: "native",
    text: "📚 微信读书",
    protocol: "anywhere",
    path: "open?sid=5565"
  },
  whyRead: {
    type: "native",
    text: "读书何为",
    protocol: "bilibili",
    path: "video/BV1BK411L7DJ"
  },
  jztz: {
    type: "native",
    text: "🐢 价投",
    protocol: "bilibili",
    path: "search/价值投资"
  },
  charles: {
    type: "native",
    text: "🌟 查理·芒格",
    protocol: "bilibili",
    path: "search/查理芒格"
  },
  bilibili: {
    type: "native",
    text: "✨ B站",
    protocol: "bilibili",
    path: "home"
  },
  tt: {
    type: "native",
    text: "😂 抖音",
    protocol: "snssdk1128"
  },
  mp: {
    type: "native",
    text: "📽️ 毛骗",
    protocol: "bilibili",
    path: "search/毛骗"
  },
  txwd: {
    type: "native",
    text: "🎂 腾讯文档",
    protocol: "anywhere",
    path: "open?sid=3584"
  },
  yq: {
    type: "native",
    text: "🖼️ 语雀",
    protocol: "anywhere",
    path: "open?sid=8475"
  },
  jj: {
    type: "native",
    text: "📘 掘金",
    protocol: "anywhere",
    path: "open?sid=5091"
  },
  leedcode: {
    type: "native",
    text: "🌱 leedcoe",
    protocol: "anywhere",
    path: "open?sid=9152"
  },
  bdwp: {
    type: "native",
    text: "💪 百度网盘",
    protocol: "anywhere",
    path: "open?sid=7959"
  },
  wyth: {
    type: "native",
    text: "🎶 五音调和",
    protocol: "bilibili",
    path: "video/BV1me411x7Er"
  },
  fund: {
    type: "native",
    text: "💰 基金",
    protocol: "alipays",
    path: "platformapi/startapp?appId=20000793"
  },
  pazq: {
    type: 'native',
    text: "💳 平安证券",
    protocol: "anelicaiapp"
  },
  jz: {
    type: "native",
    text: "🤸 减脂",
    protocol: "snssdk1128",
    path: "aweme/detail/7031529192739081475"
  },
  fj: {
    type: "native",
    text: "🎽 腹肌",
    protocol: "snssdk1128",
    path: "aweme/detail/7070399297212140839"
  },
  ddqd: {
    type: "native",
    text: "☑️ 清单",
    protocol: "ticktick"
  },
  sk: {
    type: "native",
    text: "📝 思考",
    protocol: "anywhere",
    path: "open?sid=7205"
  }, 
  shh: {
    type: "native",
    text: "🧐 释慧海",
    protocol: "snssdk1128",
    path: "aweme/detail/7103101640156187940"
  },
  td: {
    type: "native",
    text: "🗝 天道",
    protocol: "bilibili",
    path: "video/BV1SR4y1F7ef"
  },
   mx: {
    type: "native",
    text: "🧘‍♂️ 冥想",
    protocol: "bilibili",
    path: "search/冥想"
  },
   zsbk: {
    type: "native",
    text: "📚 知识百科",
    protocol: "bilibili",
    path: "video/BV1XA411w7ug"
  },
  
}

export const tools = [
  {
    type: "native",
    text: "H❤F",
    protocol: "anywhere",
    path: "open?sid=3584"
  },
  {
    type: "native",
    text: "✍️ 滴答清单",
    protocol: "ticktick"
  },
  {
    type: "native",
    text: "⚖️ B站收藏",
    protocol: "bilibili",
    path: "main/favorite"
  },
  {
    type: "native",
    text: "🤏 脉脉",
    protocol: "anywhere",
    path: "open?sid=0900"
  },
  {
    type: "native",
    text: "🎼  QQ音乐",
    protocol: "qqmusic",
    path: "ui/myTab"
  },
  {
    type: "native",
    text: "🥤 喝水时间",
    protocol: "anywhere",
    path: "open?sid=9456"
  },
  {
    type: "native",
    text: "❤️ heal",
    protocol: "anywhere",
    path: "open?sid=1894"
  },

  {
    type: "native",
    text: "📝 备忘录",
    protocol: "anywhere",
    path: "open?sid=7205"
  }, 
  {
    type: "native",
    text: "📱 应用管理",
    protocol: "anywhere",
    path: "open?sid=5667"
  },
  
];

export const commonImgStyle: CSSProperties = {
  width: '100%',
  objectFit: 'contain',
}
