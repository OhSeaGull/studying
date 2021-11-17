一、如何实例化成员内部类的对象
1、外部类访问内部类：

　　　内部类被static修饰：可以直接new

　　　　Inner in = new Inner();

　　　内部类没有被static修饰:得先new出来外部类的实例，再new内部类的

　　　　Inner in = new Outer().new Inner();

二、如何在成员内部类中区分调用外部类的结构
2、内部类访问外部类：（外部类.this.变量）

 

复制代码
 1 public class Outer {
 2     int x = 9;
 3     class Inner{
 4         int x = 8;
 5         public void test(){
 6             int x = 7;
 7             System.out.println(x);
 8             System.out.println(this.x);
 9             System.out.println(Outer.this.x);
10             test1();
11         }
12     }
13     
14     private void test1(){
15         System.out.println("test");
16     }
17     public static void main(String[] args) {
18         Inner in = new Outer().new Inner();
19         in.test();
20     }
21 }
复制代码
 

 

 

输出为：7，8，9，test

分析：第七行第八行相信大家都没有什么问题，第九行输出的是9，说明访问到了外部类的变量，而输出的test说明内部类访问到了外部类的test1方法

总结：

　　输出是9的原因：因为内部类持有一个外部类的引用，格式：外部类名.this

　　可以调用private方法原因是：因为他们在一个类Outer中所以可以调用

三、开发中局部内部类的使用
3、外部类和内部类中的方法相互访问：

①外部类的静态方法test和非静态内部类的非静态方法voice的相互访问：

   !  test----->voice       先new外类再new内类，再调方法

复制代码
 1 public class Outerclass {
 2     class Inner{
 3         public void voice(){
 4             System.out.println("voice()");
 5         }
 6     }
 7     public static void test(){
 8         new Outerclass().new Inner().voice();
 9     }
10     public static void main(String[] args) {
　　　　　　//主函数调用test方法
11        test();13     }
14 }
复制代码
输出：voice();

   !!  voice----->test        外类.this.方法（持有的外部类的引用）

复制代码
 1 public class Outerclass {
 2     class Inner{
 3         public void voice(){
 4             Outerclass.this.test();
 5         }
 6     }
 7     public static void test(){
 8         System.out.println("test()");
 9     }
10     public static void main(String[] args) {
　　　　//主函数调用voice()
11         Inner in = new Outerclass().new Inner();
12         in.voice();
13     }
14 }
复制代码
 输出：test();

  ②外部类的非静态方法test和静态内部类中的非静态方法voice之间的相互调用

　! voice------>test

复制代码
 1 public class Outerclass {
 2     static class Inner{
 3         public void voice(){
 4             new Outerclass().test();
 5         }
 6     }
 7     public void test(){
 8         System.out.println("test()");
 9     }
10     public static void main(String[] args) {
　　　　//主函数调用voice()方法
11         new Outerclass.Inner().voice();
12     }
13 }
复制代码
输出：test();

!!  test----->voice

复制代码
 1 public class Outerclass {
 2     static class Inner{
 3         public void voice(){
 4             System.out.println("voice()");
 5         }
 6     }
 7     public void test(){
　　　　　　//1、其他类访问外部类中的静态内部类的非静态方法
 8        // new Outerclass.Inner().voice();
　　　　　　//2、此处的Outerclass中的test方法访问静态内部类中的非静态方法
　　　　　　 new Inner().voice();
 9     }
10     public static void main(String[] args) {
　　　　　　//主函数调用test方法
11         new Outerclass().test();
12     }
13 }
复制代码
输出：voice();

 

4、总结：

外部类访问内部类：必须建立内部类的对象

内部类访问外部类：内部类可以直接访问外部类的成员包括私有成员，因为外部类持有内部类的引用

 

特例：内部类写在外部类的方法中(即局部变量的位置)

　　1、内部来外部类均可定义变量/常量

　　2、只能被final/abstract修饰

　　3、只能访问被final/abstract修饰的变量

　　4、可以直接访问外部类中的成员，因为还持有外部类的引用




