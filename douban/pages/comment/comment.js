// pages/comment/comment.js
import { network } from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:{
      type:String,
      value:0
    },
    start:1,
    count:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      var that=this;
      that.setData(options);
    that.getComments(1);
    
  },
  getComments:function(start){
    var that=this;
    var type=that.data.type;
    var id=that.data.id;
    
    if(start>that.data.start){
      that.setData({
        nextloading :true
      })
    }else{
      that.setData({
        preloading : true
      })
    }
    network.getItemComments({
      type,
      id,
      start,
      count: 20,
      success: function (res) {
        var total = res.total;
        var comments = res.interests;
        that.setData({
          total,
          comments,
          start,
          preloading:false,
          nextloading:false
        });
        wx.pageScrollTo({
          scrollTop: 0,
        })
      }
    })
  },
  onItemTapEvent:function(event){
   wx.navigateBack({})
  },
  onPrePageTap:function(event){
    
    var that = this;
    var oldstart = that.data.start - 1;
    if (oldstart==0){}
    else{
      var start = oldstart - that.data.count;
      
      that.getComments(start);
    }
    
  },
  onNextPageTap: function (event) {
    var that=this;
    var oldstart = that.data.start + 1;
    var start =oldstart + that.data.count;
    that.getComments(start);
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