
const app = getApp()
// pages/select/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectList: []
  },
  onLoad: function (options) {
    this.setData({
      selectList: app.globalData.selectList
    })
  },
  hanldeChangeChecked: function(evt) {
    let dataset = evt.currentTarget.dataset
    app.globalData.selectList.map((item, index) => {
      item.isChecked = dataset.index === index
      return item
    })
    app.globalData.boxNumber = dataset.num
    this.setData({
      selectList: app.globalData.selectList
    })
  },
  handleSubmit: function() {
    wx.navigateBack({
      delta: 1
    });
  }
})