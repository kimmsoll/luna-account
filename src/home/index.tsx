import { useState } from 'react'
import { useRecoil } from 'hooks/state'
import { dataListState } from 'states/data'
import { ArrowLeftIcon, ArrowRightIcon, FilledAddIcon } from 'assets/svgs'
import Chart from './Chart/Chart'
import DetailList from './DetailList/DetailList'
import Modal from './Modal/Modal'
import Portal from 'portal'
import Button from 'components/Button/Button'
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

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.home}>
        <header className={styles.header}>
          <h1>이 달의 소비</h1>
          <div className={styles.addBtn}>
            <Button onClick={handleOpenModal}>
              <FilledAddIcon />
            </Button>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.selectMonth}>
            <Button onClick={handleToPrevMonth}>
              <ArrowLeftIcon />
            </Button>
            <p>{month} 월</p>
            <Button onClick={handleToNextMonth}>
              <ArrowRightIcon />
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
