import { observable, action } from 'mobx-miniprogram'

export const userInfo = observable({
  name: 'test',
  gender: 'male',
  get getUserName() {
    return this.name
  },
  updateUserName: action((userName: string) => {
    userInfo.name = userName
  })
})