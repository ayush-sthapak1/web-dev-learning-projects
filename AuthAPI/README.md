# Authentication API

A modular, secure RESTful API built with **Express.js**, **MongoDB (Mongoose)**, and **JSON Web Tokens (JWT)** to manage user registration, authentication, and protected profiles.

## Features
- **User Registration** (`POST /auth/register`): Hashes password using `bcrypt` and creates a new user, checking for existing users/emails.
- **User Login** (`POST /auth/login`): Validates user credentials and signs a JSON Web Token (JWT) valid for 7 days.
- **Protected Profile** (`GET /auth/profile`): Accesses the authenticated user's profile details using the custom `authMiddleware`.
- **Custom Authentication Middleware**: Validates incoming requests for a secure `Authorization` header containing the JWT using the `Bearer` scheme.
- **Environment Variables**: Secures database URIs and JWT secrets using `dotenv`.

## Project Structure
```text
AuthAPI/
├── index.js                  # App entry point, connects to DB and starts server
├── config/
│   └── db.js                 # Mongoose DB connection logic
├── controllers/
│   └── authController.js     # Auth logic: register, login, and get profile
├── middleware/
│   └── authMiddleware.js     # JWT Bearer token authentication middleware
├── models/
│   └── User.js               # Mongoose schema and model for User
├── .env                      # Environment config (ignored in git)
├── package.json
└── README.md
```

## Setup & Environment Configuration
The application requires a `.env` file in the root of the `AuthAPI` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_jwt_secret_key
```
*(Note: If using macOS, ensure the PORT is set to something other than `5000` to avoid conflict with the macOS AirPlay Receiver.)*

## API Endpoints

### 1. Register User
- **URL**: `/auth/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "mySecurePassword"
  }
  ```
- **Response**: `201 Created` with:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### 2. Login User
- **URL**: `/auth/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "mySecurePassword"
  }
  ```
- **Response**: `200 OK` with:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC..."
  }
  ```

### 3. Get Profile (Protected)
- **URL**: `/auth/profile`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer <your_jwt_token>`
- **Response**: `200 OK` with:
  ```json
  {
    "_id": "6a54cc537485b2b53657226e",
    "name": "John Doe",
    "email": "john@example.com",
    "__v": 0
  }
  ```

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- dotenv

## Getting Started
1. Run `npm install` to install dependencies.
2. Create a `.env` file and configure `MONGO_URI`, `PORT`, and `JWT_SECRET`.
3. Run `npm run dev` to start the server in development mode using nodemon, or `npm start` to run normally.
