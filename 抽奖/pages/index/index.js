//index.js
//获取应用实例
let animation = wx.createAnimation({
  duration:2000,
  timingFunction:"linear"
});
let rdm = 0;
Page({
  data: {
   rotateData:{},
   turning:false
  },
  onLoad: function () {
    
  },
  start(){
    let _this = this;
    if(!this.data.turning){
        // rdm = 0;//随机旋转的度数
      let cat = 51.4;
      rdm = Math.floor(Math.random()*3600);
      animation.rotate(rdm).step();
      this.setData({
        rotateData:animation.export(),
        turning:true
      });

      function showModal(str) {
        wx.showModal({
          title: '提示',
          content: str,
          success(res) {
            // if (res.confirm) {
              let animation = wx.createAnimation({
                duration:500,
                timingFunction:"linear"
              });
              animation.rotate(0).step();
              _this.setData({
                rotateData: animation.export()
              });
            // }
          }
        })
      };

      setTimeout(()=>{
        this.setData({
          turning: false
        });
        let num = rdm % 360;
        if(num <= cat*1 ){
          showModal("中奖4999元");
        } else if (num <= cat * 2){
          showModal("50元");
        } else if (num <= cat * 3) {
          showModal("10元");
        } else if (num <= cat *4) {
          showModal("5元");
        } else if (num <= cat * 5) {
          showModal("免息服务");
        } else if (num <= cat *6) {
          showModal("提高白条额度");
        } else if (num <= cat * 7) {
          showModal("未中奖");
        }
      },4000)
    }else{

    }
  }
});