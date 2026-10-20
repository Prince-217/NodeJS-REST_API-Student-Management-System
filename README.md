# 🎓 Student Data Management System

An end-to-end, high-performance RESTful API service for managing student records. Built with **Node.js**, **Express.js**, and **MongoDB**, this application offers advanced features including multi-field searching, flexible filtering, custom sorting, robust pagination, and full CRUD functionality.

---

## ✨ Features

- 📝 **Full CRUD Functionality**: Create, read, update, and delete student records.
- 📦 **Bulk Import Support**: Post individual student records or insert bulk arrays seamlessly.
- 🔍 **Multi-Field Search**: Search students dynamically by name or email (case-insensitive regex).
- 🎯 **Advanced Filtering**: Filter records precisely by `city` or course `category`.
- 🔀 **Dynamic Sorting**: Alphabetical sorting by student name in ascending (`A → Z`) or descending (`Z → A`) order.
- 📑 **Smart Pagination**: Paginated API responses complete with metadata (`total`, `totalPages`, `currentPage`, `count`).
- 🛑 **Error Handling & Validation**: Robust Mongoose schemas and friendly HTTP status codes.

---

## 🛠️ Tech Stack & Prerequisites

- **Runtime:** Node.js (v14+)
- **Framework:** Express.js
- **Database:** MongoDB (Atlas Cloud / Local MongoDB Instance)
- **ODM:** Mongoose
- **Tooling:** Nodemon, Dotenv

---

## 📂 Project Structure

```text
Student-Data-Management-System/
│
├── config/
│   └── db.js                 # Database connection logic
├── controllers/
│   └── studentController.js  # Request handlers (CRUD, Search, Filter, Sort, Pagination)
├── models/
│   └── studentModel.js       # Mongoose Schema definition
├── routes/
│   └── studentRoute.js       # Route declarations
├── .env                      # Environment variables
├── .gitignore                # Git ignore configuration
├── package.json              # Dependencies and scripts
└── server.js                 # Entry point
```

---

## 🗄️ Database Schema

The `Student` model consists of the following attributes:

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | String | Yes | Full name of the student |
| `email` | String | Yes | Unique email address |
| `phone` | String | Yes | Contact number |
| `city` | String | Yes | City of residence |
| `category` | String | Yes | Course category (e.g., Full Stack, Frontend, Backend) |

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/your-username/student-data-management-system.git

# Navigate into the project directory
cd student-data-management-system

# Install npm packages
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and define your variables:
```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/StudentDB?retryWrites=true&w=majority
```

### 3. Run the Server
```bash
# Development mode with Nodemon
npm run dev

# Standard start
npm start
```
*Server will start running at `http://localhost:3000`*

---

## 🌐 API Endpoint Reference

### Base URL: `http://localhost:3000/api/students`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/students` | Get all students (Supports Search, Filter, Sort, & Pagination) |
| `GET` | `/api/students/:id` | Get details of a single student by ID |
| `POST` | `/api/students` | Create a new student (or bulk insert an array of students) |
| `PUT` | `/api/students/:id` | Update an existing student by ID |
| `DELETE` | `/api/students/:id` | Delete a student by ID |

---

## ⚡ Query Parameters & Usage Examples

You can combine multiple query parameters in a single request:

#### 1. Search by Name or Email
`GET /api/students?search=Rahul`

#### 2. Filter by City or Category
`GET /api/students?city=Surat`  
`GET /api/students?category=Full Stack`

#### 3. Sort Records (Ascending / Descending)
`GET /api/students?sort=asc` *(A → Z)*  
`GET /api/students?sort=desc` *(Z → A)*

#### 4. Pagination
`GET /api/students?page=2&limit=5`

#### 5. Combined Request
`GET /api/students?search=John&city=Surat&sort=asc&page=1&limit=10`

---

## 🧪 Sample Payloads

### POST Single Student
```json
{
  "name": "Rahul Patel",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "city": "Surat",
  "category": "Full Stack"
}
```

### POST Bulk Insert Students
```json
[
  {
    "name": "Karan Malhotra",
    "email": "karan.malhotra@example.com",
    "phone": "9811122233",
    "city": "Surat",
    "category": "Full Stack"
  },
  {
    "name": "Simran Kaur",
    "email": "simran.kaur@example.com",
    "phone": "9822233344",
    "city": "Ahmedabad",
    "category": "Frontend"
  }
]
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

## 📜 License

### This project is open source and available under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Prince-217/NodeJS-REST_API-Student-Management-System/blob/main/LICENSE)
