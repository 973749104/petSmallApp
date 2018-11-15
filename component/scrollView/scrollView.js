Component({
  properties: {
    sourceData:{
      type: Object,
      value: [],
      observer: function(data){
        this._initData(data)
      }
    },
    key: {
      type: String,
      value: 'id'
    }
  },
  data: {
    // 设置手指触摸起点
    startX: '',
    listData: []
  },
  methods: {
    /**
     * 初始化数据
     */
    _initData: function(data) {
      if(data.length <= 0 ) {
        this.setData({
          listData: []
        })
        return false
      }
      // 循环附加属性
      for(let i = 0; i < data.length; i++){
        data[i].translateX = 0;
      }
      // 修改原数据
      this.setData({
        listData: data
      })
    },
    /**
     * 设置滑动数据
     */
    _setTouchMoveData: function (data, index, translateX) {
      for (let i = 0; i < data.length; i++) {
        if(i == index){
          data[i].translateX = translateX;
        }else{
          data[i].translateX = 0;
        }
      }
      // 修改原数据
      this.setData({
        listData: data
      })
    },
    /**
     * 设置手指触摸起点
     */
    _onTouchStart: function(e) {
      // 获取初始位置值
      const startX = e.touches[0].clientX;
      // 更新数据
      this.setData({
        startX: startX
      })
    },
    /**
     * 触摸滑动
     */
    _onTouchMove: function(e) {
      // 获取操作的节点对象下标
      const index = e.currentTarget.dataset.index;
      // 获取数据节点对象
      let list = this.data.listData;
      // 设置移动距离
      let translateX = 0;
      if(e.touches.length == 1){
        // 判断移动方向
        let moveX = e.touches[0].clientX;
        // 起始点与移动方向差值
        let diffX = moveX - this.data.startX;
        // 如果移动位置小于0 位置不变
        if(diffX >= 0){
          translateX = 0;
        }else if(diffX <= -150){
          translateX = -150;
        }else{
          translateX = diffX;
        }
      }
      // 修改对象属性
      this._setTouchMoveData(list, index, translateX);
    },
    /**
     * 滑动结束
     */
    _onTouchEnd: function(e) {
      // 获取操作的节点对象下标
      const { index } = e.currentTarget.dataset;
      // 结束后的X位置
      const { clientX } = e.changedTouches[0]
      // 获取数据节点对象
      let { listData, startX } = this.data;
      // 设置移动距离
      let translateX = 0;
      // 如果没有发生距离，视为tap事件
      if (clientX == startX) {
        // 判断 如果小于-150,点击则关闭
        if (listData[index].translateX <= -150) {
          this._initData(listData);
          return false;
        }
        // 获取文章id
        const { keyvalue } = e.currentTarget.dataset;
        this._clickRead(keyvalue);
        return false;
      }
      // 判断结束距离
      if(e.changedTouches.length == 1){
        // 开始与结束的距离差值
        let diffX = clientX - startX;
        translateX = diffX <= -75 ? -150 : 0;
      }
      // 修改对象属性
      this._setTouchMoveData(listData, index, translateX);
    },
    /**
     * 点击删除确认
     */
    _clickRemove: function(e) {
      const { keyvalue, index } = e.currentTarget.dataset;
      const { key } = this.data
      const data = {
        index
      }
      data[key] = keyvalue
      const self = this
      // 显示是否删除
      wx.showModal({
        title: '提示',
        content: '确认删除？',
        success: res => {
          if(res.confirm){
            // 删除回调
            self.triggerEvent('onConfirm', data)
          }else{
            // 取消回调
            self.triggerEvent('onCancel')
          }
        }
      })
    },
    /**
     * 点击事件
     */
    _clickRead: function(val) {
      const { key } = this.data
      const data = {}
      data[key] = val
      // 关闭所有滑动
      this._initData(this.data.listData);
      // 点击回调
      this.triggerEvent('onClick', data)
    }
  },
  created: function(){
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