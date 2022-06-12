import { ChangeEvent } from 'react'
import styles from './optionList.module.scss'

interface Props {
  handleSelect: (e: ChangeEvent<HTMLInputElement>) => void
  isChecked: string
}

const options = [
  { title: 'all', value: '전체 내역' },
  { title: 'income', value: '수입' },
  { title: 'expenditure', value: '지출' },
]

const OptionList = ({ handleSelect, isChecked }: Props) => {
  return (
    <div className={styles.optionList}>
      {options.map((option, idx) => {
        const key = `option__${idx}`
        const { title, value } = option
        return (
          <div key={key} className={styles.option}>
            <input
              id={title}
              type='radio'
              name='tab'
              checked={isChecked === title}
              onChange={handleSelect}
              className={styles.optionInput}
            />
            <label htmlFor={title}>{value}</label>
          </div>
        )
      })}
    </div>
  )
}

export default OptionList
