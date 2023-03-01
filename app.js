// dependencies
const express = require("express");

// config
const PORT = 8000;

// app instance
const app = express();

// template engine
app.set("view engine", "pug");
app.set("views", "./views");

// static files
app.use("/resources", express.static("./resources"));

app.get("/", (request, response) => {
    response.render("home", {});
});
app.get("/about", (request, response) => {
    response.render("about", {});
});

// launch server
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
