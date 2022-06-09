import { useState } from 'react'
import Portal from 'portal'

import Header from './Header/Header'
import Chart from './Chart/Chart'
import DetailList from './DetailList/DetailList'
import AddModal from './AddModal/AddModal'
import MonthSelector from './MonthSelector/MonthSelector'

import styles from './home.module.scss'

const Home = () => {
  const [openAddModal, setOpenAddModal] = useState(false)

  const handleOpenAddModal = () => {
    setOpenAddModal((prev) => !prev)
  }

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.home}>
        <Header handleAddModal={handleOpenAddModal} />
        <main className={styles.main}>
          <MonthSelector />
          <Chart />
          <DetailList handleAddModal={handleOpenAddModal} />
          {openAddModal && (
            <Portal>
              <AddModal handleModal={handleOpenAddModal} />
            </Portal>
          )}
        </main>
      </div>
    </div>
  )
}

export default Home
