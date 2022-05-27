import Portal from 'portal'
import Calendar from './Calendar/Calendar'
import styles from './modal.module.scss'

interface Props {
  handleModal: () => void
}

const Modal = ({ handleModal }: Props) => {
  return (
    <Portal>
      <div className={styles.background}>
        <div className={styles.content}>
          <p>날짜</p>
          <div className={styles.calendar}>
            <Calendar />
          </div>
          <p>내용</p>
          <div className={styles.typeBtns}>
            <input type='radio' id='incomeType' name='drone' value='수입' />
            <label htmlFor='incomeType'>수입</label>
            <input type='radio' id='expendType' name='drone' value='expendType' checked />
            <label htmlFor='expendType'>지출</label>
          </div>
          <input
            type='text'
            className={styles.textInput}
            placeholder='내용을 입력하세요(예. 친구랑 카페)'
            maxLength={15}
          />
          <p>금액</p>
          <input type='text' className={styles.textInput} placeholder='금액을 입력하세요(예. 13000)' maxLength={15} />
          <div className={styles.submitBtns}>
            <button type='button' className={styles.addBtn}>
              거래내역 추가
            </button>
            <button type='button' className={styles.backBtn} onClick={handleModal}>
              취소
            </button>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
