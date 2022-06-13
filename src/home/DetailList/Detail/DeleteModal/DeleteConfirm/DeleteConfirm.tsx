import Portal from 'portal'
import { useRecoil } from 'hooks/state'
import { dataListState } from 'states/data'

import Button from 'components/Button/Button'

import styles from './deleteConfirm.module.scss'

interface Props {
  id: number
  handleDeleteModal: () => void
  handleConfirmModal: () => void
}

const DeleteConfirm = ({ id, handleDeleteModal, handleConfirmModal }: Props) => {
  const [data, setData] = useRecoil(dataListState)

  const handleDeleteData = () => {
    setData(data.filter((v) => v.id !== id))
    handleDeleteModal()
    handleConfirmModal()
  }

  return (
    <Portal>
      <div className={styles.background}>
        <div className={styles.content}>
          <p>거래 내역을 지우시겠습니까?</p>
          <div className={styles.submitBtns}>
            <Button onClick={handleDeleteData} size='big'>
              확인
            </Button>
            <Button onClick={handleConfirmModal} size='small'>
              취소
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default DeleteConfirm
