import { TEXT_HEIGHT } from '../../common/const'
const app = getApp()
Page({
  data: {
    tabList: ['结果概览', '科学细节'],
    current: 0,//当前选中的Tab项
    ingredientId: '',
    showIndicationToggleBtn: false,
    showIndicationBtn: false,
    indicationOriginHeight: 0,
    indicationHeight: 0,
    showSienceToggleBtn: false,
    showSienceBtn: false,
    scienceOriginHeight: 0,
    scienceHeight: 0
  },
  tabItemClick: function (e) {
    this.setData({
      current: e.currentTarget.dataset.pos
    })
    let self = this;
    if (self.data.scienceOriginHeight === 0) {
      let query = wx.createSelectorQuery()
      query.select('.science-text-wrap').boundingClientRect(function (rect) {
        self.setData({
          showSienceToggleBtn: rect.height > TEXT_HEIGHT,
          scienceOriginHeight: rect.height,
          scienceHeight: rect.height > TEXT_HEIGHT ? TEXT_HEIGHT : rect.height
        })
      }).exec()
    }
  },
  handleOpenIndicationView: function(evt) {
    wx.navigateTo({
      url: '/pages/drug/index?productId='+ evt.target.dataset.id
    })
  },
  // 相互作用展开收起
  handleToggleIndication: function(e) {
    let toggle = e.currentTarget.dataset.toggle
    this.setData({
      showIndicationBtn: !toggle,
      indicationHeight: !toggle ? this.data.indicationOriginHeight : TEXT_HEIGHT
    })
  },
  // 成分展开收起
  handleToggleSience: function(e) {
    let toggle = e.currentTarget.dataset.toggle
    this.setData({
      showSienceBtn: !toggle,
      scienceHeight: !toggle ? this.data.scienceOriginHeight : TEXT_HEIGHT
    })
  },
  handleToReference: function(e) {
    wx.navigateTo({
      url: '/pages/webView/index?url='+ e.currentTarget.dataset.url
    })
  },
  onLoad: function (query) {
    wx.showLoading({
      title: '加载中',
    })
    let self = this
    app.server.getIndicationList({
      ingredientId: query.ingredientId,
      boxNumber: app.globalData.boxNumber
    }).then(res => {
      if (!res.status) {
        self.setData({
          indicationList : res.data || {}
        })
        wx.hideLoading()
      } else {
        wx.hideLoading()
        wx.showToast({
          title: res.msg,
          icon: 'none'
        });
        setTimeout(function() {
          wx.navigateBack({
            delta: 1
          });
        }, 1000)
      }
    })
  },
  onReady: function() {
    let self = this
    setTimeout(() => {
      let query = wx.createSelectorQuery()
      query.select('.indication-text-wrap').boundingClientRect(function (rect) {
        self.setData({
          showIndicationToggleBtn: rect.height > TEXT_HEIGHT,
          indicationOriginHeight: rect.height,
          indicationHeight: rect.height > TEXT_HEIGHT ? TEXT_HEIGHT : rect.height
        })
      }).exec()
    }, 1000);
  }
})