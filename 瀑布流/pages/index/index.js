//index.js
//获取应用实例
// const app = getApp()
let col1H = 0;
let col2H = 0;
Page({
  data: {
    col1: [],
    col2: [],
    scrollH:0,
    imgWidth:0,
    images:[],
    loadingCount:0
  },
  onLoad: function(options) {
    let thisObj = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;
        thisObj.setData({
          scrollH:scrollH,
          imgWidth:imgWidth
        });
        thisObj.loadImages();
      },
    });
  },
  loadImages:function(){
    let images = [
      { pic: "../../image/1.png", height: 0 },
      { pic: "../../image/2.png", height: 0 },
      { pic: "../../image/3.png", height: 0 },
      { pic: "../../image/4.png", height: 0 },
      { pic: "../../image/5.jpg", height: 0 },
      { pic: "../../image/6.jpg", height: 0 },
      { pic: "../../image/7.jpg", height: 0 },
      { pic: "../../image/8.jpg", height: 0 }
    ];
    let baseId = "img-" + (+ new Date());
    for(let i = 0; i < images.length; i++){
      images[i].id = baseId + "-" + i;
      // console.log(images[i].id)
    };
    this.setData({
      images:images
      ,loadingCount:images.length
    })
  },
  onImageLoad:function(e){
    console.log(e)
    let imageId = e.currentTarget.id;
    let oImgH = e.detail.height;
    let oImgW = e.detail.width;
    let imgWidth = this.data.imgWidth;
    let scale = imgWidth / oImgW;
    let imgHeight = scale * oImgH;
    let images = this.data.images;
    let imageObj = null;
    for(let i = 0; i < images.length; i++){
      let img = images[i];
      if(img.id === imageId){
        imageObj = img;
        break;
      }
    };
    imageObj.height = imgHeight;
    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;
    if(col1H <= col2H){
      col1H += imgHeight;
      col1.push(imageObj);
    }else{
      col2H += imgHeight;
      col2.push(imageObj);
    };
    let data = {
          loadingCount:loadingCount,
          col1:col1,
          col2:col2
        };
    if(!loadingCount){
      data.images = [];
    };
    this.setData(data)
    console.log(col1)
  }
})