const path = require('path');

module.exports = {
  entry: path.join(__dirname,`/client/index.jsx`),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/dist')
  }
};
