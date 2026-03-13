import { schedulesFetch } from "../../services/schedules-fetch"
import { renderSchedule } from "./render"
import { getBusyTimes } from "../../utils/busy-time"
import { renderAvailableTimes } from "../form/render-times"
import dayjs from "dayjs"

export let busyTimes = []

export async function loadSchedules(date){

  const schedules = await schedulesFetch()

  const filtered = schedules.filter(schedule =>
    dayjs(schedule.date).isSame(date, "day")
  )

  busyTimes = getBusyTimes(filtered)

  document.getElementById("morning-list").innerHTML = ""
  document.getElementById("afternoon-list").innerHTML = ""
  document.getElementById("night-list").innerHTML = ""

  filtered.forEach(schedule => {
    renderSchedule(schedule)
  })

  renderAvailableTimes()

}
