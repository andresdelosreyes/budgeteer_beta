Ext.define('login.view.ExpenseList', {
	extend: 'Ext.form.Panel',
	xtype: 'ExpenseList',
	requires: [
		'Ext.field.Select',
		'Ext.field.Number',
		'Ext.field.DatePicker'
	],
	
	config: {
		title: 'Expense List',
		iconCls: 'organize',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		
		
		items: [
			{
				xtype: 'fieldset',
				title: 'Filter by:',
				//instructions: 'Please enter your mail and password',
				
				items: [
					{
						xtype: 'selectfield',
						label: 'Category:',
						options: [
							{text: 'Food',  value: '1'},
							{text: 'Gas', value: '2'},
							{text: 'Clothes',  value: '3'},
							{text: 'Entertainment', value: '4'},
							{text: 'Utilities',  value: '5'},
							{text: 'Rent', value: '6'},
							{text: 'Other', value: '99'}

						]
					},
					{
						xtype: 'datepickerfield',
						label: 'Start Date',
						name: 'sdate',
						value: new Date()
					},
					{
						xtype: 'datepickerfield',
						label: 'End Date',
						name: 'edate',
						value: new Date()
					}
				]
			},
			{
				xtype: 'button',
				text: 'Filter',
				ui: 'confirm',
				handler: function() {
					Ext.Msg.alert('Filtering...', 'Pleas wait', Ext.emptyFn);
				}
			}			
			
		]		
		

	}
});




/*

//extend: 'Ext.form.Panel',
Ext.define('login.view.ExpenseList', {
	extend: 'Ext.Container',
	xtype: 'ExpenseList',
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


*/