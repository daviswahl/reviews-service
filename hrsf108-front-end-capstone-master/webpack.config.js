<<<<<<< HEAD
var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
=======
const path = require('path');

module.exports = {
  entry: path.join(__dirname,`/client/index.jsx`),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/dist')
  }
};
>>>>>>> 23e3995060fc931691af53fea543ab1b6cacdcfe
