import { loadSchedules } from "../modules/schedules/load-schedules"

export async function scheduleDelete(id){

  await fetch(`http://localhost:3333/schedules/${id}`, {
    method: "DELETE"
  })

}

document.addEventListener("click", async (event) => {

  const button = event.target.closest(".btn-remove")

  if(button){

    const confirmDelete = confirm("Deseja remover esse agendamento?")
    if(!confirmDelete) return

    const id = button.dataset.id

    await scheduleDelete(id)

    const selectedDate = document.getElementById("date").value

    loadSchedules(selectedDate)

  }

})