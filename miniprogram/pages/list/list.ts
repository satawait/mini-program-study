// pages/list/list.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: 'hello world',
    imgSrc: '/assets/imgs/微信截图_20220724232745.png',
    count: 0,
    inputValue: '123',
    dataList: [1, 2, 3, 4]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.login()
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
  btnHandler(e: WechatMiniprogram.TouchEvent) {
    type a = string | number
    const b: a = 44
    console.log(e, b)
  },
  countChange(e: WechatMiniprogram.TouchEvent) {
    this.setData({
      count: this.data.count + e.target.dataset.num
    })
  },
  inputHandler(e: WechatMiniprogram.Input) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  getInfo() {
    wx.request({
      url: 'http://localhost:4004/users/api',
      method: 'GET',
      data: {
        username: 'test'
      },
      success: res => {
        console.log(res)
      }
    })
  },
  postInfo() {
    wx.request({
      url: 'http://localhost:4004/users/api/upload',
      method: 'POST',
      data: {
        username: 'test',
        password: 'test'
      },
      success: res => {
        console.log(res)
      }
    })
  },
  login() {
    wx.request({
      url: 'http://localhost:4004/login/api',
      method: 'POST',
      data: {
        username: 'test',
        password: 'test'
      },
      success: res => {
        console.log(res)
      }
    })
  }
})