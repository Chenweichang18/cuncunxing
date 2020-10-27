const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    information:[]
  },

  




  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var that = this;
    var i_openid = options.openid;
    console.log(i_openid)
    wx.request({
      url: 'http://zzy.free.idcfengye.com/SerachHumMessage/true?openid=' + i_openid,
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          information: res.data
        })
      }
    })
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '已审核'
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#3588ad'
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