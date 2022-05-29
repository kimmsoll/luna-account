import { useRecoil } from 'hooks/state'
import Portal from 'portal'
import { ChangeEvent, useState } from 'react'
import { dataListState } from 'states/data'
import Calendar from './Calendar/Calendar'
import styles from './modal.module.scss'

interface Props {
  handleModal: () => void
}

const Modal = ({ handleModal }: Props) => {
  const [date, setDate] = useState('')
  const [type, setType] = useState('')
  const [content, setContent] = useState('')
  const [amount, setAmount] = useState(0)
  const [, setData] = useRecoil(dataListState)
  const [isValidate, setIsValidate] = useState(true)

  const newData = {
    id: Date.now(),
    date,
    details: {
      type,
      content,
    },
    amount,
  }

  const handleSelectType = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.currentTarget.value)
  }
  const handleTextContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value)
  }
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.currentTarget.value))
  }

  const handleAddData = () => {
    if (newData.date === '' || newData.details.type === '' || newData.details.content === '' || newData.amount === 0) {
      setIsValidate(false)
    } else {
      setIsValidate(true)
      setData((prev) => [...prev, newData])
    }
  }

  return (
    <Portal>
      <div className={styles.background}>
        <div className={styles.content}>
          <p>날짜</p>
          <div className={styles.calendar}>
            <Calendar setDate={setDate} />
          </div>
          <p>내용</p>
          <div className={styles.typeBtns}>
            <input type='radio' id='incomeType' name='typeBtn' value='plus' onChange={handleSelectType} />
            <label htmlFor='incomeType'>수입</label>
            <input type='radio' id='expendType' name='typeBtn' value='minus' onChange={handleSelectType} />
            <label htmlFor='expendType'>지출</label>
          </div>
          <input
            type='text'
            className={styles.textInput}
            placeholder='내용을 입력하세요(예. 친구랑 카페)'
            maxLength={15}
            onChange={handleTextContent}
            value={content}
          />
          <p>금액</p>
          <input
            type='text'
            className={styles.textInput}
            placeholder='금액을 입력하세요(예. 13000)'
            maxLength={15}
            onChange={handleAmount}
            value={amount}
          />
          <div className={styles.submitBtns}>
            <button type='button' className={styles.addBtn} onClick={handleAddData}>
              거래내역 추가
            </button>
            <button type='button' className={styles.backBtn} onClick={handleModal}>
              취소
            </button>
          </div>
          {!isValidate && <p className={styles.validate}>모든 항목을 입력해주세요.</p>}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
