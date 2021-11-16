
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        // 不能处理img图片
        // 需要下载 url-loader, file-loader
        loader: 'url-loader',
        options: {
          //优点：减少请求数量（减轻服务器压力）
          //缺点：图片体积会更大（文件请求速度更慢）
          // 图片小于2MB，就会被base64处理
          limit: 2 * 1024 * 1024,
          // 问题：url-loader默认是es6模块化解析，而html-loader引入图片使用的是commonjs规则
          // 解析时会出现问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 给图片重命名
          // [hash:10] 取图片的hash的前十位
          // [ext] 取文件原来拓展名
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片(负责引入img，从而能被url-loader进行处理)
        loader: 'html-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}