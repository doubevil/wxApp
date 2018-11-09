var base64 = require("../images/base64");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems: [{
        name: 'standard is dealt for u.',
        value: '0',
        checked: true
      }, {
        name: 'standard is dealicient for u.',
        value: '1'
      },
      {
        name: 'standard is dealicient for u.',
        value: '1'
      }, {
        name: 'standard is dealicient for u.',
        value: '1'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.setData({
    //   icon20: base64.icon20,
    //   icon60: base64.icon60
    // });
    wx.setNavigationBarTitle({
      title: 'that.data.mername'//页面标题为路由参数
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * button自定义
   */
  onTapDayWeather() {
    wx.navigateTo({
      url: './cuExam?id="xxxx"',
    })

  }
})

