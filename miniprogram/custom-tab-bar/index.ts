// custom-tab-bar/index.ts
import { ComponentWithStore } from "mobx-miniprogram-bindings";
import { userInfo } from '../store/store'
ComponentWithStore({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  storeBindings: {
    store: userInfo,
    fields: ['info', 'active'],
    actions: {
      updateUserName: 'updateUserName',
      updateActive: 'updateActive'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    list: [{
      "pagePath": "/pages/list/list",
      "text": "list",
      "iconPath": "/assets/imgs/tabs/home.png",
      "selectedIconPath": "/assets/imgs/tabs/home-active.png",
      "info": true
    }, {
      "pagePath": "/pages/index/index",
      "text": "index",
      "iconPath": "/assets/imgs/tabs/message.png",
      "selectedIconPath": "/assets/imgs/tabs/message-active.png"
    }, {
      "pagePath": "/pages/logs/logs",
      "text": "logs",
      "iconPath": "/assets/imgs/tabs/contact.png",
      "selectedIconPath": "/assets/imgs/tabs/contact-active.png"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event: WechatMiniprogram.TouchEvent) {
      // event.detail 的值为当前选中项的索引
        // @ts-ignore
      this.updateActive(event.detail)
      wx.switchTab({
        // @ts-ignore
        url: this.data.list[event.detail].pagePath
      })
    }
  }
})
