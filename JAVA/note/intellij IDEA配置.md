### **编码设置**

一般 IDEA 的编码是和系统保持一致的，而为了通用，减少不必要的编码问题，所以一般统一设置为 UTF-8，设置入口如下，依次打开 `Settings -> Editor -> File Encodings`，然后将 `Global Encoding`、`Project Encoding`、`Default encoding for properties files` 均设置为 UTF-8。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/79db3829166c841b266ebcbec8f9238a.png?imageView2/2/w/1620)

### **外观设置**

#### **整体 UI**

安装并激活之后，进入 IDEA 的主界面，新版本的主界面如下图所示：

![](https://ask.qcloudimg.com/http-save/yehe-6209990/a925fbe73e9458846dedd113285c596a.png?imageView2/2/w/1620)

点击 `Customize`，可以看到右侧我们可以设置主题和字体。其中主题有如下 4 种选择：

1. IntelliJ Light
2. Windows 10 Light
3. Darcula
4. High contrast

这里可以根据自己的喜好进行主题选择，也可以勾选右方的 `Sync with OS` 选项，这样 IDEA 就会根据你系统的明亮还是黑暗主题进行自动切换了。

而字体大小设置这边，我个人更喜欢稍微大一点（主要是小的看久了眼睛疼 ?），所以设置的是 16 号字体。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/60c8ef7de12062455c63aee47d2b024f.png?imageView2/2/w/1620)

主题字体

而关于更多设置，可以点击下方的 `All settings…`，进入更详细的设置。比如这里 IDEA 默认界面字体是微软雅黑，我们要改成自己喜欢的字体就可以在这里进行更改，这里推荐 JetBrains 自家推出的 `JetBrains Mono` 字体。

设置入口，依次进入 `Settings -> Appearance & Behavior -> Appearance`，然后在右边设置主题，字体以及字体大小即可。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/d155bdfa7aa8bc31f6198c680fe12800.png?imageView2/2/w/1620)

#### **编辑区**

上述设置只是针对于 IDEA 整体界面风格的设置，而如果我们要对我们的代码编辑区进行设置，那么就需要进入：`Settings -> Editor -> Font`，然后设置字体和大小。这里依然推荐使用 `JetBrains Mono` 字体，字号 16。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/8c8282b69985c76a387521da54f84c59.png?imageView2/2/w/1620)

除开上面设置编辑区字体大小的方法外，我们还可以按住 `Ctrl`，然后通过鼠标滚轮来实现字体大小的调整，但是前提是你要先打开相关设置。设置入口如下，依次进入 `Settings -> Editor -> General`，然后勾选 `Change font size with Ctrl+Mouse Wheel` 即可。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/27b29fb4341b25080ec7c7032889a277.png?imageView2/2/w/1620)

#### **控制台**

一般情况下无需调整，它会沿用编辑器一样的配置，但如果你需要自定义，可以去如下入口：`Settings -> Editor -> Color Scheme -> Console Font`，然后勾选如下 `Use color scheme font instead of the default` 选项并进行设置即可。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/95c95e1f1a1783015d2e8af122621c15.png?imageView2/2/w/1620)

### **扁平化显示及空包隐藏**

有时候，我们项目的包结构会变成如下样式，有时会造成一定的不便，此时是因为开启了 `Flatten Packages` 所导致。

![1636691658751.png](https://file+.vscode-resource.vscode-webview.net/d%3A/studying/JAVA/note/image/intellij%20IDEA%E9%85%8D%E7%BD%AE/1636691658751.png?nonce%3D1636713264607)

如果我们关闭此功能，则项目包结构如下所示：

![1636691658751.png](https://file+.vscode-resource.vscode-webview.net/d%3A/studying/JAVA/note/image/intellij%20IDEA%E9%85%8D%E7%BD%AE/1636691658751.png?nonce%3D1636713264607)

### **打开文件多行显示**

平常使用 IDEA 时，你可能没有注意到，一旦我们打开过多的文件时，默认会堆积在一行显示，就像浏览器打开了多个标签一样，此时需要通过右侧箭头筛选的方式来选择其他文件。为了解决这一问题，让我们打开的所有文件能以多行显示的方式方便查看。

设置入口：依次打开 ` Settings -> Editor -> General -> Editor Tabs`，然后将 `Show tabs in` 勾选为 `Multiples rows`。

### **行号和方法分隔符**

日常为了方便定位 Bug 所在位置，我们通常需要打开代码所对应的行号，方便我们查找。另外，如果我们代码中方法较多时，最好是在每个方法之间加一个分隔符，方便我们知道一个方法的开始和结束。而这两个功能，IDEA 都是提供的。设置入口：依次打开 `Settings -> Editor -> General -> Appearance`，然后勾选 `Show line numbers` 和 `Show method separators`。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/129a8b51963d4de209430b07101eba00.png?imageView2/2/w/1620)

### **自动导包**

日常工作中，我们会经常用到第三方的包，每次都需要我们通过手动（`Alt + Enter`） 的方式来导入，但实际上 IDEA 也是提供自动导包功能的，设置入口如下：`Settings -> Editor -> General -> Auto Import`，将 `Insert imports on paste` 设置为 `Always`，再勾选 `Add unambiguous imports on the fly` 以及 `Optimize imports on the fly` 即可。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/3f867383d9a0950b4e5a82bb65a96b88.png?imageView2/2/w/1620)

