/*
  loader: 1. 下载  2. 使用(配置loader)
  plugins: 1. 下载  2. 引入 3.使用
*/
const  {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname,'build')
  },

  module: {
    rules: [
      
    ]
  },
  plugins: [
    // 功能：默认会构建一个空的HTML，自动引入打包输出的所有资源(js/css)
    // 需求：需要有结构的html文件
    new HtmlWebpackPlugin({
      // 复制你要引入的HTML文件，自动引入打包输出的所有资源(js/csss)
      template: './index.html'

    })


  ],
  mode: 'development'
}