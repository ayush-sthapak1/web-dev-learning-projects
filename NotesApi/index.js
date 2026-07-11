const express = require("express");

const app = express();

app.use(express.json());

app.post("/notes",(req,res) => {
    const {title , content} = req.body;
    if (!title || !content) {
        return res.status(400).send("Title and content are required.");
    }
    const note = {
        id:Date.now(),
        title,
        content
    };
    notes.push(note);
    res.status(201).send(note);
})

app.put("/notes/:id",(req,res) => {
    const noteID = Number(req.params.id);

    const note = notes.find(note =>note.id === noteID);

    if(!note) return res.status(404).send("Note with given id does not exist");

    const {title,content} = req.body;

    if (!title || !content) {
        return res.status(400).send("Title and content are required");
    }

    note.title = title;
    note.content = content;

    res.status(200).send(note);
})

app.delete("/notes/:id",(req,res) => {
    const noteID = Number(req.params.id);

    const index = notes.findIndex(note => note.id === noteID);

    if(index === -1) return res.status(404).send("Note with given id does not exist");

    notes.splice(index,1);

    res.status(200).send("Deleted Successfully");

})


const notes = [
    {
        id: 1,
        title: "Learn Express",
        content: "Middleware"
    }
];

app.get("/notes/:id", (req, res) => {

    const noteID = Number(req.params.id);

    const note = notes.find(note => note.id === noteID)
    if(!note){
        return res.status(404).send("Note not found");
    }
    res.send(note);
});

app.listen(3000, () => {
    console.log("Server running...");
});