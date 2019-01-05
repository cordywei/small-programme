//index.js
//获取应用实例
// const app = getApp()
// let QQMapWX = require("../../utils/qqmap-wx-jssdk.js");
// let qqmapsdk = new QQMapWX({
//   key: "CQQBZ-BGR34-5SPUI-XVGXT-GR3GQ-KPBM4"
// });
let baiduweather = require("../../utils/baiduweather.js");
Page({
  data: {
    city:"",
    temperature:"",
    tips:"",
    future:[]
  },
  onLoad: function (options) {
    let _this = this;
    // this.locationInfo();腾讯地图借口
    let weather = new baiduweather.BMapWX({
      ak:"WkoOXO0b3V6vQ6Fl5gt4R5mEFUppmUXG"
    });
    weather.weather({
      success:function(res){
        console.log(res)
        _this.setData({
          city:res.currentWeather[0].currentCity,
          temperature: res.currentWeather[0].temperature,
          tips: res.originalData.results[0].index[0].des,
          future: res.originalData.results[0].weather_data
        })
      },
      fail:function(res){
        console.log(res)
      }
    })
    
  },
  locationInfo:function(){
    let _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        let latitude = res.latitude;
        let longitude = res.longitude;
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude:longitude
          },
          success: function (res) {
            console.log(res);
            _this.setData({
              city:res.result.address_component.district
            })
          }
        });
      },
    })
  }
})
