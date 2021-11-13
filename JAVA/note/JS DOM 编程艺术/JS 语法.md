### 快速辨别出变量和函数

* 变量：中划线命名法或下划线命名法
* 函数：驼峰命名法。

### DOM：是一种适用于多种环境和多种程序设计语言的通用型API

#### CSS	的继承功能：

类似于DOM，CSS也把文档的内容看作一颗节点树，节点树上的各个元素将继承父元素的样式功能。

将样式作用于某个特定的元素：要想把某一个元素或几个元素与其他元素区分开来，就得使用特殊标志：class属性或id属性。

#### DOM提供的五个方法：

1. document.getElementById：返回一个特定对象
2. document.getElementByTagName：返回一个对象数组：
3. document.getElementByClassName：返回一个对象数组
4. nodeObject.getAttribute(attribute)
5. nodeObject.setAttribute(attribute, value)

### 案例研究：JavaScript图片库

#### 事件处理函数的工作机制

在给某个元素添加了事件处理函数后，一旦事件发生，相应的 JavaScript 代码就会得到执行。被调用的JavaScrip代码可以返回

一个值，这个值将被传递给那个事件处理函数。例如，我们可以给某个链接贴加一个事件处理函数，并让这个处理函数所触发的

JavaScript代码返回布尔值 true 或 false 。这样一来，当这个链接被点击时，如果那段 JavaScript代码返回的值是 true,onclick

事件处理函数就认为这个链接被点击了”;反之，如果返回的值是false, onc1ick事件处理函数就认为“这个链接没有被点击”。

简单测试：`<a href="http://www.example.com" onclick=" console.log(this); return false;">Click me</a>`

**注意**：JS代码包含在一对引号里，this关键字在这儿的含义是“这个对象”。在上面的例子中，this表示“这个 `<a>`元素节点"

#### nodeType 属性（12种可取值）

* [ ] 元素节点的nodeType 属性值是 1。
* [ ] 属性节点的nodeType 属性值是 2。
* [ ] 文本节点的nodeType 属性值是 3。

#### nodeValue 属性：用来得到（或设置）一个文本结点的值

实例：`<p id="exa">text</p>`

`document.getElementById("exa").childNodes[0].nodeValue = text2;`

#### `javascript:` 伪协议

`<a href="javascript:show('images/person.jpg'); return false;" title="an American">firing</a> `在不支持或禁用了JavaScript的浏览器里将毫无用处。所以一般得留一手：

` <a href="imags/person.jpg" onclic="show('imags/person.jpg'); return false;" title="an American">`firing `</a> `

#### 结构化程序设计

原则一：函数应该只有一个入口和出口

个人理解：若一个函数有多个出口，只要这些出口都集中在函数的开头部分，就是可以接受的。  

#### HTML-DOM
