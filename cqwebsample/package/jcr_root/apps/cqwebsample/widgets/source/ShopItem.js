CQ.ShopItem = CQ.Ext.extend(CQ.form.CompositeField, {

    /**
     * @private
     * @type CQ.Ext.form.Hidden
     */
    hiddenField: null,
    
    /**
     * @private
     * @type CQ.Ext.form.TextField
     */
    shopName: null,

    /**
     * @private
     * @type CQ.Ext.form.TextArea
     */
    shopAddress: null,
    
    /**
    * @private
    * @type CQ.form.PathField
    */
    shopImage: null,
    
    /**
     * @private
     * @type CQ.Ext.form.TextField
     */
    shopPhone: null,
   
    /**
     * @private
     * @type CQ.Ext.form.TextField
     */
    shopLocation: null,

    constructor: function (config) {
        config = config || {};
        var defaults = {
            "border": true,
            "layout": "form",
            "width" : "720",
            "padding" : "15px"
        };
        config = CQ.Util.applyDefaults(config, defaults);
        CQ.ShopItem.superclass.constructor.call(this, config);
    },

    //overriding CQ.Ext.Component#initComponent
    initComponent: function () {
        CQ.ShopItem.superclass.initComponent.call(this);

        // Hidden field
        this.hiddenField = new CQ.Ext.form.Hidden({
            name: this.name
        });
        this.add(this.hiddenField);

        this.shopName = new CQ.Ext.form.TextField({
        	allowBlank: false,
            fieldLabel: "Shop Name: ",
            width: 680,
            listeners: {
                change: {
                    scope: this,
                    fn: this.updateHidden
                }
            }
        });
        
        this.shopAddress = new CQ.Ext.form.TextArea({
            allowBlank: false,
            fieldLabel: "Address: ",
            width: 680,
            listeners: {
                change: {
                    scope: this,
                    fn: this.updateHidden
                },
                dialogclose: {
                    scope: this,
                    fn: this.updateHidden
                }
            }
         });
    	
        this.shopImage = new CQ.form.PathField({
    		fieldLabel: "Shop Image: ",
    		allowBlank: false,
    		width: 680,
    		listeners: {
    			change: {
    				scope: this,
    				fn: this.updateHidden
    			},
    			dialogclose: {
    				scope: this,
    				fn: this.updateHidden
    			}
    		}
    	});
        
        this.shopPhone = new CQ.Ext.form.TextField({
        	allowBlank: true,
            fieldLabel: "Telephone Number: ",
            width: 680,
            listeners: {
                change: {
                    scope: this,
                    fn: this.updateHidden
                }
            }
        });
        
        this.shopLocation = new CQ.Ext.form.TextField({
        	allowBlank: false,
            fieldLabel: "Map Latitude and Longitude (lat, long): ",
            width: 680,
            listeners: {
                change: {
                    scope: this,
                    fn: this.updateHidden
                }
            }
        });
        
    	this.add(this.shopName);    	
        this.add(this.shopAddress);
        this.add(this.shopImage);
        this.add(this.shopPhone);
        this.add(this.shopLocation);
    },

    processInit: function (path, record) {
    	this.shopName.processInit(path, record);
        this.shopAddress.processInit(path, record);
        this.shopImage.processInit(path, record);
        this.shopPhone.processInit(path, record);
        this.shopLocation.processInit(path, record);
    },

    setValue: function (value) {
        var link = JSON.parse(value);
        this.shopName.setValue(link.shopName);
        this.shopAddress.setValue(link.shopAddress);
        this.shopImage.setValue(link.shopImage);
        this.shopPhone.setValue(link.shopPhone);
        this.shopLocation.setValue(link.shopLocation);
        this.hiddenField.setValue(value);
    },

    getValue: function () {
        return this.getRawValue();
    },

    getRawValue: function () {
        var link = {
        	"shopName" : this.shopName.getValue(),
            "shopAddress" : this.shopAddress.getValue(),
            "shopImage" : this.shopImage.getValue(),
            "shopPhone" : this.shopPhone.getValue(),
            "shopLocation" : this.shopLocation.getValue()
        };
        return JSON.stringify(link);
    },

    updateHidden: function () {
        this.hiddenField.setValue(this.getValue());
    }
});
CQ.Ext.reg('ShopItem', CQ.ShopItem);
