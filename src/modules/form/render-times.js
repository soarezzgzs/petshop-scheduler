import { busyTimes } from "../schedules/load-schedules"
import { getAvailableTimes } from "../../utils/available-times"

export function renderAvailableTimes(){

  const select = document.getElementById("time-agendamento")

  select.innerHTML = ""

  const availableTimes = getAvailableTimes(busyTimes)

  availableTimes.forEach(time => {

    const option = document.createElement("option")

    option.value = time
    option.textContent = time

    select.appendChild(option)

  })

}