// pages/joke.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokes: [],
    joketemp:[],
    selsectState: [1, 0,],
    pagenum: 1,
    jokeurl: app.globalData.jisuJokeText,
    showView: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 访问聚合数据的网络接口-头条新闻
    wx.request({
      url: app.globalData.jisuJokeText,
      data: {
        pagenum: this.data.pagenum,
        appkey: app.globalData.jisuJokeKey,
        sort: 'addtime',
        pagesize: 10
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          console.log('success')
          that.setData({
            jokes: res.data.result.list
          })
        } else {
          console.log('获取失败');
        }
      }
    })
  },
  clickWord: function () {
    this.setData({
      pagenum:1,
      jokeurl: app.globalData.jisuJokeText,
      selsectState: [1, 0],
      showView: false
    })
    this.getJoke()
  },

  clickPic: function () {
    this.setData({
        pagenum:1,
      jokeurl: app.globalData.jisuJokePic,
      selsectState: [0, 1],
      showView: true
    })
    this.getJoke()
  },

  getJoke() {
    var that = this
    // 访问聚合数据的网络接口-头条新闻
    wx.request({
      url: this.data.jokeurl,
      data: {
        pagenum: this.data.pagenum,
        appkey: app.globalData.jisuJokeKey,
        sort: 'addtime',
        pagesize: 10
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)

        if (res.statusCode == 200) {
          // console.log('success')
          that.setData({
            joketemp: res.data.result.list
          })
          this.jokes.push(joketemp)
        } else {
          console.log('获取失败');
        }
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
    this.setData({
      pagenum:this.data.pagenum+1,
    })
    this.getJoke()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})