import store from 'store'
import { atom } from 'recoil'
import { getData } from 'services/service'
import { IContentDetail } from 'types/type'

const storedData = store.get('data')
const data = storedData || getData().then((res) => res)

export const dataListState = atom<IContentDetail[] | []>({
  key: '#dataListState',
  default: data,
})
