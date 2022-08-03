// components/test/test.ts
import { ComponentWithStore } from "mobx-miniprogram-bindings";
import { userInfo } from '../../store/store'
const myBehaviors = require('../../behaviors/behaviors')
ComponentWithStore({
  behaviors: [myBehaviors],
  storeBindings: {
    store: userInfo,
    fields: ['name'],
    actions: {
      updateUserName: 'updateUserName'
    }
  },
  options: {
    multipleSlots: true, // 启用多个插槽
    pureDataPattern: /^_/ // 定义纯数据字段
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type: Number,
      value: 10
    }
  },
  lifetimes: {
    created: () => {
      console.log('created')
    },
    attached: () => {
      console.log('attached')
    },
    detached: () => {
      console.log('detached')
    }
  },

  pageLifetimes: {
    show: () => {
      console.log('show')
    },
    hide: () => {
      console.log('hide')
    },
    resize: () => {
      console.log('resize')
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    countObject: {
      count: 0
    },
    _pureData: 0
  },

  observers: {
    'countObject.**': function(obj: {count: number}) {
      console.log(obj.count)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapHandler() {
      if (this.data.countObject.count >= this.properties.max) {
        wx.showToast({
          title: '已经最大了',
          icon: 'none'
        })
        return
      }
      this.setData({
        countObject: {
          count: this.data.countObject.count + 1
        }
      })
    },
    changeMaxCount() {
      this.triggerEvent('changeMaxCount')
    },
    updateNewUserName() {
      this.updateUserName('new')
    }
  }
})
