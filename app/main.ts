// dependencies
import express from "express";
import path from "path";

// config
// const PORT = process.env["PORT"];
const PORT = 8000;
const TOP_DIR = path.join(__dirname, "../../");

// app instance
const app = express();

// static files
app.use("/resources/styles", express.static(path.join(TOP_DIR, "out/styles/")));
app.use("/resources/scripts", express.static(path.join(TOP_DIR, "out/scripts/")));

// pages
app.get("/", (_req, res) => res.sendFile(path.join(TOP_DIR, "html/home.html")));

// error pages
app.all("*", (_req, res) => res.sendFile(path.join(TOP_DIR, "html/404.html")));

// launch server
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
