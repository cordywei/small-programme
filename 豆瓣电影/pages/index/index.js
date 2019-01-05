// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'

    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    movie:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadMovie();
  },
  loadMovie:function(){
    wx.showToast({
      title: '正在加载',
      icon:"loading",
      duration:10000
    })


    let thispage = this;
    wx.request({
      url:"https://api.apishop.net/common/tv/queryCategory?apiKey=yXh5UsQ8e2121e6798b8b0cd3a1efb609f5354585f4e36c",
      method:"GET",
      header:{"content-type":"application/json"},
      success:function(res){
        console.log(res)
        let subjects = res.data.subjects;
        thispage.setData({movie:subjects});
        wx.hideToast();

      }
    })
  }
})