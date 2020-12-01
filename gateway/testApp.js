const express = require("express")
const app = express();
const fetch = require("node-fetch")

const key = process.env.NEWS_KEY;
const port = process.env.TEST_PORT;

app.use(express.json())

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

app.get("/monitor",(req, res) => {
    console.log("hello");
    res.send("test")
})

app.post("/", async (req, res) => {
    const {action, data} = req.body;

    switch (action) {
        case "searchTerm":
            try {
                res.send(await searchNewsArticles(data));
            } catch (error) {
                res.status(500).json({message: error.message});
            }
    }
})