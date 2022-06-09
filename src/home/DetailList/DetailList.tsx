import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useRecoil } from 'hooks/state'
import { dataListState } from 'states/data'
import { colorThemeState } from 'states/theme'
import { monthState } from 'states/month'
import { IContentDetail } from 'types/type'

import OptionList from './OptionList/OptionList'
import Button from 'components/Button/Button'
import Loading from './Loading/Loading'
import Detail from './Detail/Detail'
import { AddIcon } from 'assets/svgs'

import styles from './detailList.module.scss'

interface Props {
  handleAddModal: () => void
}

interface Filtered {
  [key: string]: IContentDetail[]
}

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

const DetailList = ({ handleAddModal }: Props) => {
  const [month] = useRecoil(monthState)
  const [data] = useRecoil(dataListState)
  const [theme] = useRecoil(colorThemeState)

  const [currData, setCurrData] = useState(data.filter((v) => month === Number(v.date.slice(5, 7))))
  const [selectedOption, setSelectedOption] = useState<IContentDetail[] | []>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleSelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    scrollRef.current?.scrollIntoView()
    const currTitle = filterSelected(e.currentTarget.id, currData)
    setSelectedOption(currTitle)
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
      <OptionList handleSelect={handleSelectOption} />
      <div className={styles.details}>
        {!isLoaded && <Loading />}
        {isLoaded && (
          <>
            <div ref={scrollRef} />
            {selectedOption?.map((v: IContentDetail, idx: number) => {
              const key = `detail__${idx}`
              return <Detail key={key} detail={v} />
            })}
            <div className={styles.addDetail}>
              <Button onClick={handleAddModal}>
                <AddIcon fill={theme === 'light' ? '#0c6d98' : '#8d76d8'} />
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
