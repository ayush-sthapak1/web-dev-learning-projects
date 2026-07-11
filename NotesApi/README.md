# Notes API

A simple and modular RESTful API built with **Express.js** to manage notes in memory, organized using a router-controller architecture.

## Features
- **Create Note** (`POST /notes`): Create a new note with a title and content.
- **Read Note** (`GET /notes/:id`): Retrieve a specific note by its ID.
- **Update Note** (`PUT /notes/:id`): Edit an existing note's title and content.
- **Delete Note** (`DELETE /notes/:id`): Remove a note from the list.
- **In-Memory Storage**: Uses a simple JavaScript array to store notes during runtime.
- **Modular Structure**: Code is split into entrypoint, routes, and controllers for clean separation of concerns.

## Project Structure
```text
NotesApi/
├── index.js                  # App entry point, starts the Express server
├── routes/
│   └── notes.js              # Express Router mapping HTTP verbs/paths to controllers
├── controllers/
│   └── notesController.js    # Business logic & array manipulation handlers
├── package.json
└── README.md
```

## API Endpoints

### 1. Create a Note
- **URL**: `/notes`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title": "Learn Node.js",
    "content": "Study modules and npm"
  }
  ```
- **Response**: `201 Created` with the created note object (including its generated `id`).

### 2. Get a Note
- **URL**: `/notes/:id`
- **Method**: `GET`
- **Response**: `200 OK` with the note details.

### 3. Update a Note
- **URL**: `/notes/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "title": "Learn Node.js (Updated)",
    "content": "Study modules, npm, and Express"
  }
  ```
- **Response**: `200 OK` with the updated note.

### 4. Delete a Note
- **URL**: `/notes/:id`
- **Method**: `DELETE`
- **Response**: `200 OK` with a success message.

## Tech Stack
- Node.js
- Express.js
- JavaScript (ES6)

## Getting Started
1. Run `npm install` to install dependencies.
2. Run `node index.js` to start the server.
3. The server will run on `http://localhost:3000`.
