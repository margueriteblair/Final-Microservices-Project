const express = require("express");
require("dotenv").config();

//an API gateway is an entry point to other services
//nodejs works well for api gateways even if your microservice architecture is developed in a different language

//most of the microservices infrastructre need to handle authentication
//putting shared logic like authentication to the API gateway can help you to keep your services smalland domain focused
//there's both cookie and token based authentication
const app = express();
const routes = require("./routes")
const PORT = 3000;

app.use(express.json());

app.use("/", routes)

app.listen(PORT, () => {
    console.log("Gateway has started on port " + PORT);
})