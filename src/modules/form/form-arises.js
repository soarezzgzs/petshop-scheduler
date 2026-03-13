import dayjs from "dayjs"
import { scheduleCreate } from "../../services/schedules-create"
import { loadSchedules, busyTimes } from "../schedules/load-schedules"
import { schedulesFetch } from "../../services/schedules-fetch"


const dateInput = document.getElementById("date-agendamento").value

const modal = document.querySelector(".modal")
const button = document.getElementById("openForm")
const close = document.getElementById("close")

button.addEventListener("click", () => {
  modal.classList.add("active")
})

close.addEventListener("click", () => {
  modal.classList.remove("active")
})

const form = document.querySelector("form")

form.addEventListener("submit", async (event) => {

  event.preventDefault()

  const namePerson = document.getElementById("namePerson").value
  const namePet = document.getElementById("namePet").value
  const tel = document.getElementById("tel").value
  const description = document.getElementById("description").value
  const date = document.getElementById("date-agendamento").value
  const time = document.getElementById("time-agendamento").value

  const today = dayjs().format("YYYY-MM-DD")
  const now = dayjs()

  if (dayjs(date).isBefore(today)) {
    alert("Não é possível agendar em datas anteriores.")
    return
  }

  const selectedDateTime = dayjs(`${date} ${time}`)

  if (dayjs(date).isSame(today) && selectedDateTime.isBefore(now)) {
    alert("Não é possível agendar em horários que já passaram.")
    return
  }

  const schedules = await schedulesFetch()

  const conflict = schedules.find(schedule =>
    schedule.date === date && schedule.time === time
  )

  if (conflict) {
    alert("Esse horário já está ocupado nesse dia.")
    return
  }

  if(!namePerson || !namePet || !tel || !description || !date || !time) {
    alert("Por favor, preencha todos os campos.")
    return
  }

  const newSchedule = {
    id: new Date().getTime(),
    namePerson,
    namePet,
    tel,
    description,
    date,
    time
  }

  await scheduleCreate(newSchedule)

  loadSchedules(date)

  form.reset()

  alert("Agendamento criado com sucesso!")

  modal.classList.remove("active")

})