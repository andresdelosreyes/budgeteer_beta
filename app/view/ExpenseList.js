//extend: 'Ext.form.Panel',
Ext.define('login.view.ExpenseList', {
	extend: 'Ext.Container',
	xtype: 'ExpenseList',
	requires: [
		'Ext.ux.touch.grid.View',
		'Ext.ux.touch.grid.feature.Feature',
		'Ext.ux.touch.grid.feature.Sorter'		
	],
    config: {
		title: 'Expense List',
		iconCls: 'bookmarks',
        layout: {
            type : 'vbox',
            pack : 'center',
            align: 'stretch'
        },
		
        //cls   : 'card1',
		/*
		defaults: {
            xtype: 'container',
            flex : 1,
            layout: {
                type : 'hbox',
                align: 'middle'
            },
            defaults: {
                xtype : 'button',
                flex  : 1,
                margin: 10
            }
        },
		*/
		//main vbox
		//layout: 'vbox',
		items: [
			{
				//hbox title
				flex: 1,
				layout: 'hbox',
				items: [
					{
						xtype: 'panel',
						html: 'Expense List',
						flex: 1
					},
					{
						xtype: 'panel',
						html: 'Date',
						flex: 1
					}
				]
			},
			{
				flex: 6,
                xtype   : 'touchgridpanel',
                title   : 'Grid',
                store   : 'Grid',
				features   : [
					{
						ftype    : 'Ext.ux.touch.grid.feature.Sorter',
						launchFn : 'initialize'
					}
				],				
                columns : [
                    {
                        header    : 'Date',
                        dataIndex : 'date',
                        width     : '20%'
                    },
                    {
                        header    : 'Category',
                        dataIndex : 'category',
                        width     : '60%'
                    },
                    {
                        header    : '$',
                        dataIndex : 'amount',
                        width     : '20%'
                    }					
                ]
			}

		
		]
	}
});		