//index.js
//获取应用实例
let ctx;
Page({
  data: {
    pen:{
      lineWidth:5,
      color:"pink"
    }
  },
  //事件处理函数 
  onLoad: function (options) {
    ctx = wx.createCanvasContext("myCanvas");
    ctx.setStrokeStyle(this.data.pen.color);
    ctx.setLineWidth(this.data.pen.lineWidth);
    ctx.setLineCap("round");
    ctx.setLineJoin("round");
  },
  touchStart:function(e){
    console.log(e)
    ctx.setStrokeStyle(this.data.pen.color);
    ctx.setLineWidth(this.data.pen.lineWidth);
    ctx.moveTo(e.touches[0].x,e.touches[0].y);
  },
  touchMove(e){
    console.log(e)
    let x = e.touches[0].x;
    let y = e.touches[0].y;
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.draw(true);
    ctx.moveTo(x,y)
  },
  penSelect(e){
    this.setData({"pen.lineWidth":e.target.dataset.param})
  },
  colorSelect(e){
    this.setData({"pen.color":e.target.dataset.param})
  }
})
