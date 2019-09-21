// components/indexmodule/indexmodule.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:""
    },
    moreurl:{
      type:String,
      value:""
    },
    items:{
      type:Array,
      value:[]
    },
    type:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    arr:[1,2,3]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
