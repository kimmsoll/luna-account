import { atom } from 'recoil'

const month = new Date().getMonth() + 1

export const monthState = atom({
  key: '#monthState',
  default: month,
})
