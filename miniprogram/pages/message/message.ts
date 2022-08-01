// pages/message/message.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    colorList: [] as string[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getColors()
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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      count: this.data.count + 1
    })
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getColors()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  getColors() {
    wx.showLoading({title: '数据加载中...'})
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'GET',
      success: res => {
        type Data = {
          [x: string]: string | string[]
        }
        this.setData({
          colorList: [...this.data.colorList, ...(res.data as Data).data]
        })
        wx.hideLoading()
      }
    })
  }
})