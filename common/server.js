import request from './request';
import { API } from './const';

class server {
  constructor() {
    this._baseUrl = API.BASE_URL;
    //platform为平台区分，小程序为 3
    //1: ios, 2: android, 3: mini, 4: touch, 5: web
    this._defaultHeader = {
      'data-type': 'application/json',
      'platform': 3
    };
    this._request = new request;
    this._request.setErrorHandler(this.errorHander);
    this._params = {};
  }

  //设置请求头
  setHeader(header) {
    this._defaultHeader = Object.assign(this._defaultHeader, header);
  }

  //设置数据
  setParams(params) {
    this._params = Object.assign(this._params, params)
  }

  //统一的异常处理方法
  errorHander(res) {
    wx.showToast({
      title: '网络不给力，请稍后再试',
      icon: 'none'
    });
    console.error(res);
  }
  login(data) {
    return this._request.postRequest(this._baseUrl + API.LOGIN_INFO, data, this._defaultHeader);
  }
  //药物列表
  getDrugList(data) {
    return this._request.getRequest(this._baseUrl + API.GET_DRUG_LIST, data, this._defaultHeader);
  }
  getDetailList(data) {
    return this._request.getRequest(this._baseUrl + API.GET_DETAIL_LIST, data, this._defaultHeader);
  }
  //成分列表
  getIndicationList(data) {
    return this._request.getRequest(this._baseUrl + API.GET_INDICATION_LIST, data, this._defaultHeader);
  }
  //精准健康列表
  healthInfo(data) {
    return this._request.getRequest(this._baseUrl + API.GET_HEALTH_LIST, data, this._defaultHeader);
  }
  //药物分类列表
  catogoryList(data) {
    return this._request.getRequest(this._baseUrl + API.GET_CATOGORY_LIST, data, this._defaultHeader);
  }
  //药物搜索列表
  getSearchList(data) {
    return this._request.getRequest(this._baseUrl + API.GET_SEARCH_LIST, data, this._defaultHeader);
  }
  //常用药物列表
  getMedicateList(data) {
    return this._request.getRequest(this._baseUrl + API.GET_MEDICATELIST_LIST, data, this._defaultHeader);
  }
  //获取手机号验证码
  getVerificationCode(data) {
    return this._request.postRequest(this._baseUrl + API.GET_VERIFICATION_CODE, data, this._defaultHeader);
  }
  //绑定手机号
  bindPhone(data) {
    return this._request.postRequest(this._baseUrl + API.BIND_PHONE, data, this._defaultHeader);
  }
}
export default server;