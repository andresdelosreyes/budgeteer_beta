Ext.define("login.view.Main", {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar'],
    config: {
        //tabBarPosition: 'bottom',
		
        items: [
			{
				xtype: 'Loginform',
			}
        ]
		
		
    }
});