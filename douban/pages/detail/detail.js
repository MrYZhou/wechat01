// pages/detail/detail.js
import { network } from "../../utils/network.js"
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
    var that = this;
    var type = options.type;
    var id = options.id;
    that.setData({
      type,id
    })
    network.getItemDetail({
      type: type,
      id: id,
      success: function (res) {
       //console.log(res)
        var genres = res.genres;
        genres = genres.join("/")
        res.genres = genres;

        var actors=res.actors;
        
        var actorName=[];
        if(actors.length>3){
          actors=actors.slice(0,3);
          
          for(var index=0;index<actors.length;index++){
            
            var actor = actors[index];
            
            actorName.push(actor.name)
          }
          actorName=actorName.join("/");
          
        }
        var director = "";
        if (res.directors[0]!==undefined){
          director = res.directors[0].name + " (导演) /"
        }
        
        res.authors = director + actorName;
        console.log(res.authors)
        that.setData({
          item: res

        })
      }
    });

    network.getItemTags({
      type: type,
      id:id,
      success:function(res){
        that.setData({
          tags:res
        })
      }
    }),
    network.getItemComments({
      type,
      id,
      success:function(res){
        
        var comments = res.interests;
        var totalcomment=res.total;
        that.setData({
          comments, totalcomment
        })
      }
    })



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})