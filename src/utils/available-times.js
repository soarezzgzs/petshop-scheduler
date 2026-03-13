export function getAvailableTimes(busyTimes){

  const times = []

  for(let hour = 9; hour <= 20; hour++){

    const formattedHour = String(hour).padStart(2, "0") + ":00"

    if(!busyTimes.includes(formattedHour)){
      times.push(formattedHour)
    }

  }

  return times

}