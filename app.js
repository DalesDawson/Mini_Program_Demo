//app.js
App({
  onLaunch: function() {
      // 展示本地存储能力
      var logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)

      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          // wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
          //   url: 'pages/a/a'
          // })
        }
      })
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      })
    }
    // onLaunch: function () {
    //   console.log('App Launch')
    // },
    // onShow: function () {
    //   console.log('App Show')
    // },
    // onHide: function () {
    //   console.log('App Hide')
    // },
    // globalData: {
    //   hasLogin: false,
    //   openid: null
    // },
    // // lazy loading openid
    // getUserOpenId: function (callback) {
    //   var self = this

    //   if (self.globalData.openid) {
    //     callback(null, self.globalData.openid)
    //   } else {
    //     wx.login({
    //       success: function (data) {
    //         wx.request({
    //           url: openIdUrl,
    //           data: {
    //             code: data.code
    //           },
    //           success: function (res) {
    //             console.log('拉取openid成功', res)
    //             self.globalData.openid = res.data.openid
    //             callback(null, self.globalData.openid)
    //             wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
    //               url: "pages/a/a"
    //             })

    //           },
    //           fail: function (res) {
    //             console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
    //             callback(res)
    //           }
    //         })
    //       },
    //       fail: function (err) {
    //         console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
    //         callback(err)
    //       }
    //     })
    //   }
    // }
    ,
  globalData: {
    userInfo: null,
    doubanBase: "https://api.douban.com",
    heWeatherBase: "https://free-api.heweather.com",
    juhetoutiaoBase: "https://v.juhe.cn/toutiao/index",
    jisuJokeText: "https://api.jisuapi.com/xiaohua/text?",
    jisuJokePic: "https://api.jisuapi.com/xiaohua/pic?",
    juheWeatherBase: "https://v.juhe.cn/weather/index",
    tenceAddressBase: "https://apis.map.qq.com/ws/geocoder/v1/?",
    todayOnhistoryList:"https://v.juhe.cn/todayOnhistory/queryEvent.php",
    todayOnhistoryDetails: "https://v.juhe.cn/todayOnhistory/queryDetail.php",
    todayOnhistoryKey:"03b8cc54aace0437442c25de33d52af0",
    tencentMapKey: "4HYBZ-EB23D-SLC42-HQ5R3-LP3LQ-OZFU5",
    heWeatherKey: "008d3f89c19f4352bf806881ceee1f6c",
    juhetoutiaoKey: "18e10ebfaf4c1f82a7878220fa34dfd7",
    juheWeatherKey: "3dc3a81c4d7965f15051a08084c2f0a1",
    tenceAddressKey: "ISUBZ-Y2HH6-UJUSJ-MZOS4-FJWF6-YTB3F",
    jisuJokeKey: "cd33717cff4afd1e",
    userInfo: null,
    topListId: '',
    songData: null,

    //首页精选
    mvlistUrl: "https://baobab.kaiyanapp.com/api/v2/feed?",

    //相关视频
    mvinfoUrl: "https://baobab.kaiyanapp.com/api/v4/video/related?",

    /*"id":0,
    "name":"周排行"*/
    "weekUrl": "https://baobab.kaiyanapp.com/api/v4/rankList/videos?strategy=weekly",

    /*"id":1,
    "name":"月排行",*/
    "monthUrl": "https://baobab.kaiyanapp.com/api/v4/rankList/videos?strategy=monthly",

    /*"id":2,
    "name":"总排行",*/
    "allUrl": "https://baobab.kaiyanapp.com/api/v4/rankList/videos?strategy=historical"
  }
})