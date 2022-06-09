import { useEffect, useState } from 'react'
import { VictoryPie } from 'victory'
import { useRecoil } from 'hooks/state'
import { dataListState } from 'states/data'
import { colorThemeState } from 'states/theme'
import { monthState } from 'states/month'
import { IContentDetail } from 'types/type'

import { WalletIcon } from 'assets/svgs'

import styles from './chart.module.scss'

const getSum = (data: IContentDetail[] | [], type: string) => {
  if (!data.length) return 0
  const targetData = data.filter((v) => v.details.type === type).map((v) => v.amount)

  if (targetData.length > 1) {
    return targetData.reduce((prev, curr) => prev + curr)
  }
  if (targetData.length === 1) {
    return targetData[0]
  }
  return 0
}

const Chart = () => {
  const [data] = useRecoil(dataListState)
  const [month] = useRecoil(monthState)
  const [theme] = useRecoil(colorThemeState)
  const [currData, setCurrData] = useState(data.filter((v) => month === Number(v.date.slice(5, 7))))

  const expenditure = getSum(currData, 'minus')
  const income = getSum(currData, 'plus')
  const isEmpty = !expenditure && !income

  useEffect(() => {
    setCurrData(data.filter((v) => month === Number(v.date.slice(5, 7))))
  }, [data, month])

  return (
    <div className={styles.chart}>
      {isEmpty && (
        <div className={styles.noChart}>
          <p>{month}월 거래 내역이 없습니다</p>
          <WalletIcon fill={theme === 'light' ? '#9cadbc' : '#a9aabc'} />
        </div>
      )}
      {!isEmpty && (
        <VictoryPie
          data={
            (income === 0 && [{ x: '지출', y: expenditure }]) ||
            (expenditure === 0 && [{ x: '수입', y: income }]) || [
              { x: '수입', y: income },
              { x: '지출', y: expenditure },
            ]
          }
          padding={{ top: 0, bottom: 0 }}
          height={120}
          width={300}
          innerRadius={20}
          labelRadius={30}
          style={{ labels: { fontSize: 12, fill: theme === 'light' ? 'white' : '#d1d1e6' } }}
          colorScale={theme === 'light' ? ['#98C7CA', '#0c6d98'] : ['#494454', '#8d76d8']}
        />
      )}
      <div className={styles.chartDetail}>
        <dl className={styles.expenditure}>
          <dt>나간 돈</dt>
          <dd>₩ {expenditure.toLocaleString()}</dd>
        </dl>
        <dl>
          <dt>들어온 돈</dt>
          <dd>₩ {income.toLocaleString()}</dd>
        </dl>
      </div>
    </div>
  )
}

export default Chart
