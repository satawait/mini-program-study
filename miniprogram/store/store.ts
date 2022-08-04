import { observable, action } from 'mobx-miniprogram'

export const userInfo = observable({
  name: 'test',
  gender: 'male',
  info: 20,
  active: 0,
  get getUserName() {
    return this.name
  },
  updateUserName: action((userName: string) => {
    userInfo.name = userName
  }),
  updateActive: action((active: number) => {
    userInfo.active = active
  })
})