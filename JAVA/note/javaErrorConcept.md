### 一、异常体系结构

java.lang.Throwable

|-----java.lang.Error：一般不编写针对性的代码进行处理。

|-----java.lang.Exception：可以进行异常的处理。

|-----编译时异常(checked)

|-----IOException

|-----FileNotFoundException

|-----ClassNotFoundException

|-----运行时异常(unchecked)

|-----NullPointerException

|-----ArrayIndexOutOfBoundsException11

|-----ClassCastException		111666666666

|-----NumberFormatException

|-----InputMismatchException

|-----ArithmeticException

### 二、异常处理的方式一：try-catch-finally

1.结构：

try{

testing code

}catch(errorType parameter1) {

excuting code problemly

}catch(errorType parameter1) {

excuting code problemly

}

finally

2.说明：

1. finally是可选的。
2. 使用try将可能出现异常代码包装起来，在执行过程中，一旦出现异常，就会生成一个对应异常的对象，根据此对象的类型，去catch中进行匹配
3. 一旦try中的异常对象匹配到某一个catch时，就进入到catch中进行异常的处理，

**一旦异常处理完成，就跳出当前的try-catch结构(在没有写finally的情况)。继续执行其后的代码**

4. catch中的异常类型如果没有子父类关系，则谁生命在上面谁声明在下无所谓。

catch中的异常类型若满足子父类关系，则要求子类一定要声明在父类的上面。否则，报错。

5. 常用的异常对象的处理方式：① String getMessage()	② printStackTrace()

### 三、异常处理的方式二:throws+异常类型

1.“throws +异常类型"写在方法的声明处。指明此方法执行时，可能会抛出的异常类型。
一旦当方法体执行时，出现异常，仍会在异常代码处生成一个异常类的对象，此对象满足throws后异常类型时,就会被抛出。**异常代码后续的代码,就不再执行!**


2．体会:try-catch-finally:真正的将异常给处理掉了。
throws的方式只是将异常扔给了方法的调用者。并没有真正将异常处理掉。

### 四、方法重写的规则之一：

1. 子类方法抛出的异常不能不能是父类方法抛出的异常的父类。

### 五、开发经验：

1. 如果父类中被重写的方法没有`throws`方式处理异常，则子类重写的方法也不能使用`throws`，意味着如果子类重写的方法中有异常，必须使用`try-catch-finally`方式处理。
2. 执行的方法a中，先后又调用了另外的几个方法，这几个方法是递进关系执行的。我们建议这几个方法使用throw的方式进行处理。而执行的方法a可以考虑使用try-catch-finally方式进行处理。

### 六、自定义异常

### 七、手动抛出异常

1. final、finally、finalize三者的区别？
2. 类似：throw 和 throws；Collection 和 Collections；String、StringBuffer、StringBuilder、ArrayList、LinkedList、HashMap、LinkedHashMap、重载、重写

```

```
