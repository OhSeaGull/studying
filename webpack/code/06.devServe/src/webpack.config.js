const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')
const {devServer} = require('webpack-dev-server')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      //打包其他资源(除了html、js、css资源以外的其他资源)
      {
        test: /\.(ttf|woff|woff2)$/,
        // exclude: /\.(css|js|html|less)$/,
        loader: 'url-loader',
        options: {
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  mode: 'development',
  
  //开发服务器 devServer： 用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）
  //特点：只会在内存中编译打包，不会有任何输出
  //启动devServer指令为：npx webpack-dev-server, 因为 webpack-dev-server 是本地安装的包
  devServer: {
    //项目构建后路径
    contentBase:resolve(__dirname, 'build'),
    //启动gzip压缩
    compress: true,
    //端口号
    port: 3000,
    //自动打开浏览器
    open: true
  }

}