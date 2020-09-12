// pages/search/search.js

import {
  doubanapi
} from '../../utils/doubanapi'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: [],
    showdialog:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取用户色搜索历史
    wx.getStorage({
      key: 'searchstorageData',
      success: function (res) {
        var histdata = res.data;
        var newhistory = [];
        //数组对象去重复
        for(var i = 0;i<histdata.length;i++){
          var flag = true;
          for(var j = 0;j<newhistory.length;j++){
            if(histdata[i].id == newhistory[j].id){
              flag = false;
              break;
            }
          }
          if(flag){
            newhistory.push(histdata[i])
          }
        }
        that.setData({
          history:newhistory
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

  },
  changeipt: function (event) {
    var that = this;
    //获取用户输入的关键字
    var usersearch = event.detail.inputdata;
    //如果用户输入的为空 那么搜索列表为空
    if (!usersearch) {
      this.setData({
        searchlist: []
      })
      return
    }
    doubanapi.getsearch({
      keys: usersearch,
      success: function (data) {
        that.setData({
          searchlist: data.data.subjects
        })
      }
    })
  },
  clickdetail: function (event) {
    var id = event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    var searchstorage = {
      id: id,
      title: title
    };
    this.data.history.push(searchstorage);
    wx.setStorage({
      data: this.data.history,
      key: 'searchstorageData',
      success: function () {

      }
    })
    wx.navigateTo({
      url: '/pages/detail/detail?type=movie&id=' + id
    })
  },
  deletehistory:function(){
    this.setData({
      showdialog:true
    })
  },
  tapDialogButton:function(event){
    if(event.detail.index==0){
      this.setData({
        showdialog:false
      })
    }else{
      wx.removeStorage({
        key: 'searchstorageData'
      })
      this.setData({
        showdialog:false,
        history:[]
      })
    }
  }
})