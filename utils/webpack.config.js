const path = require('path')

const config = {
  // devtool: 'source-map',
  entry: './utils.js',
  // mode: 'production',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `utils.js`,
    library: 'utils',
    libraryTarget: 'umd',
    globalObject: "(typeof window !== 'undefined' ? window : this)",
  },
  module: {
    rules: [
      {
        test: /.*\.js$/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
}

module.exports = config
