require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");



const app = express();

const notesRouter = require("./routes/notes");

app.use(express.json());

app.use("/notes", notesRouter);


async function connectDB() {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected!");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

async function startServer() {
    await connectDB();

    app.listen(3000, () => {
        console.log("Server running...");
    });
}



startServer();