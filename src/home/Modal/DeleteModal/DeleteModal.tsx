import { useState } from 'react'
import Portal from 'portal'
import { cx } from 'styles'

import DeleteConfirm from './DeleteConfirm/DeleteConfirm'
import Button from 'components/Button/Button'

import styles from './deleteModal.module.scss'

interface Props {
  id: number
  date: string
  content: string
  amountType: '-' | '+'
  amount: string
  handleModal: () => void
}

const DeleteModal = ({ id, date, content, amountType, amount, handleModal }: Props) => {
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleDeleteConfirm = () => {
    setConfirmDelete((prev) => !prev)
  }

  return (
    <Portal>
      <div className={styles.background}>
        <div className={styles.content}>
          <dl className={styles.detail}>
            <dt>날짜</dt>
            <dd>{date}</dd>
            <dt>내용</dt>
            <dd>{content}</dd>
            <dt>금액</dt>
            <dd className={cx(styles.amount, { [styles.red]: amountType === '-' })}>
              {amountType} {amount}
            </dd>
          </dl>
          <div className={styles.submitBtns}>
            <Button onClick={handleDeleteConfirm} size='big'>
              거래내역 삭제
            </Button>
            <Button onClick={handleModal} size='small'>
              취소
            </Button>
          </div>
        </div>
        {confirmDelete && (
          <DeleteConfirm id={id} handleDeleteModal={handleModal} handleConfirmModal={handleDeleteConfirm} />
        )}
      </div>
    </Portal>
  )
}

export default DeleteModal
