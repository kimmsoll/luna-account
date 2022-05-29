import styles from './home.module.scss'
import { AddIcon } from 'assets/svgs'
import Chart from './Chart/Chart'
import DetailList from './DetailList/DetailList'
import { useState } from 'react'
import Modal from './Modal/Modal'
import Portal from 'portal'

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
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev)
  }

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.home}>
        <header className={styles.header}>
          <h1>이 달의 소비</h1>
          <button className={styles.addBtn} type='button' onClick={handleOpenModal}>
            <AddIcon />
          </button>
        </header>
        <main className={styles.main}>
          <Chart />
          <DetailList handleModal={handleOpenModal} />
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
