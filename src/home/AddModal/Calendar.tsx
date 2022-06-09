import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import dayjs from 'dayjs'

import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  setDate: (date: string) => void
}

const Calendar = ({ setDate }: Props) => {
  const [currDate, setCurrDate] = useState(new Date())

  const handleDate = (date: Date) => {
    setCurrDate(date)
    setDate(dayjs(date).format('YYYY-MM-DD'))
  }

  return (
    <ReactDatePicker
      selected={currDate}
      onChange={handleDate}
      minDate={new Date(dayjs(currDate).startOf('y').format('YYYY-MM-DD'))}
      maxDate={new Date(dayjs(currDate).endOf('y').format('YYYY-MM-DD'))}
      dateFormat='yyyy년 MM월 dd일'
    />
  )
}
export default Calendar
