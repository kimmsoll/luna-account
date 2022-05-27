import styles from './home.module.scss'
import { AddIcon } from 'assets/svgs'
import Chart from './Chart/Chart'
import DetailList from './DetailList/DetailList'

export interface ContentDetail {
  id: number
  date: string
  details: {
    type: string
    content: string
  }
  amount: number
}

export interface Contents {
  value: ContentDetail[]
}

const Home = () => {
  const data: Contents = {
    value: [
      {
        id: 1,
        date: '2022-05-27',
        details: {
          type: 'minus',
          content: '달걀 사기',
        },
        amount: 3000,
      },
      {
        id: 2,
        date: '2022-05-27',
        details: {
          type: 'minus',
          content: '미용실',
        },
        amount: 100000,
      },
      {
        id: 3,
        date: '2022-05-27',
        details: {
          type: 'plus',
          content: '용돈',
        },
        amount: 300000,
      },
      {
        id: 4,
        date: '2022-05-27',
        details: {
          type: 'plus',
          content: '용돈',
        },
        amount: 300000,
      },
      {
        id: 5,
        date: '2022-05-27',
        details: {
          type: 'plus',
          content: '용돈',
        },
        amount: 300000,
      },
    ],
  }
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.home}>
        <header className={styles.header}>
          <h1>이 달의 소비</h1>
          <button className={styles.addBtn} type='button'>
            <AddIcon />
          </button>
        </header>
        <main className={styles.main}>
          <Chart />
          <DetailList data={data} />
        </main>
      </div>
    </div>
  )
}

export default Home
