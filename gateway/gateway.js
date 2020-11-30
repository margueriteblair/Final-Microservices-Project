const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");
const auth = require("./routes/authorization")
const router = require("./routes/router");


app.get("/", (req, res) => {
    res.send("Okay, official API gateway")
})


app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);
app.use(router);

const PORT = process.env.PORT || 3398;
app.listen(PORT, () => {
    console.log("Gateway has started on port " + PORT);
})

//example post request:
// const postRequest = {
//     headers: {
//       "x-auth-token":
//         "x-auth-token can be included here and forwarded or we can include it in the body.",
//     },
//     body: {
//       action: "action for the service which the gateway will convert to url.",
//       reqBody: "the body for the service",
//     },
//   };