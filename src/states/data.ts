import store from 'store'
import { getData } from 'services/service'
import { IContentDetail } from 'home/index'
import { atom } from 'recoil'

const storedData = store.get('data')
const data = storedData.length ? getData().then((res) => [...res, ...storedData]) : getData().then((res) => res)

export const dataListState = atom<IContentDetail[] | []>({
  key: '#dataListState',
  default: data,
})
