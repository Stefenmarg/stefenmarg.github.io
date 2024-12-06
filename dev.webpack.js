const path = require('path');

module.exports = {
  entry: './src/js/global.js',
  output: {
    path: path.resolve(__dirname, './dev/js/'),
    filename: 'global.bundle.js',
    library: 'Web',
    libraryTarget: 'var'
  },
  mode: 'development',
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
