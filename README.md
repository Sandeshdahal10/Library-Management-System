# Library Management System (Backend)

Simple REST API backend for a library system supporting user auth, book CRUD, borrowing/returning books and borrow history.

## System architecture
- Node.js + Express REST API.
- Routes (routes/*.js) delegate to controllers (controller/*.js).
- Mongoose models (models/*.js) map to MongoDB collections (User, Book, Borrow).
- JWT-based authentication and role-based authorization via middleware (middleware/verifytoken.js).
- Entry point: server.js — loads env, connects to MongoDB (database/database.js), mounts routes under `/api`.

## Tools & technologies
- Node.js, npm
- Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- dotenv
- CORS
- Postman

## Important endpoints (prefix /api)
- POST /auth/register — register (Librarian-only)
- POST /auth/login — login → returns JWT
- GET /books — list books
- POST /books — create book (Librarian)
- POST /borrow — borrow a book (Borrower)
  - Body JSON: { "bookId": "<id>" }
- POST /borrow/return/:borrowId — return a borrowed book
- GET /borrow/history — get current user's borrow history (Borrower)
- GET /borrowers — list borrowers (Librarian)