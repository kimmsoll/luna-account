import { useRecoil } from 'hooks/state'
import { monthState } from 'states/month'
import { colorThemeState } from 'states/theme'

import Button from 'components/Button/Button'
import { ArrowLeftIcon, ArrowRightIcon } from 'assets/svgs'

import styles from './monthSelector.module.scss'

const MonthSelector = () => {
  const [month, setMonth] = useRecoil(monthState)
  const [theme] = useRecoil(colorThemeState)

  const handleToPrevMonth = () => {
    if (month > 1) {
      setMonth((prev) => prev - 1)
    }
  }

  const handleToNextMonth = () => {
    if (month < 12) {
      setMonth((prev) => prev + 1)
    }
  }

  return (
    <div className={styles.selectMonth}>
      <Button onClick={handleToPrevMonth}>
        <ArrowLeftIcon fill={theme === 'light' ? '#454655' : '#d1d1e6'} />
      </Button>
      <p>{month} 월</p>
      <Button onClick={handleToNextMonth}>
        <ArrowRightIcon fill={theme === 'light' ? '#454655' : '#d1d1e6'} />
      </Button>
    </div>
  )
}

export default MonthSelector
