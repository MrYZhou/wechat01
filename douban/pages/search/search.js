// pages/search/search.js
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
    wx.getStorage({
      key: 'searched',
      success: function (res) {
        console.log(res.data)
        var data=res.data;
        that.setData({
          histories: data
        })
      },
    })

  },
  onItemTapEvent: function (event) {
    var that = this;
    var id = event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    var histories = that.data.histories;
    var isExisted = false;
    if(histories>0){
      for (var index = 0; index < histories.length; index++) {
        if (histories[index].title === title) {
          isExisted = true;
          break;
        }
      }
    }
    
    if (isExisted == false) {
      histories.push([{ id, title }])
      wx.setStorage({
        key: 'searched',
        data: histories,
        success: function (res) {

        }
      })
    }
    wx.navigateTo({
      url: "/pages/detail/detail?type=movie&id=" + id,
    })
  },
  onClearEvent:function(event){
    
    wx.removeStorage({
      key: 'searched',
      success: function(res) {
        
      },
    });
    this.setData({
      histories: []
    })
  },
  onSearchInputEvent: function (event) {
    var that = this;
    var value = event.detail.value;
    if(value===""){
      that.setData({
        histories:null
      })
      return;
    }
    network.getSearch({
      "q": value,
      success: function (res) {
        that.setData({
          subjects: res
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