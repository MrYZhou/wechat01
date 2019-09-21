//index.js
import {network} from '../../utils/network'

Page({
  data: {
    movies:[],
    tvs:[],
    shows:[]

  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
   var that=this;
   network.getList("movie",{
     success:function(data){
       that.setData({
         movies:data
       })
     }
   });
   //电视剧
    network.getList("tv", {
      success: function (tvs) {
        that.setData({
          tvs
        })
      }
    });
   //综艺
    network.getList("show", {
      success: function (shows) {
        that.setData({
          shows
        })
      }
    });
  }
})
