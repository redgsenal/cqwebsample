package com.cqwebsample.web.common.utils;

import com.cqwebsample.web.common.model.component.ShopItem;

import java.util.ArrayList;

import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;

public class HelperUtils {

	  /**
     * Singapore local time
     * @return String value of current time in milliseconds
     */
    public static String getServerTime(){
    	return String.valueOf(System.currentTimeMillis());
    }
    
    public static ArrayList<ShopItem> getShopItems(String[] items){
    	ArrayList<ShopItem> list = new ArrayList<ShopItem>();
    	if (items.length > 0){
    		for(String item : items){
    			try {
					JSONObject jobj = new JSONObject(item);
					String shopName = jobj.getString("shopName");
					String shopAddress = jobj.getString("shopAddress");
					String shopImage = jobj.getString("shopImage");
					String shopPhone = jobj.getString("shopPhone");
					String shopLocation = jobj.getString("shopLocation");
					list.add(new ShopItem(shopName, shopAddress, shopImage, shopPhone, shopLocation));
				} catch (JSONException e) {
					e.printStackTrace();
				}
    		}
    	}
		return list;		
    }
}