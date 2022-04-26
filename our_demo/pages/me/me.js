Page({
  data:{
   userInfo:''
  },
  onLoad(){
    let user=wx.getStorageSync('user')
    console.log('进去小程序的index页面获取缓存',user)
    this.setData({
      userInfo:user
     })
  },
  gotoperson:function(){
    wx.navigateTo({
      url: '/pages/person/person',
    })
    },
    gotoedit:function(){
      wx.navigateTo({
        url: '/pages/edit/edit',
      })
      },
      gotoour:function(){
        wx.navigateTo({
          url: '/pages/our/our',
        })
      },
  //授权登录
  login(){
   //console.log('点击事件执行了')
   wx.getUserProfile({
     desc: '必须授权才可以继续使用',
     success:res=>{
       let user=res.userInfo
       //把用户信息进行缓存到本地
       wx.setStorageSync('user', user)
       console.log("用户信息",user)
       this.setData({
        userInfo:user
       })
       //console.log('授权成功',res.userInfo)
     },
     fail:res=>{
       console.log('授权失败',res)
     }
   })
  },
  //退出登录
  loginOut(){
    this.setData({
      userInfo:''
     })
     wx.setStorageSync('user', null)
  }
})