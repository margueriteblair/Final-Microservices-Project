const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");
const auth = require("./routes/auth")


app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);

const PORT = process.env.PORT || 3398;
app.listen(PORT, () => {
    console.log("Gateway has started on port " + PORT);
})