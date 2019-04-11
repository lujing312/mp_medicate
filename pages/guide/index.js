import { LINK } from '../../common/const'
const app = getApp()
Page({
    data: {
      healthInfo: {},
      url: ''
    },
    onLoad: function () {
      wx.showLoading({
        title: '加载中...',
      })
      this.healthInfo()
    },
    healthInfo () {
      let self = this
      app.server.healthInfo({
        boxNumber: app.globalData.boxNumber
      }).then( res=> {
        if (!res.status) {
          self.setData({
            healthInfo : res.data || {}
          })
          wx.hideLoading()
        } else {
          wx.hideLoading()
          wx.showToast({
            title: res.msg,
            icon: 'none'
          });
        }
      })
    },
    hanldeOpenTest: function () {
      wx.navigateTo({
        url: '/pages/test/index'
      })
    },
    handleOpenMedicines: function () {
      wx.navigateTo({
        url: '/pages/medicines/index?boxNumber='+app.globalData.boxNumber
      })
    },
    hanldeGuideUrl: function() {
      wx.navigateTo({
        url: '/pages/webView/index?url='+LINK.GUIDE_URL
      })
    },
    onReady: function () {
      this.Modal = this.selectComponent("#modal")
      this.View = this.selectComponent("#view")
    },
    handleUserDialog: function (e) {
      this.Modal.showModal(); // 控制modal显示
    },
    handleDrugDialog: function (e) {
      this.View.showModal(); // 控制modal显示
    },
    _cancelEvent: function () {
    }
  })