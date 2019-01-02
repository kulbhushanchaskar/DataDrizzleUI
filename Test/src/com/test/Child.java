package com.test;

public class Child extends Parent {
	
	private String str1;
	private int j;
	
	public Child(String str, int i) {
		super("str", 10);
//		this.str = str;
//		this.i = i;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + i;
		result = prime * result + ((str == null) ? 0 : str.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		/*if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;*/
		Child other = (Child) obj;
		if (i != other.i)
			return false;
		if (str == null) {
			if (other.str != null)
				return false;
		} else if (!str.equals(other.str))
			return false;
		return true;
	}
}
