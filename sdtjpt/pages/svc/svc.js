// pages/svc/svc.js
Page({
  data: {
    duration: 2000, // 滑动动画时长
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 3000 // 自动切换时间间隔
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://static.joyteam.net/php/weixTest.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "catid": "",
        "producerid": "5",
        "goodsname": "",
        "page": 1,
        "pageSize": 10
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          testList: res.data.list,
          //res代表success函数的事件对，data是固定的，list是服务器返回json数据中list

        })
      }
    })
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