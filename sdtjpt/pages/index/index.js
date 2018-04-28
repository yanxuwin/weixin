//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function () {

  //  this.getLocation();  
    
  },

  //跳转到服务机构
  toorg: function () {
    wx.navigateTo({
      url: '../org/org'
    })
  },

  //跳转到技术服务
  tosvc: function () {
    wx.switchTab({
      url: '../svc/svc'
    })
  },

  //跳转到检验检测
  totest: function () {
    wx.navigateTo({
      url: '../test/test'
    })
  },

  //跳转到仪器设备
  toeqp: function () {
    wx.navigateTo({
      url: '../eqp/eqp'
    })
  },

  //跳转到订单管理
  toord: function () {
    wx.navigateTo({
      url: '../ord/ord'
    })
  },

  //跳转到资源地图
  tomap: function () {
    wx.navigateTo({
      url: '../map/map'
    })
  },

  //跳转到设置
  toset: function () {
    wx.navigateTo({
      url: '../set/set'
    })
  },

  //跳转到搜索页
  tosrch: function () {
    wx.navigateTo({
      url: '../indexSearch/indexSearch'
    })
  },

  getLocation: function () {
    var page = this
    wx.getLocation({
      type: 'wgs84',   //<span class="comment" style="margin:0px;padding:0px;border:none;">默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标</span><span style="margin:0px;padding:0px;border:none;"> </span>  
      success: function (res) {
        // success    
        var longitude = res.longitude
        var latitude = res.latitude
        page.loadCity(longitude, latitude)
      }
    })
  },
  loadCity: function (longitude, latitude) {
    var page = this
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=XbwCGHh34ZcFAGOMzIayFzIdMnI87vmL&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success    
        console.log(res);
        var city = res.data.result.addressComponent.city;
        page.setData({ currentCity: city });
      },
      fail: function () {
        page.setData({ currentCity: "定位" });
      },

    })
  }  

})
