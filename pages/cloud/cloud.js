Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.cloud.init({
      env: 'for-cloud-dev-5c610c',
      traceUser: true
    });
  },
  /**
   * 增加数据
   */
  add: function(e) {
    const db = wx.cloud.database();
    db.collection('todos').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
        description: "learn cloud database",
        due: new Date("2018-09-01"),
        tags: [
          "cloud",
          "database"
        ],
        // 为待办事项添加一个地理位置（113°E，23°N）
        location: new db.Geo.Point(113, 23),
        done: false
      },
      success: function(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res);
        wx.showToast({
          title: '添加成功！',
        })
      }
    })
  },
  /**
   * 通过id查询数据
   */
  search: function(e) {
    const db = wx.cloud.database();
    //获取一个记录的数据
    // db.collection('todos').doc('W6nKzQ-6q4jZ8f1u').get({
    //   success: function(res) { // res.data 包含该记录的数据
    //     console.log(res.data)
    //   }
    // })

    //获取多个记录的数据:查询出 todos 集合中 _openid 等于 user-open-id 且 done 等于 false 的记录
    // db.collection('todos').where({
    //   _openid: 'oSNP40Hdg7tsY9qvaUGz2dirysMw',
    //   done: false
    // })
    //   .get({
    //     success: function (res) { // res.data 是包含以上定义的两条记录的数组
    //       console.log(res.data)
    //     }
    //   })

    //获取一个集合的数据
    // db.collection('todos').get({
    //   success: function(res) { // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
    //     console.log(res.data)
    //   }
    // })

    //查询指令  多个条件可以用.and .or
    /**
     * API 提供了以下查询指令：
     * 查询指令	说明
     *eq	等于
     *neq	不等于
     *lt	小于
     *lte	小于或等于
     *gt	大于
     *gte	大于或等于
     *in	字段值在给定数组中
     *nin	字段值不在给定数组中
     */
    const _ = db.command
    db.collection('todos').where({
        age: _.gte(20).and(_.lte(24))
      })
      .get({
        success: function(res) {
          console.log(res.data)
          wx.showToast({
            title: '查询成功！',
          })
        }
      })

  },
  /**更新数据
   * 
   * 更新数据主要有两个方法：
   *API	说明
   *update	局部更新一个或多个记录
   *set	替换更新一个记录
   *
   *更新指令	说明
   *set	设置字段为指定值
   *remove	删除字段
   *inc	原子自增字段值
   *mul	原子自乘字段值
   *push	如字段值为数组，往数组尾部增加指定值
   *pop	如字段值为数组，从数组尾部删除一个元素
   *shift	如字段值为数组，从数组头部删除一个元素
   *unshift	如字段值为数组，往数组头部增加指定值

   * 修改数据库中的数据
   */
  alter: function(e) {
    const db = wx.cloud.database();
    db.collection('todos').doc('5ba9f5bf301139d85475aa76').update({
      // data 传入需要局部更新的数据
      data: {
        isNonProfit: false
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})