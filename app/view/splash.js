Ext.define('login.view.splash', {
	extend: 'Ext.tab.Panel',
	xtype: 'splash',
	requires: ['Ext.ux.touch.grid.View'],
	config: {
		title: 'Splash',
		iconCls: 'home',
		cls: 'home',
		scrollable: true,
		//styleHtmlContent: true,
		items: 
			{
                xtype   : 'touchgridpanel',
                title   : 'Grid',
                store   : 'Grid',
                columns : [
                    {
                        header    : 'Text',
                        dataIndex : 'text',
                        width     : '60%'
                    },
                    {
                        header    : 'Amount',
                        dataIndex : 'amount',
                        width     : '40%'
                    }
                ]		
			}
		
	}
});	