const app = getApp()
// pages/test/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    catogoryList: [],
    ingredientId:'',
    isWraning: true,
    menuFixed: false,
  },
  handleOpenDrugView: function(evt) {
    wx.navigateTo({
      url: '/pages/indication/index?ingredientId='+ evt.currentTarget.dataset.id
    })
  },
  // 关闭警告框
  handleCloseWraning: function() {
    let that = this
    that.setData({
      isWraning: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    this.catogoryList()
  },
  catogoryList () {
    let self = this
    app.server.catogoryList({
      boxNumber: app.globalData.boxNumber
    }).then(res => {
      if (!res.status) {
        self.setData({
          catogoryList : res.data.map((item,index) => {
            item.isHidden = false
            return item
          })
        })
        wx.hideLoading()
      } else {
        wx.hideLoading()
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
  },
  handleTestClose: function(e) {
    let that = this
    let index = e.currentTarget.dataset.index
    that.data.catogoryList[index].isHidden = !that.data.catogoryList[index].isHidden
    that.setData({
      catogoryList: that.data.catogoryList
    })
  }
})
