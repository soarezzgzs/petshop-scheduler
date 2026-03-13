# 🐶 Petshop Scheduling App

![Project Preview](./.github/preview.png)

A web application for managing **petshop appointments**, allowing users to schedule services, manage available time slots, and organize bookings throughout the day.

This project was developed during my **Full Stack training at Rocketseat**, focusing on **JavaScript modular architecture, API integration, and user interface interactions**.

---

# 🚀 Features

- Create new pet appointments
- Store appointments using a **local API (JSON Server)**
- Display appointments separated by **Morning / Afternoon / Night**
- Filter schedules by **selected date**
- Prevent scheduling in **past dates**
- Prevent scheduling in **past hours**
- Prevent booking **already occupied time slots**
- Automatically display **only available times**
- Remove appointments with confirmation
- Modal form interface for scheduling
- Dynamic rendering of appointments
- Modular JavaScript architecture

---

# 🛠 Technologies Used

This project was built using the following technologies:

- **JavaScript (ES Modules)**
- **Webpack**
- **HTML5**
- **CSS3**
- **JSON Server**
- **Day.js**
- **Node.js**

---

# 📂 Project Structure

# 🐶 Petshop Scheduling App

![Project Preview](./.github/preview.png)

A web application for managing **petshop appointments**, allowing users to schedule services, manage available time slots, and organize bookings throughout the day.

This project was developed during my **Full Stack training at Rocketseat**, focusing on **JavaScript modular architecture, API integration, and user interface interactions**.

---

# 🚀 Features

- Create new pet appointments
- Store appointments using a **local API (JSON Server)**
- Display appointments separated by **Morning / Afternoon / Night**
- Filter schedules by **selected date**
- Prevent scheduling in **past dates**
- Prevent scheduling in **past hours**
- Prevent booking **already occupied time slots**
- Automatically display **only available times**
- Remove appointments with confirmation
- Modal form interface for scheduling
- Dynamic rendering of appointments
- Modular JavaScript architecture

---

# 🛠 Technologies Used

This project was built using the following technologies:

- **JavaScript (ES Modules)**
- **Webpack**
- **HTML5**
- **CSS3**
- **JSON Server**
- **Day.js**
- **Node.js**

---

# 📂 Project Structure

src
│
├── assets
│ └── icons and images
│
├── libs
│ └── dayjs configuration
│
├── modules
│ ├── form
│ │ ├── form-arises.js
│ │ └── render-times.js
│ │
│ └── schedules
│ ├── load-schedules.js
│ ├── render.js
│ └── schedules-delete.js
│
├── services
│ ├── schedules-create.js
│ └── schedules-fetch.js
│
├── styles
│ ├── global.css
│ ├── header.css
│ ├── main.css
│ └── form.css
│
├── utils
│ ├── available-times.js
│ └── busy-time.js
│
└── main.js


---

# ⚙️ How to Run the Project

### 1️⃣ Clone the repository
git clone https://github.com/soarezzgzs/petshop-scheduler.git


### 2️⃣ Enter the project folder
cd petshop-scheduler

### 3️⃣ Install dependencies
npm install

### 4️⃣ Start the local API (JSON Server)
npm run server

### 5️⃣ Run the development server
npm run dev

The application will be available at:

http://localhost:3000


---

# 📌 Important Note

This project uses a **local API powered by JSON Server**.

To run the application correctly, you must start **both servers**:

1. The **JSON Server API**
2. The **Webpack development server**

Without the API running, the scheduling features will not work.

---

# 📋 Scheduling Rules

The system follows these business rules:

- Appointments allowed only between **09:00 and 21:00**
- Users **cannot schedule past dates**
- Users **cannot schedule past hours on the same day**
- Users **cannot book already occupied time slots**
- Each appointment represents a **1 hour time slot**

---

# 🖼 Screenshots

### Application Interface

![Application Interface](./.github/app-interface.png)

---

### Scheduling Modal

![Scheduling Modal](./.github/scheduling-modal.png)

---

### Daily Schedule

![Daily Schedule](./.github/daily-schedule.png)

---

# 🎯 Learning Goals

This project helped me improve my knowledge in:

- Modular JavaScript architecture
- DOM manipulation
- API communication using Fetch
- Date manipulation using Day.js
- Form validation and UI interactions
- Webpack configuration
- Project organization for scalable frontend applications

---

# 🔮 Possible Future Improvements

Some potential improvements for the project include:

- Edit existing appointments
- Deploy the application online
- Improve mobile responsiveness
- Add UI animations and transitions
- Add authentication system
- Store data in a real backend instead of a local API

---

# 👨‍💻 Author

**Leonardo Soares**

GitHub  
https://github.com/soarezzgzs

LinkedIn  
https://www.linkedin.com/in/leonardo-soares-57a19039b/

---

# 📄 License

This project was developed for educational purposes during my studies in full stack development.

