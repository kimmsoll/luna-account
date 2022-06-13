import { useEffect, useState } from 'react'
import Portal from 'portal'
import store from 'store'
import { useRecoil } from 'hooks/state'
import { dataListState } from 'states/data'

import Chart from './Chart/Chart'
import Header from './Header/Header'
import AddModal from './AddModal/AddModal'
import DetailList from './DetailList/DetailList'
import MonthSelector from './MonthSelector/MonthSelector'

import styles from './home.module.scss'

const Home = () => {
  const [data] = useRecoil(dataListState)
  const [openAddModal, setOpenAddModal] = useState(false)

  const handleOpenAddModal = () => {
    setOpenAddModal((prev) => !prev)
  }

  useEffect(() => {
    if (data.length) {
      store.set('data', data)
    }
  }, [data])

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
