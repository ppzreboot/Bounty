import { format_date } from '../../common/date'

Page({
  data: {
    hello: 'Hello World',
    date: format_date(new Date()),
  }
})
