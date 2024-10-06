const Dotenv = require('dotenv-webpack');
require('path');

module.exports = {
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
    }),
  ],
};
