// dependencies
const express = require("express");

// config
const PORT = 8000;

// app instance
const app = express();

// static files
app.use("/", express.static("public"));

// launch server
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
