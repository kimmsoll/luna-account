import { useEffect, useState } from 'react'
import store from 'store'
import { useRecoil } from 'hooks/state'
import { dataListState } from 'states/data'
import { colorThemeState } from 'states/theme'
import { ArrowLeftIcon, ArrowRightIcon, DarkModeIcon, FilledAddIcon, LightModeIcon } from 'assets/svgs'
import Chart from './Chart/Chart'
import DetailList from './DetailList/DetailList'
import Modal from './Modal/Modal'
import Portal from 'portal'
import Button from 'components/Button'
import styles from './home.module.scss'

export interface IContentDetail {
  id: number
  date: string
  details: {
    type: string
    content: string
  }
  amount: number
}

const Home = () => {
  const [data] = useRecoil(dataListState)
  const [theme, setTheme] = useRecoil(colorThemeState)
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev)
  }

  const handleToPrevMonth = () => {
    const prevMonthData = data.filter((v) => Number(v.date.slice(5, 7)) + 1 === month)
    if (prevMonthData.length) {
      setMonth((prev) => prev - 1)
    }
  }

  const handleToNextMonth = () => {
    const nextMonthData = data.filter((v) => Number(v.date.slice(5, 7)) - 1 === month)
    if (nextMonthData.length) {
      setMonth((prev) => prev + 1)
    }
  }

  const handleToggleColorTheme = () => {
    setTheme((prev: 'light' | 'dark') => (prev === 'light' ? 'dark' : 'light'))
    store.set('theme', theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', theme)
  }, [theme])

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.home}>
        <header className={styles.header}>
          <Button onClick={handleToggleColorTheme}>{theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}</Button>
          <h1>이 달의 소비</h1>
          <Button onClick={handleOpenModal}>
            <FilledAddIcon fill={theme === 'light' ? '#0c6d98' : '#897bac'} />
          </Button>
        </header>
        <main className={styles.main}>
          <div className={styles.selectMonth}>
            <Button onClick={handleToPrevMonth}>
              <ArrowLeftIcon fill={theme === 'light' ? '#454655' : '#d1d1e6'} />
            </Button>
            <p>{month} 월</p>
            <Button onClick={handleToNextMonth}>
              <ArrowRightIcon fill={theme === 'light' ? '#454655' : '#d1d1e6'} />
            </Button>
          </div>
          <Chart month={month} />
          <DetailList handleModal={handleOpenModal} month={month} />
          {openModal && (
            <Portal>
              <Modal handleModal={handleOpenModal} />
            </Portal>
          )}
        </main>
      </div>
    </div>
  )
}

export default Home
