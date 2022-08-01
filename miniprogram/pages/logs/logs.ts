// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'
Page({
  data: {
    logs: [],
    swiperList: [] as object[],
    gridList: [] as object[]
  },
  onLoad() {
    this.getSwiperList()
    this.getGridList()
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      }),
    })
  },
  getSwiperList() {
    wx.request({
      url: 'https://www.escook.cn/slides',
      method: 'GET',
      success: res => {
        this.setData({
          swiperList: (res.data as object[])
        })
      }
    })
  },
  getGridList() {
    wx.request({
      url: 'https://www.escook.cn/categories',
      method: 'GET',
      success: res => {
        this.setData({
          gridList: (res.data as object[])
        })
      }
    })
  }
})
