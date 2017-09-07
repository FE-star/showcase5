module.exports = {
  // 入口文件路径
  entry: './index.js',
  // 输出文件
  output: {
    filename: 'bundle.js'
  }
  /**
   * output 也可以像下面这样写，则指定了生成路径
   */
  // output: {
  //   filename: 'bundle.js',
  //   path: '/home/proj/public/assets'
  // }
}