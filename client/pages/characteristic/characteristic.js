const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    name:'',
    url1:'',
    url2:'',
    list: [{id:0,ps: '猪肉脯是猪肉经腌制、烘烤的片状肉制品。猪肉脯是一种食用方便、制作考究、美味可口、耐贮藏和便于运输的中式传统风味肉制品。猪肉脯色泽呈鲜艳的棕红色，具有口感丰富，咸中微甜，芳香浓郁，余味无穷。'},
      {
        id: 1, ps: '汕头牛肉丸，可分为牛肉丸、牛筋丸两种，牛肉丸肉质较为细嫩，口感嫩滑，牛筋丸是在牛肉里加进了一些嫩筋，口感方面就是增加了点嚼头。据说上好的牛肉丸扔在地上能蹦起老高，以前的牛肉丸都是手制的或许能作此表演，由于全由人工操作，所以成本比机制的要高汕头牛肉丸是潮汕地区著名的地方小吃，它以柔、润、鲜、爽而驰名。其制作技艺源自2000多年的官廷菜肴“捣珍”，这种制作技艺在潮汕地区流传已有数百年的历史。'},
      { id: 2, ps:'潮剧又名潮调、潮州戏、潮音戏、白字戏等，是用潮汕方言演唱的一个古老的传统地方戏曲剧种，以优美动听的唱腔音乐和独特的表演形式，融合成极富地方特色的戏曲而享誉海内外。潮剧在国内主要流行在广东东部潮汕地区、福建南部、台湾、香港、上海。'},
      {
        id: 3, ps: '潮绣，潮州刺绣（潮绣）与广州刺绣（广绣）总称粤绣，是中国四大名绣之一，发源并流行于今潮汕地区。潮绣始于唐代，形成风格于明、清，流传于国内及东南亚一带。自明清以来甚为鼎盛，尤其是苏州的苏绣、湖南的湘绣、广东的粤绣（包括广绣、潮州的潮绣）、四川的蜀绣等因为刺绣艺术水平较高，影响较大，因而被称为中国四大名绣。'},
      { id: 4, ps:'南澳岛是中国广东省唯一的海岛县，总面积113.8平方公里, 距高雄162海里，处于高雄、厦门、香港三大港口的中心点，地理位置独特，处于粤、闽、台三省交界海面，距西太平洋国际主航线7海里，素有“粤东屏障 粤闽咽喉”之称。'},
      { id: 5, ps:'汕头方特欢乐世界·蓝水星主题公园是粤东地区第一个以科幻为题材，集娱乐、科教、休闲于一体的参与型高科技主题公园。全园由银河广场、星际航班、西部传奇、恐龙危机、海螺湾、嘟噜嘟比农庄、儿童王国等主题区域组成，近百个游乐、景观项目，它突破传统旅游项目局限于观赏的不足，引入国内外高科技内容，为游客营造一个寓教于乐的游玩环境。'}
    ]

  },



  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var i_url1 = options.url1
    var i_url2 = options.url2
    this.setData({
      url1: i_url1,
      url2: i_url2,
      name:options.name
    })
    console.log(this.data.url1)

  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '更多'
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#fe6c6c'
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