import WxRequest from './lib/wxRequest';
import { API } from '../common/const';

import drugList from './data/drugList';
import indicationList from './data/indicationList';
import healthList from './data/healthList';
import catogoryList from './data/catogoryList';
import searchList from './data/searchList';
import detailList from './data/detailList';
import loginInfo from './data/loginInfo';



//药品列表
WxRequest.mock(API.BASE_URL + API.GET_DRUG_LIST, drugList);
WxRequest.mock(API.BASE_URL + API.GET_INDICATION_LIST, indicationList);
WxRequest.mock(API.BASE_URL + API.GET_HEALTH_LIST, healthList);
WxRequest.mock(API.BASE_URL + API.GET_CATOGORY_LIST, catogoryList);
WxRequest.mock(API.BASE_URL + API.GET_SEARCH_LIST, searchList);
WxRequest.mock(API.BASE_URL + API.GET_DETAIL_LIST, detailList);
WxRequest.mock(API.BASE_URL + API.LOGIN_INFO, loginInfo);

