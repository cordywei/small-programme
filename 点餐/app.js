//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    foodList:[
      {
        id:1,
        title:"黑胡椒意匠面",
        cost:45,
        desc:"进口意大利通心粉制作",
        icon:"/image/noodle2.jpg",
        num:0
      },
      {
        id: 2,
        title: "蛋炒饭",
        cost: 25,
        desc: "进口意大利通心粉制作",
        icon:"/image/noodle.jpg",
        num: 0
      },
      {
        id: 3,
        title: "盖浇饭",
        cost: 15,
        desc: "进口意大利通心粉制作",
        icon:"/image/chicken1.jpg",
        num: 0
      },
      {
        id: 4,
        title: "煲仔饭",
        cost: 85,
        desc: "进口意大利通心粉制作",
        icon:"/image/steak1.jpg",
        num: 0
      },
      {
        id: 5,
        title: "包子",
        cost: 185,
        desc: "进口意大利通心粉制作",
        icon: "/image/chicken1.jpg",
        num: 0
      },
      {
        id: 6,
        title: "面条",
        cost: 65,
        desc: "进口意大利通心粉制作",
        icon: "/image/steak1.jpg",
        num: 0
      },
      {
        id: 7,
        title: "烧鸡",
        cost: 85,
        desc: "进口意大利通心粉制作",
        icon: "/image/noodle2.jpg",
        num: 0
      },
      {
        id: 8,
        title: "烧鹅",
        cost: 85,
        desc: "进口意大利通心粉制作",
        icon: "/image/noodle.jpg",
        num: 0
      }
    ]
  }
})