/*
  webpack ./src/index.js -o ./build/built.js --mode=development
  
  总结：
    1.webpack 能处理js和json文件，不能处理css，img等其他资源
    2.生产环境比开发环境多个压缩js代码
    3.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化


*/
// import css from './index.css'

import data from './person.json'
function add(x,y){
  return x + y;
}

console.log(add(1,2))
console.log(data)