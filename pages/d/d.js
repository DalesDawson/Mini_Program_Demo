var app = getApp();
Page({
  data: {
    mvList: [],
    mvInfo: []
  },
  onLoad: function (options) {
    var that = this
    //获取mv列表
    wx.request({
      url: app.globalData.mvlistUrl,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            mvList: res.data.issueList[0].itemList
          })
          
        } else {
          console.log('获取失败');
        }
        console.log(res)
        console.log(that.data.mvList)
      }
    })
  }

})