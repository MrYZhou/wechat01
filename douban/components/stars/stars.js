// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate: {
      type: Number,
      value: 0,
      observer(a,b,cp){
        
          this.updateRate()
        
      }
    },
    starsize: {
      type: Number,
      value: 20
    },
    fontsize: {
      type: Number,
      value: 20
    },
    fontcolor: {
      type: String,
      value: "#ccc"
    },
    istext:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lights: [],
    halfs: [],
    grays: [],
    ratetext: ''
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateRate:function(){
      var that = this;
      var rate = parseInt(this.properties.rate);
      var light = parseInt(rate / 2);
      var half_light = rate % 2;
      var gray = 5 - light - half_light;


      var lights = [],
        halfs = [],
        grays = [];

      for (var index = 1; index <= light; index++) {
        lights.push(index);
      }

      for (var index = 1; index <= half_light; index++) {
        halfs.push(index);
      }

      for (var index = 1; index <= gray; index++) {
        grays.push(index);
      }

      var ratetext = rate && rate > 0 ? (this.properties.rate).toFixed(1) : "暂无评分"
      console.log(ratetext)
      that.setData({
        lights,
        halfs,
        grays,
        ratetext:ratetext
      })
    }
  },
  lifetimes: {
    attached: function() {
      this.updateRate();
    }

  }

})