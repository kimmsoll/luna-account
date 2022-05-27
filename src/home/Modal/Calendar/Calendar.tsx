import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <ReactDatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} dateFormat='yyyy년 MM월 dd일' />
  )
}
export default Calendar
