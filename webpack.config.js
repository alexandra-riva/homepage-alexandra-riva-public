const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your JS
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Output to "dist" folder
  },
  module: {
    rules: [
      {
        test: /\.css$/, // To handle CSS imports
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'production', // Set to "development" if you're still working on it
};
