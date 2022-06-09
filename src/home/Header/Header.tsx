import { useEffect } from 'react'
import store from 'store'
import { useRecoil } from 'hooks/state'
import { colorThemeState } from 'states/theme'

import Button from 'components/Button/Button'
import { DarkModeIcon, FilledAddIcon, LightModeIcon } from 'assets/svgs'

import styles from './header.module.scss'

interface Props {
  handleAddModal: () => void
}

const Header = ({ handleAddModal }: Props) => {
  const [theme, setTheme] = useRecoil(colorThemeState)

  const handleToggleColorTheme = () => {
    setTheme((prev: 'light' | 'dark') => (prev === 'light' ? 'dark' : 'light'))
    store.set('theme', theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', theme)
  }, [theme])

  return (
    <header className={styles.header}>
      <Button onClick={handleToggleColorTheme}>{theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}</Button>
      <h1>이 달의 소비</h1>
      <Button onClick={handleAddModal}>
        <FilledAddIcon fill={theme === 'light' ? '#0c6d98' : '#897bac'} />
      </Button>
    </header>
  )
}

export default Header
