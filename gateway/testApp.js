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
            break;
        case "topHeadLines":
            try {
                res.send(await getTopHeadlines());
            } catch (error) {
                res.status(500).json({message: error.message})
            }
            break;
        default: res.send({message: "invalid action type"}).status(400);
        break;
    }
})

const newsBaseURL = "http://newsapi.org/v2/"

const searchNewsArticles = async (query) => {
    const date = "2020-11-29";
    const url = newsBaseURL + `everything?q=${query}&from=${date}&sortBy=popularity&apiKey=${key}`;

    try {
        const articles = await (fetch(url));
        return await articles.json();
    } catch (error) {
        throw error;
    }
}

const getTopHeadlines = async () => {
    const url = newsBaseURL + `top-headlines?country=us&apiKey=${key}`
    try {
        const articles = await fetch(url);
        return await articles.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}