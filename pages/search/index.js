const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: [],
    inputValue: ''
  },
  inputBind: function(event) {
    if (!event.detail.value) {
      return;
    }
    this.setData({
      inputValue: event.detail.value
    })
    app.server.getSearchList({
      name: this.data.inputValue, 
      boxNumber: app.globalData.boxNumber
    }).then(res=>{
      if (!res.status) {
        this.setData({
          searchList : res.data || []
        })
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        });
      }
    })
  },
  handleOpenSearchDrug: function(evt) {
    if (evt.currentTarget.dataset.type == 0) {
      wx.navigateTo({
        url: '/pages/drug/index?productId=' + evt.currentTarget.dataset.id
      })
    }
    if (evt.currentTarget.dataset.type == 1) {
      wx.navigateTo({
        url: '/pages/indication/index?ingredientId=' + evt.currentTarget.dataset.id
      })
    }
  },
  handleReturnHome: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  handleInputClean: function() {
   this.setData({
    inputValue: '',
    searchList: []
   })
  }
})