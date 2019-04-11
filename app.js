//本地开发调试时引用mock文件
// import './mock/index';

//请求后端服务时
import server from './common/server'

//app.js
App({
  onLaunch: function() {
    let self = this
    //获取设备信息
    wx.getSystemInfo({
      success: function(res) {
        //iPhone X 宽高 375/812
        //iPhone XS Max 和 iPhone XR 宽高 414/896
        if (
          (res.screenHeight === 812 && res.screenWidth === 375) ||
          (res.screenHeight === 896 && res.screenWidth === 414)
        ) {
          self.globalData.iPhoneX = true
        }
        let system = (res.system && res.system.toLowerCase()) || ''
        if (system.indexOf('android') > -1) {
          self.globalData.OS = 'android'
        }
        if (system.indexOf('ios') > -1) {
          self.globalData.OS = 'ios'
        }
      }
    })
  },
  globalData: {
    isLogin: false,
    iPhoneX: false,
    OS: 'ios',
    openId: '',
    unionId: '',
    userInfo: {},
    phone: '',
    selectList: [],
    catogoryList: [],
    code: '',
    boxNumber: '',
    backFromBindPhone: false
  },
  server: new server(this)
})
