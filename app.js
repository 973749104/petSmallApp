//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null
  },
  /**
   * 返回上一页
   */
  back: function() {
    wx,wx.navigateBack({
      delta: 1,
    });
  }
})