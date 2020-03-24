const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'react-tweeker-js',
    libraryTarget: 'umd',
  },
  externals: {
    'react': 'react',
    'react-dom' : 'reactDOM',
    'tweeker-js': 'tweeker-js',
    'prop-types': 'prop-types',
   }
};
