/**
 * 获取应用实例
 */
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 用户信息
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息
    if(app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo
      })
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
  },
  /**
   * 页面跳转
   */
  jumpPage: function(e) {
    // 获取要跳转的页面
    const page = e.currentTarget.dataset.page;
    // 设置跳转路径
    let jumpUrl = '';
    // 获取userID
    let userId = '';
    // 判断跳转
    switch(page){
      case 'writeArticle':
        jumpUrl = '../writeArticle/writeArticle';
      break;
      case 'myArticle':
        jumpUrl = '../myArticle/myArticle';
      break;
      case 'myCollect':
        jumpUrl = '../myCollect/myCollect';
      break;
      case 'myAttention':
        jumpUrl = '../myAttention/myAttention';
      break;
      case 'editInfo':
        jumpUrl = '../editInfo/editInfo';
      break;
      default:
    }
    // 跳转
    wx.navigateTo({
      url: jumpUrl
    })
  },
  /**
   * 登陆
   */
  login: function(e) {
    const userInfo = e.detail.userInfo
    this.setData({
      userInfo
    })
    app.globalData.userInfo = userInfo
  },
  /**
   * 登出
   */
  loginOut: function() {
    this.setData({
      userInfo: null
    })
    app.globalData.userInfo = null
  },
  /**
   * 预留小彩蛋
   */
  easterEgg: function() {
    console.log('1111');
  }
})