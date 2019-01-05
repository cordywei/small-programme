//index.js
//获取应用实例
// const app = getApp()
let socket;
Page({
  data: {
    stock: [{
        name:"ruanmou",
        price:100
      },
      {
        name: "baidu",
        price: 90
      },
      {
        name: "jingdong",
        price: 80
      },
    ]
  },
  onLoad: function() {

  },
  connect(e) {
    let _this = this;
    socket = wx.connectSocket({
      url: 'ws://localhost:8080',
      success: function(res) {
        console.log(res, 3333)
      }
    });
    socket.onMessage(function(data) {     
      let _data = JSON.parse(data.data);
      console.log(_data)
      _this.setData({
        stock: [{
          name: "ruanmou",
          price: _data.ruanmou
        },
        {
          name: "baidu",
          price: _data.tencent
        },
        {
          name: "jingdong",
          price: _data.jd
        },
        ]
      })
    })
  }
})