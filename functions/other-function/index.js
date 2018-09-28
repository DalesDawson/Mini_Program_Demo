// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  return await cloud.callFunction({
    name: 'add',
    data: {
      a: 1,
      b: 2,
    }
  })
}