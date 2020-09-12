import urls from '../utils/urls'

const doubanapi ={
  //电影数据
  getmovielist:function(options){
    //加载首页数据
    wx.request({
      url: urls.movieurl,
      data:{
        count:7
      },
      success:function(res){
        if(options && options.success){
          options.success(res)
        }
      }
    })
  },
  //电视数据
  gettvlist:function(options){
    wx.request({
      url: urls.tvurl,
      data:{
        count:7
      },
      success:function(res){
        if(options && options.success){
          options.success(res)
        }
      }
    })
  },
  //综艺数据
  getshowlist:function(options){
    wx.request({
      url: urls.showurl,
      data:{
        count:7
      },
      success:function(res){
        if(options&&options.success){
          options.success(res)
        }
      }
    })
  },
  //获取电影列表数据
  getlistDatam:function(options){
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
      data:{
        count:1000
      },
      success:function(res){
        if(options&&options.success){
          options.success(res)
        }
      }
    })
  },
  //获取tv数据
  getlistDatat:function(options){
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items',
      data:{
        count:1000
      },
      success:function(res){
        if(options&&options.success){
          options.success(res)
        }
      }
    })
  },
  //获取综艺数据
  getlistDatas:function(options){
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items',
      data:{
        count:1000
      },
      success:function(res){
        if(options&&options.success){
          options.success(res)
        }
      }
    })
  },
  //获取详情页数据
  getDetail:function(options){
    var type = options.type;
    var id = options.id;
    if(type == 'movie'){
      wx.request({
        url: urls.movieDetail+id,
        success:function(res){
          var res = res.data
          if(options.success){
            options.success(res)
          }
        }
      })
    }else if(type == 'tv'){
      wx.request({
        url: urls.tvDetail+id,
        success:function(res){
          var res = res.data
          if(options.success){
            options.success(res)
          }
        }
      })
    }else{
      wx.request({
        url: urls.showDetail+id,
        success:function(res){
          var res = res.data
          if(options.success){
            options.success(res)
          }
        }
      })
    }
  },

  //获取评论的数据
  getComment:function(options){
    var type = options.type;
    var statr = options.statr?options.statr:0;
    var count = options.count?options.count:3;
    var id = options.id
    var url = '';
    if(type == 'movie'){
      url = urls.movieComment(id,statr,count)
    }else if(type == 'tv'){
      url = urls.tvComment(id,statr,count)
    }else{
      url = urls.showComment(id,statr,count)
    }
    wx.request({
      url: url,
      success:function(res){
        var data = res.data;
        options.success(data)
      }
    })
  },
  //用户搜索
  getsearch:function(options){
      wx.request({
        url: urls.searchUrl(options.keys),
        success:function(data){
          if(options.success){
            options.success(data)
          }
        }
      }) 
  }
}

export {doubanapi}