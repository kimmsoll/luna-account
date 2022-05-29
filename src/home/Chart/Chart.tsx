import { IContentDetail } from 'home'
import { useRecoil } from 'hooks/state'
import { dataListState } from 'states/data'
import { VictoryPie } from 'victory'
import styles from './chart.module.scss'

const getSum = (data: IContentDetail[], type: string) => {
  return data
    .filter((v) => v.details.type === type)
    .map((v) => v.amount)
    .reduce((prev, curr) => prev + curr)
}

const Chart = () => {
  const [data] = useRecoil(dataListState)
  const expenditure = getSum(data, 'minus')
  const income = getSum(data, 'plus')

  return (
    <div className={styles.chart}>
      <div className={styles.chartImg}>
        <VictoryPie
          data={[
            { x: '수입', y: income },
            { x: '지출', y: expenditure },
          ]}
          innerRadius={50}
          labelRadius={73}
          style={{ labels: { fontSize: 24, fill: 'white' } }}
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
