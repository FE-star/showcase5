module.exports = {
  entry: __dirname + '/src',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        use: 'babel-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
}