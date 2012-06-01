/*
Ext.define('login.view.EnterExpense', {
	//extend: 'Ext.Container',
	extend: 'Ext.form.Panel',
	xtype: 'EnterExpense',
	requires: [
		'Ext.ux.touch.grid.View',
		'Ext.ux.touch.grid.feature.Feature',
		'Ext.ux.touch.grid.feature.Sorter',
		'Ext.field.Select',
		'Ext.field.Number'		
	],
    config: {
		title: 'Expense Entry',
		iconCls: 'compose',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,		
		/*
        layout: {
            type : 'vbox'
        },
		*/
		/*
		xtype: 'fieldset',
		title: 'Enter Expense',
		layout: 'vbox',
		align : 'center',
		//instructions: 'Please enter your mail and password',		
		items: [
			//{			
				//layout: 'vbox',
				//items: [
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
						flex: 1,
						layout: 'hbox',
						items: [
							{
								flex: 1,
								html: '$'
							},
							{
								xtype: 'numberfield',
								name: 'amount',
								minValue: 18
							}
						]

					},
					{
						flex: 1,
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
						flex: 3,
						xtype: 'textareafield',
						name: 'description'
					}			
				//]						
			
			
			//}
		]


	}
});		

*/

///////////////////////////////////////////////////////////////////////////////////

Ext.define('login.view.EnterExpense', {
	extend: 'Ext.form.Panel',
	xtype: 'EnterExpense',
	
	requires: [
		'Ext.field.Select',
		'Ext.field.Number',
		'Ext.field.DatePicker',
		'Ext.field.Hidden'
	],
	config: {
		title: 'Expense Entry',
		iconCls: 'compose',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		items: [
			{
				xtype: 'fieldset',
				//title: 'Enter Expense',
				//instructions: 'Please enter your mail and password',
				
				items: [
					{
						xtype: 'datepickerfield',
						destroyPickerOnHide: true,
						name: 'date',
						label: 'Expense Date:',
						value: new Date(),
						picker: {
							yearFrom: 1990
						}
					},
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
						xtype: 'hiddenfield',
						name: 'DescriptionText',
						id: 'DescriptionId',
						value: 'abc'
					},
					{
						xtype: 'button',
						text: 'Enter Description',
						ui: 'confirm',
						handler: function() {
							var config = {xtype: 'textarea', value: 'test'};
							Ext.Msg.prompt("Enter the Description", "", function(btn, text, config){
								if (btn == 'ok'){
									// process text value...
									//var temp = this.up('EnterExpense').getItems();
									var temp = this.up('EnterExpense').down('#DescriptionId');
									temp.setValue(text);
									//form.down('DescriptionText')[0];
									//userId.setValue(text);

								}
							}, this, 4, null, { autoCapitalize : true, placeHolder : 'First-name please...' });
							//var morehelp = this.down('DescriptionText')[0];
							//morehelp.setValue(help);
							
						}			
					}					

					/*
					{
						xtype: 'textareafield',
						name: 'description',
						label: 'Description:'
					}
					*/
					//add camera here
				]
			},
			{
				xtype: 'button',
				text: 'OK',
				ui: 'confirm',
				handler: function() {
					var values = this.up('EnterExpense').getValues();
					console.log(values);
					Ext.Msg.alert('Saving Expense', "", Ext.emptyFn);
				}
			}			
			
		]
	}
});
