const Note = require("../models/Note");

async function createNote(req, res) {
    
    try {
        const {title,content} = req.body;

        const note = await Note.create({
            title,
            content
        });

        res.status(201).json(note);
    } catch(err){
        res.status(400).json({message:err.message});
    }
}

async function getAllNotes(req, res) {
    try {
        const notes = await Note.find();

        res.json(notes);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.json(note);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function updateNote(req, res) {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.json(note);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function deleteNote(req, res) {
    try {

        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.json({
            message: "Deleted Successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    getAllNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote
};