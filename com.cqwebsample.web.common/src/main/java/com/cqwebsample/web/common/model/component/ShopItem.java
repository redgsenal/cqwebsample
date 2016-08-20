package com.cqwebsample.web.common.model.component;

/**
 * Shop item container
 * @author reggie.senal
 *
 */
public class ShopItem {
	private String shopName;
	private String shopAddress;
	private String shopImage;
	private String shopPhone;
	private String shopLocation;

	public ShopItem(String shopName, String shopAddress, String shopImage,
			String shopPhone, String shopLocation) {
		super();
		this.shopName = shopName;
		this.shopAddress = shopAddress;
		this.shopImage = shopImage;
		this.shopPhone = shopPhone;
		this.shopLocation = shopLocation;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public String getShopAddress() {
		return shopAddress;
	}
	public void setShopAddress(String shopAddress) {
		this.shopAddress = shopAddress;
	}
	public String getShopImage() {
		return shopImage;
	}
	public void setShopImage(String shopImage) {
		this.shopImage = shopImage;
	}
	public String getShopPhone() {
		return shopPhone;
	}
	public void setShopPhone(String shopPhone) {
		this.shopPhone = shopPhone;
	}
	public String getShopLocation() {
		return shopLocation;
	}
	public void setShopLocation(String shopLocation) {
		this.shopLocation = shopLocation;
	}
}
