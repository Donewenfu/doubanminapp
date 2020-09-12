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
      title: '数据加载中...',
      mask:true
    })
      var listtype = options.type;
      this.setData({
        type:listtype
      })
      var that = this;
      if(listtype == 'movie'){
        doubanapi.getlistDatam({
          success:function(res){
            var itemlist = res.data.subject_collection_items;
            //查看列表的余数
            var listnum = itemlist.length%3;
            if(listnum==2){
              itemlist.push(null)
            }
            that.setData({
              listData:itemlist
            })
            wx.hideLoading()
          }
        })
        wx.setNavigationBarTitle({
          title:'电影'
        })
      }else if(listtype == 'tv'){
        doubanapi.getlistDatat({
          success:function(res){
            var itemlist = res.data.subject_collection_items;
            //查看列表的余数
            var listnum = itemlist.length%3;
            if(listnum==2){
              itemlist.push(null)
            }
            that.setData({
              listData:itemlist
            })
            wx.hideLoading()
          }
        })
        wx.setNavigationBarTitle({
          title:'电视剧'
        })
      }else{
        doubanapi.getlistDatas({
          success:function(res){
            var itemlist = res.data.subject_collection_items;
            //查看列表的余数
            var listnum = itemlist.length%3;
            if(listnum==2){
              itemlist.push(null)
            }
            that.setData({
              listData:itemlist
            })
            wx.hideLoading()
          }
        })
        wx.setNavigationBarTitle({
          title:'综艺'
        })
      }
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