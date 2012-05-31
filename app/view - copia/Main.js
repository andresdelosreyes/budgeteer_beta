Ext.define("login.view.Main", {
    extend: 'Ext.tab.Panel',
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