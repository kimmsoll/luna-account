import { cx } from 'styles'
import { IContentDetail } from 'home'
import styles from './detail.module.scss'

interface Props {
  detail: IContentDetail
}

const Detail = ({ detail }: Props) => {
  const {
    date,
    amount,
    details: { content, type },
  } = detail
  const isMinus = type === 'minus'

  return (
    <dl className={styles.detail}>
      <dt>{date}</dt>
      <dd>{content}</dd>
      <dd className={cx({ [styles.red]: isMinus })}>
        {isMinus ? `- ${amount.toLocaleString()}` : `+ ${amount.toLocaleString()}`}
      </dd>
    </dl>
  )
}

export default Detail
