export
function format_date(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(format_num).join('/')} ${[hour, minute, second].map(format_num).join(':')}`
}

function format_num(n) {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
