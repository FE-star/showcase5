var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname + '/src',
  entry: './',
  module: {
    rules: [{
      test: /\.css$/,
      include: [
        __dirname + '/src'
      ],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'autoprefixer-loader']
      })
    }]
  },
  output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};