// std library & packages & modules
const path = require('path');
const express = require('express');
require('./config');

// app instance
const app = express();

// static files middleware
app.use('/', express.static(path.join(global.frontendDir, 'public')));

// 404 page
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(global.frontendDir, 'html/404.html'));
});

// listen on port
app.listen(global.PORT, () => {
  console.log(`listening on http://localhost:${global.PORT}`);
});
