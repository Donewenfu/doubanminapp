import {doubanapi} from '../../utils/doubanapi'

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
    wx.showLoading({
      title: '数据正在加载中...',
      mask:true
    })
      var that = this;
      //获取电影的数据
      doubanapi.getmovielist({
        success:function(res){
          that.setData({
            moviestitle:res.data.subject_collection.name,
            movieslist:res.data.subject_collection_items
          })
          wx.hideLoading({
            
          })
        }
      })
      //获取tv的数据
      doubanapi.gettvlist({
        success:function(res){
          that.setData({
            tvtitle:res.data.subject_collection.name,
            tvlist:res.data.subject_collection_items
          })
        }
      })
      //获取综艺数据
      doubanapi.getshowlist({
        success:function(res){
          that.setData({
            showtitle:res.data.subject_collection.name,
            showlist:res.data.subject_collection_items
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