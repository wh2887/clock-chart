import $ from 'jquery'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(customParseFormat)
dayjs.extend(dayOfYear)

// const color = '#aff5b4'
const year = dayjs().year()
const firstDay = `${year}-01-01`
const today = dayjs(`${firstDay}`).day() // 一周的第几天是第一列的第几个   ==> 圆点
const starting = dayjs().dayOfYear() + today

let doneStorage = localStorage.getItem('doneKey')
let doneList = JSON.parse(doneStorage) || []
window.onload = () => {
  render()
}


record.addEventListener('click', () => {
  if (doneList.indexOf(starting) < 0) {
    doneList.push(starting)
    localStorage.setItem('doneKey', JSON.stringify(doneList))
  } else {
    window.alert('重复打卡，本次无效！')
    return
  }
  render()
})

const render = () => {
  doneList.forEach((item) => {
      $('.cell:nth-child(' + item + ')').addClass('done')
    }
  )
}
