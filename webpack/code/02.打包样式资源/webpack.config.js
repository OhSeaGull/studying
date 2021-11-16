/**
 * webpack.config.js webpack的配置文件
 *  作用：指示wefbpack 干那些活（当你运行webpack指令时，回加载里面的配置）
 * 
 * 所有构建工具都是基于nodejs平台运行的，模块默认都是commandjs
 * 项目代码和配置文件代码是两个不同的东西：配置代码使用的是commonjs
 * 
 * 
 * 注意：
 *  loader：1.下载  2.使用（配置loader）
 *  plugins: 1.下载 2.引入  3.使用
 */

// 引入nodejs的path模块，采用结构解析语法只引入resolve方法
// resolve 用来拼接路径
const { resolve } = require('path')
// const { HtmlWebpackPlugin } = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    // 指定打包后的文件存储到什么地方，需要使用Nodejs的path模块
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname,'build'),
  },
  module: {
    // loader找包的特点：现在自己这集目录下找，如果找不到就去上级目录下找
    // loader的配置，for detail
    rules: [
      // 每一个对象只能处理一种文件类型
      // 不同类型的文件必须配置不同的loader处理
      // for detail
      {
        // 匹配那些文件
        test:/\.css$/,
        use: [
          // use数组中loader的执行顺序：从右到左，从下到上
          // 创建style标签，将js中的样式资源插入进行，插入到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串 
          'css-loader'
          
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          //需要下载 less-loader 和 less 模块
          'less-loader'
        ]
      },
      
    ]
  },
  
  mode:'development'
}