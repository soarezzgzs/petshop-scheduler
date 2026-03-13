"use strict"
import { loadSchedules } from "./modules/schedules/load-schedules"

// Configurações do dayjs
import "./libs/dayjs.js"

// CSS
import "./styles/global.css"
import "./styles/header.css"
import "./styles/main.css"
import "./styles/form.css"

// JS
import "./modules/form/form-arises.js"
import "./modules/schedules/render.js"
import "./services/schedules-create.js"
import "./services/schedules-fetch.js"
import "./modules/schedules/load-schedules.js"
import "./services/schedules-delete.js"

const today = new Date().toISOString().split("T")[0]

loadSchedules(today)

const dateInput = document.getElementById("date")

dateInput.value = today

dateInput.addEventListener("change", (event) => {
    const selectedDate = event.target.value
    loadSchedules(selectedDate)
})