//index.js
//获取应用实例
// const app = getApp()
let socket;
Page({
  data: {
   
  },
  onLoad: function () {
    
  },
  connect(e){
    socket = wx.connectSocket({
      url: 'ws://localhost:8080',
      success:function(res){
            console.log(res,3333)
      }
    });
    console.log(socket)
    socket.onMessage(function(data){
      console.log(data)
    })
    socket.onError(function(data){
      console.log(data)
    })
  }
})
