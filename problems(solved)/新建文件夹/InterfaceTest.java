package section10;

/*
 *接口的使用
 *1. 接口使用interface来定义
 *2. Java中，接口和类是并列的两个结构
 *3. 如何定义接口：定义接口中的成员
 *
 * 		3.1 JDK7以前，只能定义全局常量和抽象方法
 * 			》 全局常量：public static final,但是可以省略
 * 			》　抽象方法：public abstract,但是可以省略
 * 
 * 		3.2 JDK8,除了定义全局常量和抽象方法之外，还可以定义静态方法，默认方法
 * 
 * 4. 接口中不能定义构造器，意味着接口不能实例化
 * 
 * 5. Java开发中，接口可以通过让类去实现(implements)的方法来使用
 * 		若实现类覆盖了接口中的所有抽象方法，则此实现类就可以实例化
 * 		若实现类没有覆盖接口中所有的抽象方法，则此实现类认为一个抽象类
 *	 
 * 6. Java类可以实现多个接口 ---》 弥补了Java类的单继承性的局限性
 * 	 格式：class AA extends BB implements CC,DD
 * 
 * 7. 接口与接口之间可以继承，并且可以多继承
 * 
 * *************************************************
 * 8. 接口的具体使用，体现多态性
 * 9.接口实际上可以看作一个规范
 * 
 * 面试题：抽象类与接口有哪些异同？
 * */



public class InterfaceTest {
	public static void main(String[] args) {
		System.out.println(Flyable.MAX_SPEED);
		System.out.println(Flyable.MIN_SPEED);
	}
}

interface Attackable{
	public abstract void attack();
}

interface Flyable {
	
	//全局常量
	public static final int MAX_SPEED = 7900; //第一宇宙速度
	int MIN_SPEED = 1;
	
	//抽象方法
	public abstract void fly();
	void stop();
}

class Plane implements Flyable {
	
	@Override
	public void fly() {
		System.out.println("通过引擎起飞");
	}
	
	@Override
	public void stop() {
		System.out.println("驾驶员减速停止");
	}
}

class Bullet extends Object implements Flyable,Attackable,CC{
	@Override
	public void attack() {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void fly() {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void stop() {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void method1() {
		// TODO Auto-generated method stub
		CC.super.method1();
	}
	
	@Override
	public void method2() {
		// TODO Auto-generated method stub
		CC.super.method2();
	}
}

//***********************

interface AA{
	void method1();
}

interface BB{
	void method2();
}

interface CC extends AA,BB{
	
	@Override
	default void method1() {
		
	}
	
	@Override
	default void method2() {
		
	}
}





















