import { getData } from 'services/service'
import { IContentDetail } from 'home/index'
import { atom } from 'recoil'

const data = getData().then((res) => res)

export const dataListState = atom<IContentDetail[]>({
  key: '#dataListState',
  default: data,
})
