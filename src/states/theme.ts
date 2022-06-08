import store from 'store'
import { atom } from 'recoil'

const theme = store.get('theme') || 'light'

export const colorThemeState = atom({
  key: '#colorThemeState',
  default: theme,
})
