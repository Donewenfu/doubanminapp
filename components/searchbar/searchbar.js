// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isnav:{
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
    inputchange:function(event){
        //获取输入的信息
        var inputdata = event.detail.value;
        var detail = {inputdata:inputdata}
        this.triggerEvent('searchinput',detail)
    }
  }
})
