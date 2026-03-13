import { getPeriod } from "./period"

export function renderSchedule(schedule){

  const period = getPeriod(schedule.time)

  const list = document.getElementById(`${period}-list`)

  const li = document.createElement("li")

  li.classList.add("person")

  li.innerHTML = `
    <span>${schedule.time}</span>
    <span>${schedule.namePet} / </span>
    <span class="name">${schedule.namePerson}</span>
    <p>${schedule.description}</p>
    <button data-id="${schedule.id}" class="btn-remove">
      Remover agendamento
    </button>
  `

  list.appendChild(li)

}