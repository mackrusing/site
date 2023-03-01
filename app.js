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

// rendered pages
app.get("/", (req, res) => {
    res.render("home", {});
});
app.get("/home", (req, res) => {
    res.redirect("/");
});
app.get("/~", (req, res) => {
    res.redirect("/");
});
app.get("/about", (req, res) => {
    res.render("about", {});
});

// error pages
app.all("*", (req, res) => {
    res.status(404).render("404", {});
});

// launch server
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
