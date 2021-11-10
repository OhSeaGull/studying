package section10;

/*
 * JDK8,除了定义全局常量和抽象方法之外，还可以定义静态方法，默认方法
 * 
 * 
 * 
 * 
 * */

public interface CompareA {

	//静态方法
	public static void method() {
		System.out.println("CompareA:北京");
	}
	//默认方法
	public default void method2() {
		System.out.println("CompareA:上海");
	}
	//省略了public
	default void method3() {
		System.out.println("CompareA:上海");
	}
}

interface CompareB{
	default void method3() {
		System.out.println("CompareB:上海");
	}
}

class SuperClass{
	void method3() {
		System.out.println("SuperCompare:上海");
	}
}

class SubClassTest{
	
	public static void main(String[] args) {
		SubClass s = new SubClass();
		
//		s.method();
//		SubClass.method();
		//知识点一：接口中定义的静态方法，只能通过接口来调用
		CompareA.method();
		//知识点二：通过实现类的对象，可以调用接口中的默认方法
		//若实现类重写了接口中的默认方法，调用时，任然调用的是重写后的方法
		s.method2();
		//知识点三：若子类（或实现类）继承的父类和实现的接口中声明了同名同参的方法，
		//那么子类在没有重写此方法的情况下，默认调用的是父类中的同名同参的方法。---》类优先原则
		//知识点四：如果实现类实现了多个接口，二者多个接口中定义了同名同参的默认方法
		//那么在实现类没有重写此方法的情况下，报错。---》接口冲突
		//这就需要我们必须在实现类中重写此方法
		s.method3();
		
	}
}

class SubClass extends SuperClass implements CompareA,CompareB{
	
	public void method2() {
		System.out.println("CompareA:上海");
	}
	public void method3() {
		System.out.println("CompareA:深圳");
	}
	
	//知识点五：如何在子类（或实现类）的方法中调用父类、接口中被重写的方法
	public void myMethod() {
		method3(); //调用自己定义的重写的方法
		super.method3(); //调用的是父类中声明的
		//调用接口中的默认方法
		CompareA.super.method3();
		CompareB.super.method3();
	}
}


















