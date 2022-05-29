import dayjs from 'dayjs'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  setDate: (date: string) => void
}

const Calendar = ({ setDate }: Props) => {
  const [currDate, setCurrDate] = useState(new Date())

  const handleDate = (date: Date) => {
    setCurrDate(date)
    setDate(dayjs(currDate).format('YYYY-MM-DD'))
  }

  return <ReactDatePicker selected={currDate} onChange={handleDate} dateFormat='yyyy년 MM월 dd일' />
}
export default Calendar
