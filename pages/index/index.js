//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // clickMe: function () {
  //   // this.setData({ msg: "ok ,you have clicked me" })
  //   wx.scanCode({
  //     success: (res) => {
  //       // console.log(res.result)
  //       wx.showModal({
  //         title: '扫描结果',
  //         content: res.result
  //       })
  //     }
  //   })
  // },
  // call:function(){
  //   wx.makePhoneCall({
  //     phoneNumber: '18428340153',
  //   })
  // }
  // wechat_sports: function () {
  //   wx.request({
  //     url: 'https://v.juhe.cn/toutiao/index',
  //     data: {
  //       type: 'top',
  //       key: '18e10ebfaf4c1f82a7878220fa34dfd7'
  //     },
  //     header: {
  //       'Content-Type': 'application/json'
  //     },
  //     success(res) {
  //       // const encryptedData = res.encryptedData
  //       wx.showModal({
  //         title: '返回数据',
  //         content: res
  //       })
  //     }
  //   })
  // }

})