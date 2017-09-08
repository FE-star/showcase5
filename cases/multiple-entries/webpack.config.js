const path = require('path')

module.exports = {
  /**
   * The base directory 
   */
  context: path.join(__dirname, './src'),
  entry: {
    /**
     * 定义了多个入口文件
     */
    home: './home',
    user: ['./user', './account']
  },
  output: {
    path: path.join(__dirname, './dist'),
    /**
     * 可以映射变量[name]和[hash]
     */
    filename: '[name].bundle.[hash].js'
  }
}