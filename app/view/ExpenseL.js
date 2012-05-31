Ext.define('login.view.Budget', {
	extend: 'Ext.Container',
	xtype: 'BudgetHome',
    config: {
		title: 'Title',
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
		items: [
			{
				//title hbox
				layout: {
					type : 'hbox',
					//title items
					items: [
						{
							xtype: 'textfield',
							label: 'First Name',
							name: 'firstName',
							//xtype: 'panel',
							//html: 'Budget Name',
							flex: 1
						},
						{
							xtype: 'datepickerfield',
							label: '',
							name: 'mainDate',
							value: new Date(),
							flex: 1
						}
					]
				},
				//Budget Amount hbox
				layout: {
					type : 'hbox',
					//title items
					items: [
						{
							xtype: 'panel',
							html: 'Budget Name',
							flex: 65
						},
						{
							xtype: 'datepickerfield',
							label: '',
							name: 'mainDate',
							value: new Date(),
							flex: 35
						}
					]
				}				

			},
		
		
		
		
		
		
		]
	}
});		