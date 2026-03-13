export function getPeriod(time){

  const hour = Number(time.split(":")[0])

  if(hour >= 9 && hour <= 12) return "morning"
  if(hour >= 13 && hour <= 18) return "afternoon"
  if(hour >= 19 && hour <= 21) return "night"

}