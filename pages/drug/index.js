import { APPID, TEXT_HEIGHT } from '../../common/const'
const app = getApp()
Page({
  data: {
    drugList: null,
    attention: [],
    status: '',
    productId: '',
    isClick: null,
    ingredientId: '',
    boxNumber: '',
    showFitToggleBtn: false,
    showFitBtn: false,
    fitTextOriginHeight: 0,
    fitTextHeight: 0,
    showEffectToggleBtn: false,
    showEffectBtn: false,
    effectTextOriginHeight: 0,
    effectTextHeight: 0,
    questionContent: ''
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    let self = this
    if (options.from === 'scan') {
      app.server.getDetailList({
        code: options.code,
        boxNumber: app.globalData.boxNumber
      }).then( res=> {
        if(!res.status) {
          self.setData({
            drugList : res.data || null,
            attention: res.data.attention || []
          })
          wx.hideLoading()
        } else {
          wx.hideLoading()
          wx.showToast({
            title: res.msg,
            icon: 'none',
            duration: 2000
          });
          setTimeout(function() {
            wx.navigateBack({
              delta: 1
            });
          }, 2000)
        }
      })
    } else {
      app.server.getDrugList({
        productId : options.productId,
        boxNumber: app.globalData.boxNumber
      }).then(res => {
      if (!res.status) {
        self.setData({
          drugList : res.data || null,
          attention: res.data.attention || []
        })
        wx.hideLoading()
       } else {
        wx.hideLoading()
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
        setTimeout(function() {
          wx.navigateBack({
            delta: 1
          });
        }, 2000)
       }
      })
    }
  },
  handleOpenIndication: function(e) {
    if (e.currentTarget.dataset.click === 1&& app.globalData.boxNumber !== '') {
      wx.navigateTo({
        url: '/pages/indication/index?ingredientId='+e.currentTarget.dataset.id
      })
    }
    this.setData({
      ingredientId: e.currentTarget.dataset.id
    })
  },
  handleOpenindication: function(evt) {
    if (app.globalData.boxNumber !== '') {
      wx.navigateTo({
        url: '/pages/indication/index?ingredientId='+evt.currentTarget.dataset.ingredientid
      })
    }
  },
  hanldeUnclickBuy: function(e) {
    wx.navigateToMiniProgram({
      appId: APPID,
      path: 'pages/buy/index?productId='+e.currentTarget.dataset.productid,
      success(res) {
        // 打开成功
      }
    })
  },
  // 适应症展开收起
  handleToggleFit: function(e) {
    let toggle = e.currentTarget.dataset.toggle
    this.setData({
      showFitBtn: !toggle,
      fitTextHeight: !toggle ? this.data.fitTextOriginHeight : TEXT_HEIGHT
    })
  },
  // 相互作用展开收起
  handleToggleEffect: function(e) {
    let toggle = e.currentTarget.dataset.toggle
    this.setData({
      showEffectBtn: !toggle,
      effectTextHeight: !toggle ? this.data.effectTextOriginHeight : TEXT_HEIGHT
    })
  },
  // 注意事项展开收起
  hanldeToggleAttentionItem: function(e) {
    let dataset = e.currentTarget.dataset
    let item = this.data.attention[dataset.index]
    item.showToggleBtn = !dataset.toggle
    item.showHeight = !dataset.toggle ? item.originHeight : TEXT_HEIGHT
    this.setData({
      attention: this.data.attention
    })
  },
  onReady: function () {
    // 获取dom高度
    let self = this
    self.Modal = self.selectComponent("#modal");
    var query = wx.createSelectorQuery()
    setTimeout(function() {
      query.select('.fit-text-wrap').boundingClientRect(function (rect) {
        self.setData({
          showFitToggleBtn: rect.height > TEXT_HEIGHT,
          fitTextOriginHeight: rect.height,
          fitTextHeight: rect.height > TEXT_HEIGHT ? TEXT_HEIGHT : rect.height
        })
      }).exec()
      query.select('.effect-text-wrap').boundingClientRect(function(rect) {
        self.setData({
          showEffectToggleBtn: rect.height > TEXT_HEIGHT,
          effectTextOriginHeight: rect.height,
          effectTextHeight: rect.height > TEXT_HEIGHT ? TEXT_HEIGHT : rect.height
        })
      }).exec()
      query.selectAll('.attention-text-item').boundingClientRect(function (rect) {
        self.data.attention = self.data.attention.map((item, i) => {
          return {
            ...item,
            showToggleBtn: false,
            showAttentionToggleBtn: rect[i].height > TEXT_HEIGHT,
            originHeight: rect[i].height,
            showHeight: rect[i].height > TEXT_HEIGHT ? TEXT_HEIGHT : rect[i].height
          }
        })
        self.setData({
          attention: self.data.attention
        })
      }).exec()
    }, 1000)
  },
  handleShowQuestionText: function (e) {
    this.setData({
      questionContent: e.currentTarget.dataset.text,
    })
    this.Modal.showModal();
  },
  _cancelEvent: function () {
  }
})