### **忽略大小写**

通常 IDEA 在导入类时大小写是全匹配的，这样一样就极大影响了我们编码的速度。此时我们就可以通过设置 IDEA，让其忽略大小写字母，提高效率。设置入口如下，依次进入 `Settings -> Editor -> General -> Code Completion`，取消勾选 `Match case`。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/9a3410a7c1af1a6f929ff26d1c9c1d6f.png?imageView2/2/w/1620)

### **自动编译**

IDEA 默认是不会对代码自动编译的，需要我们手动配置。设置入口：依次打开 `Settings -> Build,Execution,Deployment -> Compiler`，然后勾选 `Build project automatically` 和 `Compole independent modules in parallel`。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/1d62795ffe12f6bd776056ba296034d5.png?imageView2/2/w/1620)

### **编译器设置**

这里推荐使用 `Javac` 编译器，然后编译器版本最好保持和你本地使用的 JDK 版本相同。因为我本地使用的是 JDK11，所以这里版本我设置的是 11，这里最好根据你自己的实际情况进行设置。设置入口：依次打开 `Settings -> Build,Execution,Deployment -> Compiler -> Java Compiler`，然后将 `Use compiler` 设置为 `Javac`，并将 `Project bytecode version` 设置为你本地使用的 JDK 的版本。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/54c588910e090ba2a07b02a9d9696111.png?imageView2/2/w/1620)

### **Maven 设置**

默认情况下，IDEA 是由绑定的 Maven 的，但是我们一般是自己设置自己所使用的 Maven。需要设置的主要有三点：

1. **Maven home path** ：即自己本地的 Maven 所在目录；
2. **User settings file** ：即自己本地 Maven 环境下的`settings.xml` 所在目录；
3. **Local repository** ：即自己本地的 Maven 仓库；

设置入口：依次打开 `Settings -> Build,Execution,Deployment -> Build Tools -> Maven`，然后设置以上三点即可。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/03a7a06fc2fc8389ac1316df1643c513.png?imageView2/2/w/1620)

### **类模板**

当我们创建一个类时，希望每个类的前边都已经一些注释的代码，用于标识这是我们自己所写的代码。此时就需要到 `Settings -> Editor -> File and Code Templates`，然后在右边的 `Includes -> File Header` 右边的方框中，填入如下模板。设置完成之后，以后我们每次创建新的类文件时，IDEA 都会在文件的开头添加如下信息。

```javascript
/**
 * Created with IntelliJ IDEA.
 * @Project      : ${PROJECT_NAME}
 * @Package      : ${PACKAGE_NAME}
 * @ClassName    : ${CLASS_NAME}.java
 * @createTime   : ${DATE} ${TIME}
 * @version      : 1.0
 * @author       : sublei
 * @Email        : 747731461@qq.com
 * @公众号        : 小磊子FL
 * @Website      : https://sublei.github.io
 * @Description  :
 */
```

![](https://ask.qcloudimg.com/http-save/yehe-6209990/8df09466c14136492a36863326cd62c5.png?imageView2/2/w/1620)

### **导入导出设置**

经过我们一番调教，IDEA 用起来就十分顺手了。但这时候问题就来了，要是我们换个系统或者电脑使用啥的，难道我们又得重新设置一遍么？当然不是了！IDEA 是支持导入导出我们的配置的，我们只需要将我们的设置导出，然后换电脑或者重装系统使用时进行导入即可。

#### **导出**

导出入口：依次打开 `File -> Manage IDE Settings -> Export Settings…`。

![](https://ask.qcloudimg.com/http-save/yehe-6209990/10907b91ac381b36d354f6ed6b29eb9b.png?imageView2/2/w/1620)

#### **导入**

导入入口，依次打开 `File -> Manage IDE Settings -> Import Settings…`。
