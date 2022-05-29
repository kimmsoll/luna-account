import { AddIcon } from 'assets/svgs'
import { IContentDetail } from 'home'
import { useRecoil } from 'hooks/state'
import { ChangeEvent, useState } from 'react'
import { dataListState } from 'states/data'
import Detail from './Detail/Detail'
import styles from './detailList.module.scss'

interface Props {
  handleModal: () => void
}

interface Filtered {
  [key: string]: IContentDetail[]
}

const options = [
  { title: 'all', value: '전체 내역' },
  { title: 'income', value: '수입' },
  { title: 'expenditure', value: '지출' },
]

const sortData = (data: IContentDetail[]) => {
  return data.sort((a: IContentDetail, b: IContentDetail) => {
    return a.date > b.date ? -1 : 1
  })
}

const DetailList = ({ handleModal }: Props) => {
  const [data] = useRecoil(dataListState)
  const [selected, setSelected] = useState<IContentDetail[] | []>([])

  const filterSelected = (title: string): IContentDetail[] => {
    const selections: Filtered = {
      all: [...data],
      income: data.filter((v: IContentDetail) => v.details.type === 'plus'),
      expenditure: data.filter((v: IContentDetail) => v.details.type === 'minus'),
    }
    return sortData(selections[title])
  }

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const currTitle = filterSelected(e.currentTarget.id)
    setSelected(currTitle)
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
        {selected?.map((v: IContentDetail, idx: number) => {
          const key = `detail__${idx}`
          return <Detail key={key} detail={v} />
        })}
        <div className={styles.addDetail}>
          <button className={styles.addBtn} type='button' onClick={handleModal}>
            <AddIcon />
          </button>
          <p>거래 내역 추가하기</p>
        </div>
      </div>
    </div>
  )
}

export default DetailList
