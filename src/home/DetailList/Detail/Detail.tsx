import { useState } from 'react'
import Portal from 'portal'
import { cx } from 'styles'
import { IContentDetail } from 'types/type'

import DeleteModal from 'home/DetailList/Detail/DeleteModal/DeleteModal'

import styles from './detail.module.scss'

interface Props {
  detail: IContentDetail
}

const Detail = ({ detail }: Props) => {
  const {
    id,
    date,
    amount,
    details: { content, type },
  } = detail
  const isMinus = type === 'minus'
  const isType = isMinus ? '-' : '+'
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleModal = () => {
    setOpenDeleteModal((prev) => !prev)
  }

  return (
    <>
      <button type='button' onClick={handleModal} className={styles.detailWrapper}>
        <dl className={styles.detail}>
          <dt>{date}</dt>
          <dd>{content}</dd>
          <dd className={cx({ [styles.red]: isMinus })}>
            {isType} {amount.toLocaleString()}
          </dd>
        </dl>
      </button>
      {openDeleteModal && (
        <Portal>
          <DeleteModal
            id={id}
            date={date}
            content={content}
            amountType={isType}
            amount={amount.toLocaleString()}
            handleModal={handleModal}
          />
        </Portal>
      )}
    </>
  )
}

export default Detail
