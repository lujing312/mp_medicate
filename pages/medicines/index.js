const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    medicateList: [],
    isWraning: true,
    explainSuffix: '',
    explainContent: [],
    explainPrefix: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMedicateList(options.boxNumber)
  },
  // 关闭警告框
  handleCloseWraning: function() {
    this.setData({
      isWraning: false
    })
  },
  getMedicateList(boxNumber) {
    app.server.getMedicateList({
      boxNumber: boxNumber
    }).then(res => {
      if (!res.status) {
        this.setData({
          medicateList : res.data || []
        })
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
  },
  handleOpenDrugList: function(event) {
    wx.navigateTo({
      url: '/pages/drug/index?from=medicines&productId=' + event.currentTarget.dataset.id
    })
  },
  onReady: function () {
    this.Modal = this.selectComponent("#modal")
  },
  handleMedicineDialog: function (e) {
    let explainContent = ''
    if (e.currentTarget.dataset.content) {
      explainContent = e.currentTarget.dataset.content.map(item=>item.medicineName).join('、')
    }
    if (e.currentTarget.dataset.prefix == undefined) {
      e.currentTarget.dataset.prefix = ''
    }
    this.setData({
      explainSuffix: e.currentTarget.dataset.suffix,
      explainPrefix: e.currentTarget.dataset.prefix,
      explainContent: explainContent
    })
    this.Modal.showModal(); // 控制modal显示
  },
  _cancelEvent: function () {
  }
})