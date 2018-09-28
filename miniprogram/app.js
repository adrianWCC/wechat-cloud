//app.js
App({
  onLaunch: function () {
    wx.cloud && wx.cloud.init({traceUser: true})
    this.globalData = {}
  }
})
