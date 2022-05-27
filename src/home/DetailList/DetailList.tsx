import { AddIcon } from 'assets/svgs'
import { ContentDetail, Contents } from 'home'
import { ChangeEvent, useState } from 'react'
import Detail from './Detail/Detail'
import styles from './detailList.module.scss'

interface Props {
  data: Contents
}

const options = [
  { title: 'all', value: '전체 내역' },
  { title: 'income', value: '수입' },
  { title: 'expenditure', value: '지출' },
]

const DetailList = ({ data }: Props) => {
  const [contents, setContents] = useState(data.value)

  const filterSelected = (title: string): ContentDetail[] => {
    const selections: any = {
      all: data.value,
      income: data.value.filter((v) => v.details.type === 'plus'),
      expenditure: data.value.filter((v) => v.details.type === 'minus'),
    }
    return selections[title]
  }

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const currContents = filterSelected(e.currentTarget.id)
    setContents(currContents)
  }

  return (
    <div className={styles.detailList}>
      <div className={styles.optionList}>
        {options.map((option, idx) => {
          const key = `option__${idx}`
          return (
            <div key={key} className={styles.option}>
              <input id={option.title} type='radio' name='tab' onChange={handleSelect} className={styles.optionInput} />
              <label htmlFor={option.title}>{option.value}</label>
            </div>
          )
        })}
      </div>
      <div className={styles.details}>
        {contents.map((v, idx) => {
          const key = `detail__${idx}`
          return <Detail key={key} detail={v} />
        })}
        <div className={styles.addDetail}>
          <button className={styles.addBtn} type='button'>
            <AddIcon />
          </button>
          <p>거래 내역 추가하기</p>
        </div>
      </div>
    </div>
  )
}

export default DetailList
