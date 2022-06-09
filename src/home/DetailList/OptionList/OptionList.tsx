import { ChangeEvent } from 'react'
import styles from './optionList.module.scss'

interface Props {
  handleSelect: (e: ChangeEvent<HTMLInputElement>) => void
}

const options = [
  { title: 'all', value: '전체 내역' },
  { title: 'income', value: '수입' },
  { title: 'expenditure', value: '지출' },
]

const OptionList = ({ handleSelect }: Props) => {
  return (
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
  )
}

export default OptionList
