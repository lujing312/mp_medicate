module.exports = {
    status: 0,
    msg: '获取当前用户地址列表',
    data: {
      drugName: '抗之霸 阿莫西林胶囊', 
      otc: 0, 
      categoryName: '降糖类', 
      drugManufacturer: '广州白云山医药集团股份有限公司', 
      productId: 7328,
      drugIngredient: [{
          indicationName: '阿莫西林', 
          isClick: 1, 
          ingredientId: '100'
        }, 
        {
          indicationName: '格列本脲', 
          isClick: 0
      }], 
      geneInformation: [{
        isClick: 1,
        drugAdvice: '请遵医嘱适量调整用药量',
        imgUrl: 'http://static.genebox.cn/drug/dproduct/drugGuide/lankedianji.png',
        ingredientId: 46,
        drugLevel: '药效较差',
        indicationName: '阿莫西林'
      },
      {
        isClick: 1,
        drugAdvice: '请遵医嘱适量调整用药量',
        imgUrl: 'http://static.genebox.cn/drug/dproduct/drugGuide/huangkedianji.png',
        ingredientId: 46,
        drugLevel: '药物剂量需求较中',
        indicationName: '阿莫西林'
      },
      {
        isClick: 1,
        drugAdvice: '请遵医嘱适量调整用药量',
        imgUrl: 'http://static.genebox.cn/drug/dproduct/drugGuide/hongkedianji.png',
        ingredientId: 46,
        drugLevel: '药物剂量需求较高',
        indicationName: '阿莫西林'
      }],
      drugGuide: [{
        imgUrl: 'https://static.genebox.cn/drug/dproduct/drugGuide/yunfu.png', 
        guideTitle: '孕妇及哺乳期用药提示：', 
        guideContent: '孕妇及哺乳期妇女禁用。'
      }, 
      {
        imgUrl: 'https://static.genebox.cn/drug/dproduct/drugGuide/renchen.png', 
        guideTitle: 'FDA妊娠分级：', 
        level: 'D', 
        levelColor: '#F5A623', 
        guideContent: '如用于妊娠高血压患者，则分级为D'
      }, 
      {
        imgUrl: 'https://static.genebox.cn/drug/dproduct/drugGuide/buru.png', 
        guideTitle: '哺乳期分级：', 
        guideContent: '无'
      }, 
      {
        imgUrl: 'https://static.genebox.cn/drug/dproduct/drugGuide/ertong.png', 
        guideTitle: '儿童用药：', 
        guideContent: '儿童禁用本品'
      }, 
      {
        imgUrl: 'https://static.genebox.cn/drug/dproduct/drugGuide/laoren.png', 
        guideTitle: '老年用药：', 
        guideContent: 'xxxxxxxxx'
      }], 
      indication: {
        tag: [
            '晕车', 
            '中暑', 
            '||型糖尿病', 
            '醒脑替身', 
            '醒脑替身', 
            '长生不老'
        ], 
        text: '阿莫西林适用于敏感菌（不产β内酰胺酶菌株）所致的下列感染：', 
        spreadType: 1
      }, 
      drugInteraction: {
        tag: [
          '水杨酸盐甲', 
          '环丙沙星', 
          '咪康唑', 
          '保泰松', 
          '水杨酸盐甲', 
          '甲状腺素'
        ], 
        text: '溶血链球菌、肺炎链球菌、葡萄球菌或流感嗜血杆菌所致中耳炎、鼻窦炎、咽炎、扁桃体炎等上呼吸道感染', 
        spreadType: 1
      }, 
      attention: [{
        title: '不良反应', 
        content: '溶血链球菌、肺炎链球菌、葡萄球菌或流感嗜血杆菌所致中耳炎、鼻窦炎、咽炎、扁桃体炎等上呼吸道感染 ', 
        spreadType: 1
      }, 
      {
        title: '注意事项', 
        content: '1. 溶血链球菌、肺炎链球菌、葡萄球菌或流感嗜血杆菌所致中耳炎、鼻窦炎、咽炎、扁桃体炎等上呼吸道感染。2. 大肠埃希菌、 奇异变形杆菌或粪肠球菌所致的泌尿生殖道感染。 ', 
        spreadType: 1
      }]
    }
  }
  