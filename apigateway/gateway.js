const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("Gayway has started on pORT" + PORT);
})