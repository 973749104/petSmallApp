// pages/myCollect/myCollect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 设置手指触摸起点
    startX: '',
    // 列表模拟数据
    listData: [
      {
        "tid": 1,
        "title": "宠舍标题测试数据宠舍标题测试数据宠舍标题测试数据",
        "content": "模拟数据1",
        "imgUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524725451210&di=edc371945655dc98f08e4324b3901da6&imgtype=0&src=http%3A%2F%2Fimg3.qianzhan123.com%2Fnews%2F201512%2F17%2F20151217-d8dafc107e87d01f_980x660.jpg"
      },
      {
        "tid": 2,
        "content": "模拟数据2",
        "imgUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524725451210&di=edc371945655dc98f08e4324b3901da6&imgtype=0&src=http%3A%2F%2Fimg3.qianzhan123.com%2Fnews%2F201512%2F17%2F20151217-d8dafc107e87d01f_980x660.jpg"
      }
    ],
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
  delCollect: function(param) {
    const { tid, index } = param.detail
    const { listData } = this.data
    listData.splice(index, 1)
    this.setData({
      listData
    })
  },
  cancel: function() {
    console.log('cancel')
  },
  click: function(param) {
    const { tid } = param.detail
    console.log(tid)
  }
})