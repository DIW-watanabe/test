package jp.co.diworks.action;

public class Test {
	public static void main (String[] ags) {
		
		Person taro = new Person();
		taro.name ="山田太郎";
		taro.age = 20;
		
		Robot aibo = new Robot();
		aibo.name = "aibo";
		Robot asimo = new Robot();
		asimo.name = "asimo";
		Robot pepper = new Robot();
		pepper.name = "pepper";
		
		System.out.println(taro.name);
		System.out.println(taro.age);
		
		Person jiro = new Person();
		jiro.name = "木村次郎";
		jiro.age = 18;
		
		System.out.println(jiro.name);
		System.out.println(jiro.age);
		
		Person hanako = new Person();
		
		hanako.name = "鈴木花子";
		hanako.age = 16;
		
		System.out.println(hanako.name);
		System.out.println(hanako.age);
		
		Person haruki = new Person();
		haruki.name = "渡辺春希";
		haruki.age = 28;
		
		System.out.println(haruki.name);
		System.out.println(haruki.age);
		
		taro.talk();
		taro.walk();
		taro.run();
		
		aibo.talk();
		aibo.walk();
		aibo.run();
		
		asimo.talk();
		asimo.walk();
		asimo.run();
		
		pepper.talk();
		pepper.walk();
		pepper.run();
		
	}
	

}
