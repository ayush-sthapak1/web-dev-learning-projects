const express = require("express");

const router = express.Router();

const {
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} = require("../controllers/notesController");

router.post("/", createNote);

router.get("/:id", getNoteById);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;