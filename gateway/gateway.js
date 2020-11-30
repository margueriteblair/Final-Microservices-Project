const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes")
const auth = require("./routes/auth")


app.use(express.json());
app.use(cors());
app.use("/", routes)

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Gateway has started on port " + port);
})