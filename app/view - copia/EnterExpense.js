Ext.define('login.view.EnterExpense', {
	extend: 'Ext.form.Panel',
	xtype: 'EnterExpense',
	
	requires: [
		'Ext.field.Select',
		'Ext.field.Number'
	],
	
	config: {
		title: 'Expense Entry',
		iconCls: 'add',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		items: [
			{
				xtype: 'fieldset',
				title: 'Enter Expense',
				//instructions: 'Please enter your mail and password',
				
				items: [
					{
						xtype: 'numberfield',
						name: 'amount',
						minValue: 18,
						label: 'Amount:'
					},
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
						xtype: 'textareafield',
						name: 'description',
						label: 'Description:'
					}
					//add camera here
				]
			},
			{
				xtype: 'button',
				text: 'OK',
				ui: 'confirm',
				handler: function() {
					Ext.Msg.alert('Saving Expense', 'Pleas wait', Ext.emptyFn);
				}
			}			
			
		]
	}
});