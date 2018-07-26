var app = getApp();
Page({
  data: {
    navbar: ['周排行', '月排行', '总排行'],
    weekList:[],
    monthList:[],
    allList:[],
    currentTab: 0,
  },
  onLoad: function (options) {
    var that = this
    //获取mv列表
    wx.request({
      url: app.globalData.weekUrl,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            weekList: res.data.itemList
          })
          
        } else {
          console.log('获取失败');
        }
        console.log(res)
      }
    })
    wx.request({
      url: app.globalData.monthUrl,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            monthList: res.data.itemList
          })

        } else {
          console.log('获取失败');
        }
        console.log(res)
      }
    })
    wx.request({
      url: app.globalData.allUrl,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            allList: res.data.itemList
          })

        } else {
          console.log('获取失败');
        }
        console.log(res)
      }
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})