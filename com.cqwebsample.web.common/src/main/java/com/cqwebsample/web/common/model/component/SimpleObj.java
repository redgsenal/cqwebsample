package com.cqwebsample.web.common.model.component;

/**
 * @author reggie.senal
 */
public class SimpleObj {
	private String prop1;
	private String prop2;
	public SimpleObj(String prop1, String prop2) {
		this.prop1 = prop1;
		this.prop2 = prop2;
	}
	public String getProp1() {
		return prop1;
	}
	public void setProp1(String prop1) {
		this.prop1 = prop1;
	}
	public String getProp2() {
		return prop2;
	}
	public void setProp2(String prop2) {
		this.prop2 = prop2;
	}
}
