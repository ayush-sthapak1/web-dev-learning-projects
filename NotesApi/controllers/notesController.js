const notes = [
    {
        id: 1,
        title: "Learn Express",
        content: "Middleware"
    }
];

function createNote(req, res) {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send("Title and content are required.");
    }

    const note = {
        id: Date.now(),
        title,
        content
    };

    notes.push(note);

    res.status(201).send(note);
}

function getNoteById(req, res) {
    const noteID = Number(req.params.id);

    const note = notes.find(note => note.id === noteID);

    if (!note) {
        return res.status(404).send("Note not found");
    }

    res.send(note);
}

function updateNote(req, res) {
    const noteID = Number(req.params.id);

    const note = notes.find(note => note.id === noteID);

    if (!note) {
        return res.status(404).send("Note not found");
    }

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send("Title and content are required.");
    }

    note.title = title;
    note.content = content;

    res.status(200).send(note);
}

function deleteNote(req, res) {
    const noteID = Number(req.params.id);

    const index = notes.findIndex(note => note.id === noteID);

    if (index === -1) {
        return res.status(404).send("Note not found");
    }

    notes.splice(index, 1);

    res.status(200).send("Deleted Successfully");
}

module.exports = {
    createNote,
    getNoteById,
    updateNote,
    deleteNote
};