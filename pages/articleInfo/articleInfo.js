// pages/articleInfo/articleInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文章ID
    articleId: '',
    articleInfo: {
      title: '文章标题',
      author: 'LHX',
      content: '<div style="color: red">你好啊</div>'
    },
    // 用户信息
    userInfo: {
      // 是否关注收藏
      isCollect: false,
      isAttection: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // // 获取文章ID
    // this.setData({
    //   articleId: options.articleId
    // })
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
   * 点击关注
   */
  clickAttection: function() {
    this.setData({
      userInfo: {
        isCollect: this.data.userInfo.isCollect,
        isAttection: !this.data.userInfo.isAttection
      }
    })
  },
  /**
   * 点击收藏
   */
  clickCollect: function() {
    this.setData({
      userInfo: {
        isCollect: !this.data.userInfo.isCollect,
        isAttection: this.data.userInfo.isAttection
      }
    })
  }
})