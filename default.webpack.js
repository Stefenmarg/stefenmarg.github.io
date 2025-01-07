require('dotenv').config(); // Load environment variables from .env file

const path = require('path');

const enviroment = process.env.enviroment || 'Dev';
const Domains = require('./config/domains.json');

if (!Domains[enviroment]) {
  console.error(`Error: The environment '${enviroment}' is not defined in domains.json`);
  process.exit(1); // Stop the process if the environment is invalid
}

module.exports = {
  entry: './src/js/global.js',
  output: {
    path: path.resolve(__dirname, `./${Domains[enviroment].output}/js`),
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
