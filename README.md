# Express Authentication REST API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** that demonstrates user authentication and CRUD operations. The project uses **Mongoose** for database modeling, **JWT (JSON Web Token)** for authentication, and **bcryptjs** for password hashing.

This project was built as part of a fellowship assignment to demonstrate backend development concepts including routing, middleware, authentication, error handling, and CRUD operations.

---

# Features

* User Registration
* User Login
* JWT Authentication
* Password Hashing with bcryptjs
* Protected Routes
* User Profile Management
* Update User Profile
* Delete User Account
* MongoDB Database Integration
* Mongoose Schema & Models
* Express Middleware
* Environment Variables using dotenv
* CORS Support

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* dotenv
* CORS
* Nodemon

---

# Project Structure

```
express-auth-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── userController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

Move into the project folder.

```bash
cd your-repository
```

Install dependencies.

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/express-api
JWT_SECRET=your_secret_key
```

Replace the values according to your environment.

---

# Running the Project

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

Server runs on

```
http://localhost:5000
```

---

# API Endpoints

## Authentication

### Register User

**POST**

```
/api/auth/register
```

Example Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "dateOfBirth": "2000-01-01",
  "cnic": "35202-1234567-1"
}
```

Returns

* User information
* JWT Token

---

### Login User

**POST**

```
/api/auth/login
```

Example Request

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Returns

* User information
* JWT Token

---

# User Routes

All user routes require authentication.

Add the JWT token in the Authorization header.

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## Get User Profile

**GET**

```
/api/users/profile
```

Returns the currently authenticated user's profile.

---

## Update User Profile

**PUT**

```
/api/users/profile
```

Example Request

```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com",
  "password": "newpassword",
  "dateOfBirth": "2000-01-01",
  "cnic": "35202-1234567-1"
}
```

Updates any provided fields. Password is automatically hashed before being stored.

---

## Delete User

**DELETE**

```
/api/users/profile
```

Deletes the authenticated user's account.

---

# Authentication Flow

1. Register a new user.
2. Password is hashed using bcryptjs.
3. User logs in with email and password.
4. A JWT token is generated.
5. Include the token in the Authorization header.
6. Protected routes verify the token before granting access.

---

# Database Schema

## User

| Field       | Type   | Description             |
| ----------- | ------ | ----------------------- |
| name        | String | User's full name        |
| email       | String | Unique email address    |
| password    | String | Hashed password         |
| dateOfBirth | Date   | User's date of birth    |
| cnic        | String | Unique CNIC             |
| createdAt   | Date   | Automatically generated |
| updatedAt   | Date   | Automatically generated |

---

# Middleware

## Authentication Middleware

The authentication middleware:

* Reads the JWT token from the request header.
* Verifies the token.
* Finds the authenticated user.
* Attaches the user to `req.user`.
* Prevents unauthorized access to protected routes.

---

# Security Features

* Passwords are hashed before storage.
* JWT-based authentication.
* Protected routes.
* Unique email validation.
* Unique CNIC validation.
* Duplicate email checks during update.
* Duplicate CNIC checks during update.

---

# Error Handling

The API returns appropriate HTTP status codes.

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | Success               |
| 201         | Resource Created      |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

# Packages Used

| Package      | Purpose               |
| ------------ | --------------------- |
| express      | Web framework         |
| mongoose     | MongoDB ODM           |
| bcryptjs     | Password hashing      |
| jsonwebtoken | JWT authentication    |
| dotenv       | Environment variables |
| cors         | Cross-origin requests |
| nodemon      | Development server    |

---

# Testing

The API can be tested using:

* Postman
* Thunder Client
* Insomnia

---

# Learning Outcomes

This project demonstrates:

* REST API development with Express.js
* MongoDB integration using Mongoose
* CRUD operations
* Authentication using JWT
* Password hashing with bcryptjs
* Express routing
* Middleware implementation
* Environment variable management
* Error handling
* Protected API endpoints

---

# Author

**Furqan Ali**

Backend Developer | MERN Stack Developer
