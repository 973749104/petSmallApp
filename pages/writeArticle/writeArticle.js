// pages/writeArticle/writeArticle.js
// 获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 标题数据
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
   * 上传图片
   */
  uploadImg: function() {
    // 选择图片
    wx.chooseImage({
      count: 9,
      success: function(res) {
        const imgPath = res.tempFilePaths;
        // 循环上传图片
        for(let i = 0; i < imgPath.length; i++){
          //上传
          wx.uploadFile({
            url: '',  //上传的服务器地址
            filePath: imgPath[i], //上传的文件
            name: 'file', //key名称
            formData: {   //附加数据
              
            },
            success: function(res) { //上传回调

            }
          })
        }
      },
    })
  },
  /**
   * 绑定title
   */
  bindTitleInput: function(e){
    this.setData({
      title: e.detail.value
    })
  },
  /**
   * 返回上一页
   */
  back: function() {
    app.back();
  }
})