import styles from './loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner} />
    </div>
  )
}

export default Loading
