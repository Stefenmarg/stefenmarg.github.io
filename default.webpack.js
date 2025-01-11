require('dotenv').config(); // Load environment variables from .env file

const path = require('path');

const enviroment = process.env.enviroment || 'Dev';
const Enviroments = require('./config/enviroments.json');

if (!Enviroments[enviroment]) {
  console.error(`Error: The environment '${enviroment}' is not defined in Enviroments.json`);
  process.exit(1); // Stop the process if the environment is invalid
}

module.exports = {
  entry: './src/js/global.js',
  output: {
    path: path.resolve(__dirname, `./${Enviroments[enviroment].output}/js`),
    filename: 'global.bundle.js',
    library: 'Web',
    libraryTarget: 'var'
  },
  mode: enviroment === 'Dev' ? 'development' : 'production',
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
