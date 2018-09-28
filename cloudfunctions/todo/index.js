// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({traceUser: true})
const db = cloud.database({env: 'develop-827033'})
const todos = db.collection('todos') //引用todos集合
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let page = event.page-1 || 0;
  let pageSize = event.pageSize || 20;
  return new Promise((resolve, reject) => {
    todos.skip(page).limit(pageSize).get().then(res => {  //查询集合数据
      resolve(res)
    })
  })
}