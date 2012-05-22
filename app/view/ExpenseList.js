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