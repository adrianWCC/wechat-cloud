//index.js
const app = getApp()

Page({
  data: {
    todos: []
  },

  onLoad: function() {
    wx.cloud.callFunction({
      name: 'todo',
      data: {
        page: 1,
        pageSize: 10
      }
    }).then(res => {
      console.log(res.result)
      this.setData({
        todos: res.result.data
      })
    })
  },

})
