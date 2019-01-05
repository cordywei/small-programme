//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad: function () {
      


      // wx.playBackgroundAudio({
      //   dataUrl: 'http://audio.xmcdn.com/group25/M01/1C/D5/wKgJNlgbMzCwFl96AB7-PDgIUiw861.m4a',
      //   title:"样子",
      //   coverImgUrl:"https://p1.music.126.net/YUBV24XZRdqpft18TWOoeA==/109951163700194226.jpg?param=50y50",
      //   success:function(res){
      //     console.log(res)
      //   },
      //   fail:function(res){
      //     console.log(res)
      //   }
      // })

    // let audio = wx.getBackgroundAudioManager();

    // audio.epname = "样子";
    // audio.src = "http://audio.xmcdn.com/group25/M01/1C/D5/wKgJNlgbMzCwFl96AB7-PDgIUiw861.m4a";
    // audio.coverImgUrl = "https://p1.music.126.net/YUBV24XZRdqpft18TWOoeA==/109951163700194226.jpg?param=50y50";

    // audio.webUrl = "https://p1.music.126.net/HZaFTBp0y4jOYHtANRBBGg==/109951163185845225.jpg?param=50y50";

    // audio.onPlay(function(res){
    //   console.log(res)
    // })


    wx.onBackgroundAudioPause(function () {
      console.log(111)
    })





  },
  btnPlay:function(res){
    wx.playBackgroundAudio({
      dataUrl: 'http://audio.xmcdn.com/group25/M01/1C/D5/wKgJNlgbMzCwFl96AB7-PDgIUiw861.m4a',
      title: '',
      coverImgUrl: '',
      success:function(res){

      }
    })
  },
  btnGetInfo:function(res){
    wx.getBackgroundAudioPlayerState({
      success(res) {
        const status = res.status
        const dataUrl = res.dataUrl
        const currentPosition = res.currentPosition
        const duration = res.duration
        const downloadPercent = res.downloadPercent
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  btnPause(res){
    wx.pauseBackgroundAudio({
      success:function(res){
        console.log(res)
      }
    })
  },
  btnStop(res){

  }
})
