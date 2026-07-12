# Notes API

A modular RESTful API built with **Express.js** and **MongoDB (Mongoose)** to manage notes, organized using a router-controller-model architecture.

## Features
- **In-Memory to Database Persistence**: Migrated from a simple runtime JavaScript array to a persistent MongoDB database.
- **Environment Variables**: Uses `dotenv` to load secrets (like the MongoDB URI) securely.
- **Get All Notes** (`GET /notes`): Retrieve the list of all notes.
- **Create Note** (`POST /notes`): Create a new note with a title and content.
- **Read Note** (`GET /notes/:id`): Retrieve a specific note by its MongoDB Object ID.
- **Update Note** (`PUT /notes/:id`): Edit an existing note's title and content.
- **Delete Note** (`DELETE /notes/:id`): Remove a note by its ID.

## Project Structure
```text
NotesApi/
├── index.js                  # App entry point, connects to DB and starts server
├── models/
│   └── Note.js               # Mongoose schema and model for Notes
├── routes/
│   └── notes.js              # Express Router mapping paths to controllers
├── controllers/
│   └── notesController.js    # Express controller handlers with Mongoose queries
├── .env                      # Environment config (ignored in git)
├── package.json
└── README.md
```

## Setup & Environment Configuration
The application requires a `.env` file in the root of the `NotesApi` directory:
```env
MONGO_URI=your_mongodb_connection_string
```

## API Endpoints

### 1. Get All Notes
- **URL**: `/notes`
- **Method**: `GET`
- **Response**: `200 OK` with an array of all notes.

### 2. Create a Note
- **URL**: `/notes`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title": "Learn Mongoose",
    "content": "Define schemas and connect to MongoDB"
  }
  ```
- **Response**: `201 Created` with the created note object containing `_id`, `title`, `content`, and `createdAt`.

### 3. Get a Note
- **URL**: `/notes/:id`
- **Method**: `GET`
- **Response**: `200 OK` with the note details.

### 4. Update a Note
- **URL**: `/notes/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "title": "Learn Mongoose (Updated)",
    "content": "Define schemas, run queries, and connect to MongoDB"
  }
  ```
- **Response**: `200 OK` with the updated note.

### 5. Delete a Note
- **URL**: `/notes/:id`
- **Method**: `DELETE`
- **Response**: `200 OK` with a success JSON response.

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv

## Getting Started
1. Run `npm install` to install dependencies (including `mongoose` and `dotenv`).
2. Create a `.env` file and configure `MONGO_URI`.
3. Run `node index.js` to start the server.
4. The server will run on `http://localhost:3000`.
