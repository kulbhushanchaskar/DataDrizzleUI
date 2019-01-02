package com.test;

public class Main {

	public static void main(String[] args) {
		Parent p = new Parent("str", 10);
		Child c = new Child("str", 10);
		
		System.out.println(p.equals(c));
		
//		System.out.println(c.equals(p));
	}
	
}
