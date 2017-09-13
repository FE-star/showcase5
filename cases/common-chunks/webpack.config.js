var path = require('path')
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname + '/src',
  entry: {
    A: './a',
    B: './b',
    C: './c',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }, { 
      test: /\.png$/, 
      use: 'file-loader' 
    }]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js'
    }),
    new ExtractTextPlugin('[name].css')
  ]
};