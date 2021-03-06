const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");
const auth = require("./routes/authorization")
const processing = require("./routes/processing");


app.get("/", (req, res) => {
    res.send("Test Test 123 can you hear me?");
})

app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);
app.use("/api/processing", processing);

const PORT = process.env.PORT || 3398;
app.listen(PORT, () => {
    console.log("Gateway has started on port " + PORT);
})
