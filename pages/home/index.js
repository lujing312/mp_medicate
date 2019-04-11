import login from '../../common/login'
const app = getApp()
Page({
  data: {
    boxNumer: '',
    iPhoneX: app.globalData.iPhoneX,
    isLogin: app.globalData.isLogin,
    isShow: true
  },
  onShow: function() {
    if (app.globalData.backFromBindPhone) {
      app.globalData.backFromBindPhone = false
      this.handleLogin()
    }
  },
  handleLogin: function() {
    let self = this
    wx.showLoading({
      title: '登录中...',
    })
    login(app, () => {
      wx.hideLoading()
      if (app.globalData.phone === '') {
        wx.navigateTo({
          url: '/pages/mobile/stepOne/index'
        })
      } else {
        //同步到全局
        app.globalData.isLogin = true
        //修改显示
        self.setData({
          isLogin: app.globalData.isLogin,
          boxNumer: app.globalData.boxNumber,
          isShow: false
        })
      }
    })
  },
  handleScanCodeLogin: function(evt) {
    if (evt.detail.userInfo) { 
      app.globalData.userInfo = evt.detail.userInfo
      this.handleLogin()
    } else {
      this.setData({
        isLogin: false,
        userInfo: {}
      })
      app.globalData.isLogin = false
      app.globalData.userInfo = {}
      wx.showToast({
        title: '授权失败，部分功能不能用哦',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // 授权弹窗
  handleUserBox: function(evt) {
    if (evt.detail.userInfo) { 
      app.globalData.userInfo = evt.detail.userInfo
      this.handleLogin()
    } else {
      this.setData({
        isLogin: false,
        userInfo: {}
      })
      app.globalData.isLogin = false
      app.globalData.userInfo = {}
      wx.showToast({
        title: '授权失败，部分功能不能用哦',
        icon: 'none',
        duration: 2000
      })
    }
  },
  handleScanCode: function() {
    wx.scanCode({
      scanType: ['barCode', 'qrCode'],
      success: function(res) {
        if (res.result) {
          wx.navigateTo({
            url:
              '/pages/drug/index?from=scan&code=' +
              encodeURIComponent(res.result)
          })
        } else {
          wx.showToast({
            title: res.msg,
            icon: 'none'
          })
        }
      }
    })
  },
  handleOpenGuide: function(evt) {
    wx.navigateTo({
      url: '/pages/guide/index'
    })
  },
  handleOpenSelect: function() {
    wx.navigateTo({
      url: '/pages/select/index'
    })
  },
  handleOpenSearch: function() {
    wx.navigateTo({
      url: '/pages/search/index'
    })
  },
  onShareAppMessage: function() {
    return {
      title: '用药宝',
      imageUrl: 'https://static.genebox.cn/explore/share_medicine.png'
    }
  }
})
