//Component Object
Component({
  properties: {
    title: {
      type: String,
      value: '弹框标题'
    }
  },
  data: {
    isShow: false
  },
  methods: {
    // 显示dialog
    showDialog: function() {
      this.setData({
        isShow: true
      })
    },
    // 隐藏dialog
    hideDialog: function() {
      this.setData({
        isShow: false
      })
    }
  },
  created: function(){
    console.log(11111)
  },
  attached: function(){

  },
  ready: function(){

  },
  moved: function(){

  },
  detached: function(){

  },
});