// pages/map/map.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:null,
    longitude:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.map) {
      console.info(app.globalData.map.latitude)
      this.setData({
        latitude: app.globalData.map.latitude,
        longitude: app.globalData.map.longitude
      })
    }else{
      console.info("wx.getLocation")
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          this.setData({
            latitude: res.latitude, // 经度
            longitude: res.longitude // 纬度
          })
        }
      });
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})