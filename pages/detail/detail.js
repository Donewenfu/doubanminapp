import {doubanapi} from '../../utils/doubanapi'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shownum:9
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中...',
    })
    var that = this;
    var dtype = options.type;
    var did   = options.id;
    that.setData({
      id:did,
      type:dtype
    })
    doubanapi.getDetail({
      type:dtype,
      id:did,
      success:function(res){
       res.genres = res.genres.join('/')
       res.countries = res.countries.join('/');
       //演员信息
       var suba = []
       res.actors.forEach((item,index)=>{
         suba.push(item.name)
       })
       res.suba = suba.join('/')
       //截取字符串简介
       res.intro = res.intro.substr(0,70)

       that.setData({
         detailinfo:res
       })
       wx.hideLoading()
      }
    })
    //请求评论的数据
    doubanapi.getComment({
      type:dtype,
      id:did,
      success:function(res){
        console.log(res)
        that.setData({
          commenttotal:res.total,
          commentlist:res.interests
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
        duration: 300,
        scrollTop:0
      });
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