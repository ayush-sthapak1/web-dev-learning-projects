require("dotenv").config();

const express = require("express");

const authRouter = require("./routes/authRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);





async function startServer(){
    await connectDB();
    app.listen(process.env.PORT, () => {
        console.log("server running...");
    });
}

startServer();