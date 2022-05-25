// packages & std library
const express = require('express');
const path = require('path');

// port
const PORT = process.env.PORT || 8080;

// app instance
const app = express();

// static files
app.use('/resources', express.static('public'));

// handle page reqs
app
  .get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/home.html'));
  })
  .get('/info', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/info.html'));
  });

// handle page icon
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/images/favicon.ico'));
});

// not found
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, '/html/404.html'));
});

// listen on port
app.listen(PORT, () => {
  console.log(`listening for connections on http://localhost:${PORT}`);
});
