import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useRecoil } from 'hooks/state'
import { AddIcon } from 'assets/svgs'
import Button from 'components/Button/Button'
import Loading from './Loading/Loading'
import Detail from './Detail/Detail'
import { IContentDetail } from 'home'
import { dataListState } from 'states/data'
import styles from './detailList.module.scss'

interface Props {
  handleModal: () => void
  month: number
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

const filterSelected = (title: string, value: IContentDetail[]): IContentDetail[] => {
  const selections: Filtered = {
    all: [...value],
    income: value.filter((v: IContentDetail) => v.details.type === 'plus'),
    expenditure: value.filter((v: IContentDetail) => v.details.type === 'minus'),
  }
  return sortData(selections[title])
}

const DetailList = ({ handleModal, month }: Props) => {
  const [data] = useRecoil(dataListState)
  const [currData, setCurrData] = useState(data.filter((v) => month === Number(v.date.slice(5, 7))))
  const [isLoaded, setIsLoaded] = useState(false)
  const [selected, setSelected] = useState<IContentDetail[] | []>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    scrollRef.current?.scrollIntoView()
    const currTitle = filterSelected(e.currentTarget.id, currData)
    setSelected(currTitle)
  }

  useEffect(() => {
    let timeout: any
    if (!isLoaded) {
      timeout = setTimeout(() => {
        setIsLoaded(true)
      }, 1000)
    }
    return () => clearTimeout(timeout)
  })

  useEffect(() => {
    setCurrData(data.filter((v) => month === Number(v.date.slice(5, 7))))
  }, [data, month])

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
        {!isLoaded && <Loading />}
        {isLoaded && (
          <>
            <div ref={scrollRef} />
            {selected?.map((v: IContentDetail, idx: number) => {
              const key = `detail__${idx}`
              return <Detail key={key} detail={v} />
            })}
            <div className={styles.addDetail}>
              <Button onClick={handleModal}>
                <AddIcon fill='#0c6d98' />
              </Button>
              <p>거래 내역 추가하기</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DetailList
