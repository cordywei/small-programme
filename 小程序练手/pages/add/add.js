// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    if(id){
      getData(id,this);
    }else{
      var length = wx.getStorageSync('txt').length;
      this.setData({
        id:length ? length : 0
      })
      console.log("新建的留言")
    }

  },

  change(e){
    var val = e.detail.value;
    this.setData({
      content:val
    })
  },

  cancel(){
    wx.navigateBack()
  },

  sure(){
    var re = /^\s*$/g;
    if (!this.data.content || re.test(this.data.content)){
      return;
    };
    this.setData({
      time:Date.now()
    });
    setValue(this);
    wx.navigateBack();
  }
})

function getData(id, page){
  var arr = wx.getStorageSync('txt');
  console.log(arr,id)
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id == id){
        page.setData({
          id:item.id,
          content:item.content
        });
      }
    });
  };
}

function setValue(page){
  var arr = wx.getStorageSync('txt');
  var data = [],flag = true;
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id == page.data.id){
        item.time = Date.now();
        item.content = page.data.content;
        flag = false;
      }
      data.push(item);

    })
  }

  if(flag){
    data.push(page.data);
  }
  wx.setStorageSync('txt',data);
}










