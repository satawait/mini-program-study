// pages/shopList/shopList.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {} as Record<string, string>,
    shopList: [] as Record<string, any>[],
    page: 1,
    pageSize: 10,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options as Record<string, string>
    })
    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title
    })
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
      page: 1,
      shopList: [],
      total: 0
    })
    this.getShopList(() => {
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.page * this.data.pageSize >= this.data.total) {
      wx.showToast({
        title: '数据加载完毕！',
        icon: 'none'
      })
      return
    }
    this.setData({
      page: this.data.page + 1
    })
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  getShopList(cb?: () => void) {
    wx.showLoading({
      title: '数据加载中...'
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: res => {
        this.setData({
          shopList: [...this.data.shopList, ...(res.data as Record<string, any>[])],
          total: res.header['X-Total-Count'] - 0
        })
      },
      complete: () => {
        wx.hideLoading()
        wx.stopPullDownRefresh()
        cb && cb()
      }
    })
  }
})