module.exports = {
  context: __dirname + '/src',
  entry: './',
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          __dirname + '/src'
        ],
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.[hash].js'
  }
}