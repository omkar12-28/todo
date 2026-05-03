# 📝 Todo Application

A modern full-stack Todo application built using **Django** for the backend and **Next.js** for the frontend. This project focuses on clean architecture, fast performance, and a smooth user experience, leveraging modern tools and UI frameworks.

---

## 🚀 Tech Stack

### Backend

* **Django** — RESTful API development and backend logic

### Frontend

* **Next.js** — React-based framework for building fast, scalable UI

### UI & Styling

* **Radix UI** — Accessible and customizable UI primitives
* **Tailwind CSS** — Utility-first CSS framework for rapid styling

### AI Integration

* **Lovable AI Tool** — Used to accelerate development and assist with implementation

---

## ✨ Features

* ✅ Create, update, delete todos
* 📋 Organized task management
* ⚡ Fast and responsive UI
* 🔌 REST API integration
* 🎯 Clean and minimal design
* ♿ Accessible UI components via Radix

---

## 📁 Project Structure

```
todo-app/
│
├── backend/        # Django project
│   ├── api/        # App for todo APIs
│   └── ...
│
├── frontend/       # Next.js application
│   ├── components/ # Reusable UI components
│   ├── pages/      # Routes
│   └── ...
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

---

### 2. Backend Setup (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend will run at:

```
http://127.0.0.1:8000/
```

---

### 3. Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:3000/
```

---

## 🔗 API Endpoints (Example)

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/todos/    | Get all todos   |
| POST   | /api/todos/    | Create new todo |
| PUT    | /api/todos/:id | Update todo     |
| DELETE | /api/todos/:id | Delete todo     |

---

## 🧠 AI Assistance

This project leveraged the **Lovable AI Tool** to:

* Speed up boilerplate generation
* Improve code quality
* Assist in UI/UX decisions

---

## 📸 Screenshots

*Add your screenshots here*

---

## 🛠 Future Improvements

* 🌙 Dark mode support
* 🗂 Task categories & filters
* ⏰ Reminders & notifications

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

Built with ❤️ using Django, Next.js, and modern UI tools.
