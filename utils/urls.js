const urls = {
  movieurl:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
  tvurl:'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items',
  showurl:'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items',
  movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
  tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  showDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  movieComment:function(id,start=0,count=3){
      return 'https://m.douban.com/rexxar/api/v2/movie/' + id + '/interests?count=' + count + '&start=' + start
  },
  tvComment:function(id,start=0,count=3){
      return 'https://m.douban.com/rexxar/api/v2/tv/' + id + '/interests?count=' + count + '&start=' + start
  },
  showComment:function(id,start=0,count=3){
    return this.tvComment(id,start,count)
  },
  searchUrl: function (q) {
    return "https://m.douban.com/rexxar/api/v2/search?type=movie&q=" + q
  }
}

export default urls