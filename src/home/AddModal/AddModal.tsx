import { ChangeEvent, useState } from 'react'
import Portal from 'portal'
import dayjs from 'dayjs'
import store from 'store'
import { useRecoil } from 'hooks/state'
import { dataListState } from 'states/data'

import Button from 'components/Button/Button'
import Calendar from './Calendar'

import styles from './addModal.module.scss'

interface Props {
  handleModal: () => void
}

const handleValidate = (type: string, content: string, amount: number) => {
  if (!type || !content.trim() || !amount) {
    return false
  }
  if (typeof type !== 'string' || typeof content !== 'string' || typeof amount !== 'number') {
    return false
  }
  return true
}

const AddModal = ({ handleModal }: Props) => {
  const [data, setData] = useRecoil(dataListState)
  const [date, setDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'))
  const [type, setType] = useState('')
  const [content, setContent] = useState('')
  const [amount, setAmount] = useState(0)
  const [isValidate, setIsValidate] = useState(true)

  const handleSelectType = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.currentTarget.value)
  }

  const handleTextContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value)
  }

  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const currValue = Number(e.currentTarget.value)
    if (isNaN(currValue)) {
      e.preventDefault()
    } else setAmount(currValue)
  }

  const handleAddData = () => {
    const validatedData = handleValidate(type, content, amount)
    if (validatedData) {
      const newData = {
        id: Date.now(),
        date,
        details: {
          type,
          content,
        },
        amount,
      }
      setIsValidate(true)
      setData([...data, newData])
      store.set('data', [...data, newData])
      handleModal()
    } else setIsValidate(false)
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
          <input type='text' className={styles.textInput} maxLength={15} onChange={handleAmount} value={amount} />
          <div className={styles.submitBtns}>
            <Button onClick={handleAddData} size='big'>
              거래내역 추가
            </Button>
            <Button onClick={handleModal} size='small'>
              취소
            </Button>
          </div>
          {!isValidate && <p className={styles.validate}>양식에 맞게 모든 항목을 입력해주세요.</p>}
        </div>
      </div>
    </Portal>
  )
}

export default AddModal
