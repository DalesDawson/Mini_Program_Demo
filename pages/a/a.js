var app = getApp();
Page
  ({
    data: {
      weatherDetails: [],
      cityName: '',
      todayWeather: ''
    },
    onLoad: function (options) {
      var that = this
      wx.getLocation({
        success: function (res) {
          console.log(res)
          wx.request({
            url: app.globalData.tenceAddressBase,
            data: {
              location: res.latitude + ',' + res.longitude,
              key: app.globalData.tenceAddressKey,
            },
            success: function (res) {
              console.log(res)
              if (res.statusCode==200) {
                that.data.cityName = res.data.result.address_component.city,
                console.log(that.data.cityname)
                that.getWeatherInfo()
              }
              else {
                console.log('获取失败');
              }
            }
          })
        },
      })
    },
    cityInput: function (e) {
      this.data.cityName = e.detail.value
    },
    getWeatherInfo: function (e) {
      console.log("城市名" + this.data.cityName);
      var that = this
      // 访问聚合数据的网络接口-头条新闻
      wx.request({
        url: app.globalData.juheWeatherBase,
        data: {
          cityname: this.data.cityName,
          key: app.globalData.juheWeatherKey,
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          if (res.data.error_code == 0) {
            that.setData({
              weatherDetails: res.data.result.future,
              todayWeather: res.data.result.today
            })

          } else {
            console.log('获取失败');
            wx.showToast({
              title: res.data.reason,
              icon: 'loading',
              duration: 2000,
              mask: true
            })
          }
          // console.log(res.data)
        }
      })
    }
  })