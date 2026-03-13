export async function schedulesFetch() {
  try {
    const response = await fetch("http://localhost:3333/schedules")
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}