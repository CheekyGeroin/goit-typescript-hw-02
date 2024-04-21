/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Mon = 'monday',
  Tue = 'tuesday',
  Wed = "wednesday",
  Thu = "thursday",
  Fri = 'friday',
  Sat = 'saturday',
  Sun = "sunday"

}

const isWeekend = (day:WeekDays):boolean => {
  if (day === WeekDays.Sat || day === WeekDays.Sun) {
    return true
  } else {
    return false
  }

}

