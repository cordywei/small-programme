// pages/caiquan-game/caiquan-game.js
let timer;
let num = 0;
Page({

  /**
   * 页面的初始数据
   */

  data: {
    againState:false,
    winNum:0,
    gameOfPlay:"",
    imageUserScr:"",
    imageClickSrc:"",
    srcs:["../../image/yingtao.jpg","../../image/taozi.jpg","../../image/pingguo.jpg"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var curr = this;
    wx.getStorage({
      key: 'winNum',
      success: function(res) {
        console.log(res)
        curr.setData({winNum:res.data})
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    this.timerGo();
  },
  timerGo:function(){
    timer = setInterval(this.move,300)
  },
  move:function(){
    // let thiss = this;
    
      if (num >= 3) {
        num = 0;
      };
      this.setData({ imageUserScr: this.data.srcs[num] });
      num++;
    
  },
  changeForChoose(option){
    console.log(option)
    let clickNum = option.currentTarget.id;
    this.setData({ imageClickSrc: this.data.srcs[clickNum]});
    clearInterval(timer);


    let user = this.data.imageUserScr;
    let computer = this.data.imageClickSrc;
    let x = this.data.winNum;
    if(user == "../../image/yingtao.jpg" && computer == "../../image/taozi.jpg"){
      this.setData({ gameOfPlay: "你赢了", winNum: ++x, againState:true });
      wx.setStorage({
        key: 'winNum',
        data: x,
      })
    }
  },
  again:function(){
    if(!this.data.againState){
      console.log("不能点击")
      return;
    }
    this.timerGo();
    this.setData({imageClickSrc:""})
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
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})