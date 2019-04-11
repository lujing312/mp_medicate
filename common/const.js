module.exports = {
  //请求地址
  API: {
    BASE_URL: 'https://genebox.cn',
    // BASE_URL: 'http://beta.genebox.cn',
    //同步用户信息接口
    LOGIN_INFO: '/user/medicine/info/box/get',
    GET_VERIFICATION_CODE: '/user/getLoginVerificationCodeByPhone',
    CHECK_BIND_PHONE: '/user/bind/check_phone',
    BIND_PHONE: '/user/bind/wx_phone',
    GET_DRUG_LIST: '/medicine/drug/product',
    GET_INDICATION_LIST: '/medicine/ingredient/detail',
    GET_HEALTH_LIST: '/medicine/health/index',
    GET_CATOGORY_LIST: '/medicine/drug/catogory/list',
    GET_SEARCH_LIST: '/medicine/drug/search',
    GET_DETAIL_LIST: '/medicine/drug/detail',
    GET_MEDICATELIST_LIST: '/medicine/usual/list'
  },
  LINK: {
    // GUIDE_URL: 'https://static.genebox.cn/static/article/drug_guidebook.html',
    GUIDE_URL: 'https://static.genebox.cn/static/article/drug_guidebook_v2.html',
    PRIVACY_URL: 'https://static.genebox.cn/static/privacy.html'
  },
  APPID: 'wx72dfe8a127ca0474',
  TEXT_HEIGHT: 120
}