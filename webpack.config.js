const path = require('path');

module.exports = {
  entry: './Source/public/js/global.js',
  output: {
    path: path.resolve(__dirname, `./docs/public/js`),
    filename: 'global.js',
    library: 'Web',
    libraryTarget: 'var'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
