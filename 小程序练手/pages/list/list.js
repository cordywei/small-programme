// pages/list/list.js
var time = require("../../utils/util");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // lists:[{
    //   content:"hello",
    //   time: Date.now()
    // }]
  },

  edit:function(e){
    console.log(e)
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../add/add?id='+ id,
    })
  },

  add:function(){
    wx.navigateTo({
      url: '../add/add',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var  arr = wx.getStorageSync('logs');
    // console.log(arr)

    initData(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    initData(this);
  }
})

function initData(page){
  var arr = wx.getStorageSync("txt");
  if(arr.length){
    arr.forEach((item,i)=>{
      var t = new Date(Number(item.time));
      item.time = time.formatTime(t);
    })

    page.setData({
      lists:arr
    })
  }
}










