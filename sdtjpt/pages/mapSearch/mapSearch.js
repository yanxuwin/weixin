
var app = getApp();
var searchValue = ''
// pages/mapSearch/mapSearch.js
Page({
  data: {
    centent_Show: true,
    searchValue: '',
    img: '',
    nanshen_card: ''
  },

  onLoad: function () {
  },

  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });
    if (!value && this.data.productData.length == 0) {
      this.setData({
        centent_Show: false,
      });
    }
  },

  suo:function(e) {
    var id = e.currentTarget.dataset.id
    var program_id = app.program_id;
    var that = this;
    wx.request({
      url: 'https://static.joyteam.net/php/search_action.php',//这里填写后台给你的搜索接口
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        "subject": ""
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          siteList: res.data.list,
          //res代表success函数的事件对，data是固定的，list是服务器返回json数据中list
        })
      }
    });
  }

})