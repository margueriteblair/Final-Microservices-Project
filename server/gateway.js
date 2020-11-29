const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");

const app = express();
const routes = require("./routes")
const userRouter = require("./routes/userRouter");
const PORT = process.env.PORT;
const logger = require("morgan");
const URI = process.env.MONGO;
const cors = require("cors");

if (typeof(URI) === "string") {
    mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        if (error) console.error("Error connecting to MongoDB: " + error.message);
        else console.log("Server connected to DB");
    })
} else {
    console.error("Invalid connection to MongoDB");
}

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", routes)
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log("Gateway has started on port " + PORT);
})