//引入网络请求api
import {doubanapi} from '../../utils/doubanapi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:null,
    lodingshow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData(options)
      //获取评论列表信息
      var that = this;
      var startnum = 1;
      doubanapi.getComment({
        type:that.data.type,
        id:that.data.id,
        statr:1,
        count:20,
        success:function(data){
          that.setData({
            total:data.total,
            commentslist:data.interests,
            statr:startnum
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
    var that = this;
     //当下拉到底部的时候显示loding
     this.setData({
      lodingshow:true
     })
     //获取当前的页面
     var statn = this.data.statr;
     doubanapi.getComment({
      type:this.data.type,
      id:this.data.id,
      statr:(statn+1)*20,
      count:20,
      success:function(data){
        that.setData({
          total:data.total,
          commentslist:that.data.commentslist.concat(data.interests),
          statr:statn+1
        })
        setTimeout(function(){
          that.setData({
            lodingshow:false
          })
        },3000)
      }
     })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //返回详情页面
  clickback:function(){
    wx.navigateBack({})
  }
})