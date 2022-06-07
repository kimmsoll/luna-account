import { IContentDetail } from 'home'
import { useRecoil } from 'hooks/state'
import { useEffect, useState } from 'react'
import { dataListState } from 'states/data'
import { VictoryPie } from 'victory'
import styles from './chart.module.scss'

interface Props {
  month: number
}

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

const Chart = ({ month }: Props) => {
  const [data] = useRecoil(dataListState)
  const [currData, setCurrData] = useState(data.filter((v) => month === Number(v.date.slice(5, 7))))
  const expenditure = getSum(currData, 'minus')
  const income = getSum(currData, 'plus')

  useEffect(() => {
    setCurrData(data.filter((v) => month === Number(v.date.slice(5, 7))))
  }, [data, month])

  return (
    <div className={styles.chart}>
      <div className={styles.chartImg}>
        <VictoryPie
          data={
            (income === 0 && [{ x: '지출', y: expenditure }]) ||
            (expenditure === 0 && [{ x: '수입', y: income }]) || [
              { x: '수입', y: income },
              { x: '지출', y: expenditure },
            ]
          }
          innerRadius={50}
          labelRadius={73}
          style={{ labels: { fontSize: 32, fill: 'white' } }}
          colorScale={['#98C7CA', '#0c6d98']}
        />
      </div>
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
