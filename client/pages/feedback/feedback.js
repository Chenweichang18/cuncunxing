const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {

  },
  smtiaozhuan:function(){
    wx.navigateTo({
      url: '../feedback-real/feedback-real',
    })
  },
  nmtiaozhuan: function(){
    wx.navigateTo({
      url: '../feedback-anonymous/feedback-anonymous',
    })
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
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '反馈'
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#b64dcd'
    })
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