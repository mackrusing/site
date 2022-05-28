// std library
const path = require('path');

// locations
global.projectDir = path.join(__dirname, '..');
global.frontendDir = path.join(global.projectDir, 'frontend');

// port
global.PORT = process.env.PORT || 8080;
