module.exports = {
  status: 0,
  msg: '',
  data: [{
    categoryName: "抗组胺药", 
    categoryId: "123", 
    ingredientNum: 8,  
    riskNum: 1, 
    medicineList: [
      {
        medicineName: "阿莫西林片", 
        riskType: 1
      }, {
        medicineName: "阿莫西", 
        riskType: 1
      },
      {
        medicineName: "布洛芬", 
        riskType: 1
      },
      {
        medicineName: "布洛芬缓释", 
        riskType: 1
      }
    ], 
    ingredientList: [{
      ingredientId: 73, 
      ingredientName: "成分名称--布洛芬", 
      advice: "药效较差/正常使用", 
      riskType: 1, 
      medicineNameList: [
        "布洛芬缓释", 
        "布洛芬咀嚼片", 
        "布洛芬含片"
      ]
    }, {
      ingredientId: 73, 
      ingredientName: "成分名称--布洛芬", 
      advice: "药效较差/正常使用", 
      riskType: 1, 
      medicineNameList: [
        "布洛芬缓释", 
        "布洛芬咀嚼片", 
        "布洛芬含片"
      ]
    }, {
      ingredientId: 73, 
      ingredientName: "成分名称--布洛芬", 
      advice: "药效较差", 
      riskType: 0, 
      medicineNameList: [
        "布洛芬缓释", 
        "布洛芬咀嚼片", 
        "布洛芬含片"
      ]
    }]
  }]
}