const path = require('path');

module.exports = {
  mode: 'development', // Remove "--mode" flag from GitHub Actions
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Handles CSS
      },
    ],
  },
};
