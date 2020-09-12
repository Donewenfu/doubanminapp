// components/star/star.js
Component({
  externalClasses:['commentstar'],
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type:Number,
      value:0,
      observer:function(newvalue,oldvalue){
        this.upstar()
      }
    },
    fontsize:{
      type:Number,
      value:20
    },
    starsize:{
      type:Number,
      value:20
    },
    ishowtext:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    upstar:function(){
      //获取电影的评分
      var starnum = this.properties.num;
      //计算点亮的星星数量
      var light = parseInt(starnum/2);
      var lights = [];
      //获取一半点亮星星的数量
      var half  = parseInt(starnum%2);
      var halfs = [];
      //获取没有点亮的星星的数量
      var gary  = parseInt(5-light-half);
      var garys = [];
      
      for(var i = 1;i<=light;i++){
        lights.push(i)
      };
      for(var i = 1;i<=gary;i++){
        garys.push(i)
      };
      for(var i = 1;i<=half;i++){
        halfs.push(i)
      };
      var startext = starnum>0 || starnum ?starnum.toFixed(1):'未评分'
      //把计算好的星星数量设置到data中
      this.setData({
        lights,
        garys,
        halfs,
        startext
      })
    }
  },
  //组件的生命周期
  lifetimes:{
    attached:function(){
      this.upstar()
    }
  }
})
