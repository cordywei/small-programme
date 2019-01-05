//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    imgUrls:[
      "/image/1.png",
      "/image/2.png",
      "/image/3.png",
      "/image/4.png"
    ],
    foodTypes:['全部菜品','披萨','面条','水果','寿司','三明治'],
    foodTypesIndex:0,
    rankTypes:["综合排序",'热度','价格','好评','时间'],
    rankTypesIndex:0,
    foodList:[],
    orderList:{},
    orderNum:0,
    orderCost:0

  },
  onLoad: function (options) {
    let oringinData = app.globalData.foodList;
    // console.log(oringinData)
    // let foodList = [];
    // for(let i = 0; i < oringinData.length; i++){
    //   foodList.push(oringinData[i]);
    // }
    // console.log(foodList)
    this.setData({"foodList":oringinData})
  },
  addToCart(e){
    console.log(e)
    let index = e.currentTarget.dataset.index;
    this.changeNum(index,true);
    wx.showToast({
      icon:"success",
      title:"已添加",
      duration:1000
    })
  },
  reduceFromCart(e){
    let index = e.currentTarget.dataset.index;
    this.changeNum(index, false);
    wx.showToast({
      icon: "success",
      title: "已删除",
      duration: 1000
    })
  },
  changeNum(index,boolen){
    let t_food = this.data.foodList[index];
    let orderList = this.data.orderList;
    let obj = orderList[t_food.id];
    //如果存在，则数量变化
    if(obj){
      if(boolen){
        obj.num = obj.num + 1;
      }else{
        if(obj.num > 0){
          obj.num = obj.num - 1;
        }else{
          return;
        }
      }
    }else{
      if(boolen){
        obj = {
          id:t_food.id,
          num:1,
          cost:t_food.cost,
          title:t_food.title
        };
        orderList[t_food.id] = obj;
      }else{
        return;
      }
    }
    let order_num = 0;
    let order_cost = 0;
    for(let k in orderList){
      order_num = orderList[k].num + order_num;
      order_cost = order_cost + orderList[k].cost * orderList[k].num;
    }
    t_food.num = obj.num;
    let foodList = this.data.foodList;
    foodList[index] = t_food;
    this.setData({
      orderList:orderList,
      orderNum:order_num,
      orderCost:order_cost,
      foodList:foodList
    })
    console.log(orderList,obj, t_food,t_food.id)
  },
  foodTypeChange(e){
    console.log(e)
    this.setData({
      foodTypesIndex:e.detail.value
    })
  }

})
