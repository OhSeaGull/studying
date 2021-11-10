## 用html-loader解析的html文件中加引入了script脚本*报错*

#### 原因：

1. 在之前的操作中，未使用`html-webpack-plugin` 插件打包输出`HTML`,测试的时候仍旧是在原来的index.html文件中运行检测，因此不报错；
2. webpack打包顺序：通过入口文件开始打包，`html-loader`解析`HTML`文件中的图片文件，`style-loader`、`css-loader`处理样式文件，`url-loader`解析样式中的图片路径问题，`file-laoder`处理其他文件格式，Plugins中的`html-webpack-plugin`则负责打包`HTML`文件;
3. `html-loader` 解析的是原HTML文件中的图片文件，因此原HTML文件中引入的script标签无法解析，就会报错；
4. 使用了`html-webpack-plugin`打包工具之后，webpack配置打包的时候，就会报错，`html- webpack-plugin`的本质是创建一个空的HTML文件，找到`template`下的文件复制到这个空的`HTML`文件中，再将打包好的其他资源全部引入这个空的`HTML`文件。
