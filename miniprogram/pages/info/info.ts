// pages/info/info.ts
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { userInfo } from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maxCount: 12,
    query: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: Record<string, any>) {
    this.storeBindings = createStoreBindings(this, {
      store: userInfo,
      fields: ['name', 'getUserName'],
      actions: ['updateUserName']
    })
    this.setData({
      query: options
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  goBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  changeMaxCount() {
    this.setData({
      maxCount: this.data.maxCount + 1
    })
  },
  getComInstance() {
    // wx.chooseMedia({
    //   mediaType: ['image']
    // }).then(res => console.log('res: ', res))
    const test = this.selectComponent('#test')
    test.changeMaxCount()
  },
  updateNewUserName() {
    this.updateUserName('new')
  }
})