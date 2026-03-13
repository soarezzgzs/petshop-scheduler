export async function scheduleCreate(data) {
  try {

    await fetch("http://localhost:3333/schedules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

  } catch (error) {
    console.log(error)
    alert("Erro ao salvar agendamento")
  }
}