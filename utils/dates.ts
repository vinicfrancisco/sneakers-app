import addHours from 'date-fns/addHours'
import format from 'date-fns/format'
import getDate from 'date-fns/getDate'

export const getDayInMonth = (dateInISO: string): number => {
  return getDate(addHours(new Date(dateInISO), 3))
}

export const getMonthAbbreviation = (dateInISO: string): string => {
  return format(addHours(new Date(dateInISO), 3), 'MMM')
}
